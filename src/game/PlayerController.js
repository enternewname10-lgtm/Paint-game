import * as THREE from 'three'

const SPEED_STAND  = 5.5
const SPEED_RUN    = 9.5
const SPEED_CROUCH = 3.0
const SPEED_PRONE  = 1.6
const CAM_DIST     = 4.5
const CAM_HEIGHT   = 1.8

export class PlayerController {
  constructor(character, camera, wallBoxes, canvas) {
    this.character = character
    this.camera    = camera
    this.wallBoxes = wallBoxes
    this.canvas    = canvas

    this.yaw       = 0
    this.pitch     = 0.25
    this.keys      = {}
    this.locked    = false   // pointer lock active
    this.paused    = false   // seekers frozen during prep
    this.posLocked = false   // player chose to lock position [F]
    this.running   = false
    this.moving    = false
    this.pose      = 'stand'
    this.time      = 0

    this._camTarget = new THREE.Vector3()

    this._buildUI()
    this._bindInput()
  }

  // ── UI ──────────────────────────────────────────────────────
  _buildUI() {
    // "CLICK TO LOOK" hint
    this._lookHint = document.createElement('div')
    this._lookHint.style.cssText = `
      position:fixed; bottom:82px; left:50%; transform:translateX(-50%);
      background:rgba(36,28,14,0.82); color:#f4ede0;
      font-family:'Bangers',cursive; font-size:19px; letter-spacing:2px;
      padding:8px 22px; border-radius:8px; border:2px solid #808070;
      pointer-events:none; z-index:22; transition:opacity .25s;
    `
    this._lookHint.textContent = 'CLICK TO LOOK AROUND'
    document.body.appendChild(this._lookHint)

    // "LOCKED" badge top-left
    this._lockBadge = document.createElement('div')
    this._lockBadge.style.cssText = `
      position:fixed; top:18px; left:18px;
      background:rgba(36,28,14,0.88); color:#c9940a;
      font-family:'Bangers',cursive; font-size:18px; letter-spacing:2px;
      padding:7px 16px; border-radius:8px; border:2px solid #c9940a;
      pointer-events:none; z-index:22; display:none;
    `
    this._lockBadge.innerHTML = '📌 LOCKED &nbsp;<span style="color:#808070;font-size:14px">[F] to move</span>'
    document.body.appendChild(this._lockBadge)
  }

  // ── Input ────────────────────────────────────────────────────
  _bindInput() {
    this._onKey = e => {
      const k = e.code.toLowerCase()
      this.keys[k] = e.type === 'keydown'

      if (e.type === 'keydown' && k === 'keyf') this._togglePosLock()
    }

    this._onMouseMove = e => {
      if (!this.locked) return
      this.yaw -= e.movementX * 0.0022

      // Extended pitch when pos-locked (can look almost straight up/down to inspect)
      const pitchMax = this.posLocked ? 1.45 : 0.65
      const pitchMin = this.posLocked ? -1.35 : -0.55
      this.pitch = Math.max(pitchMin, Math.min(pitchMax, this.pitch - e.movementY * 0.0022))
    }

    this._onLockChange = () => {
      this.locked = document.pointerLockElement === this.canvas
      this._lookHint.style.opacity = this.locked ? '0' : '1'
    }

    document.addEventListener('keydown',           this._onKey)
    document.addEventListener('keyup',             this._onKey)
    document.addEventListener('mousemove',         this._onMouseMove)
    document.addEventListener('pointerlockchange', this._onLockChange)

    this.canvas.addEventListener('click', () => {
      if (!this.locked) this.canvas.requestPointerLock?.()
    })
  }

  _togglePosLock() {
    this.posLocked = !this.posLocked
    this._lockBadge.style.display = this.posLocked ? 'block' : 'none'

    if (!this.posLocked) {
      // Re-engage pointer lock for movement
      this.canvas.requestPointerLock?.()
    }
  }

  setPose(pose) {
    this.pose = pose
    this.character.setPose(pose)
  }

  // ── Update ───────────────────────────────────────────────────
  update(delta) {
    this.time += delta

    // Always update camera (orbit works whether locked or not)
    this._updateCamera()

    if (this.posLocked) {
      // Frozen in place — play idle and return
      this.character.animate(delta, false, this.pose, false)
      return
    }

    if (this.paused) return

    this.running = (this.keys['shiftleft'] || this.keys['shiftright']) && this.pose === 'stand'

    const speed = this.pose === 'crouch' ? SPEED_CROUCH
                : this.pose === 'prone'  ? SPEED_PRONE
                : this.running           ? SPEED_RUN
                : SPEED_STAND

    // Movement relative to camera yaw
    const sinY    = Math.sin(this.yaw)
    const cosY    = Math.cos(this.yaw)
    const forward = new THREE.Vector3(-sinY, 0, -cosY)
    const right   = new THREE.Vector3( cosY, 0, -sinY)

    const move = new THREE.Vector3()
    if (this.keys['keyw'] || this.keys['arrowup'])    move.addScaledVector(forward,  1)
    if (this.keys['keys'] || this.keys['arrowdown'])  move.addScaledVector(forward, -1)
    if (this.keys['keyd'] || this.keys['arrowright']) move.addScaledVector(right,    1)
    if (this.keys['keya'] || this.keys['arrowleft'])  move.addScaledVector(right,   -1)

    this.moving = move.lengthSq() > 0.001
    if (this.moving) move.normalize().multiplyScalar(speed * delta)

    // Slide collision on X and Z separately
    const pos = this.character.group.position
    const R = 0.35, H = 1.9

    const tryX = pos.x + move.x
    if (!this._hits(tryX, pos.z, R, H)) pos.x = tryX

    const tryZ = pos.z + move.z
    if (!this._hits(pos.x, tryZ, R, H)) pos.z = tryZ

    pos.y = 0

    // Rotate character to face movement direction
    if (this.moving) {
      const angle = Math.atan2(move.x, move.z)
      this.character.group.rotation.y = THREE.MathUtils.lerp(
        this.character.group.rotation.y, angle, 0.18
      )
    }

    this.character.animate(delta, this.moving, this.pose, this.running)
  }

  _hits(x, z, r, h) {
    const box = new THREE.Box3(
      new THREE.Vector3(x - r, 0.05, z - r),
      new THREE.Vector3(x + r, h,    z + r)
    )
    return this.wallBoxes.some(w => box.intersectsBox(w))
  }

  _updateCamera() {
    const pos  = this.character.group.position
    // Slightly further back when pos-locked so you can see the whole character
    const dist = this.posLocked ? CAM_DIST + 1.8 : CAM_DIST

    const tx = pos.x + Math.sin(this.yaw) * dist
    const ty = pos.y + CAM_HEIGHT + this.pitch * 2.2
    const tz = pos.z + Math.cos(this.yaw) * dist

    this.camera.position.set(tx, ty, tz)
    this._camTarget.set(pos.x, pos.y + 1.1, pos.z)
    this.camera.lookAt(this._camTarget)
  }

  destroy() {
    document.removeEventListener('keydown',           this._onKey)
    document.removeEventListener('keyup',             this._onKey)
    document.removeEventListener('mousemove',         this._onMouseMove)
    document.removeEventListener('pointerlockchange', this._onLockChange)
    document.exitPointerLock?.()
    this._lookHint?.remove()
    this._lockBadge?.remove()
  }
}
