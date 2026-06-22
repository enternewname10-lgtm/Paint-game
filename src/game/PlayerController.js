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

    this.yaw     = 0
    this.pitch   = 0.25
    this.keys    = {}
    this.locked  = false
    this.moving  = false
    this.running = false
    this.paused  = false
    this.pose    = 'stand'
    this.time    = 0

    this._camPos    = new THREE.Vector3()
    this._camTarget = new THREE.Vector3()
    this._prevPos   = new THREE.Vector3()
    this._charVel   = { x: 0, z: 0 }

    this._buildHint()
    this._bindInput()
  }

  // "Click to look around" overlay shown when pointer lock is inactive
  setPose(pose) {
    this.pose = pose
    this.character.setPose(pose)
  }

  _buildHint() {
    this._hint = document.createElement('div')
    this._hint.style.cssText = `
      position:fixed; bottom:80px; left:50%; transform:translateX(-50%);
      background:rgba(36,28,14,0.82); color:#f4ede0;
      font-family:'Bangers',cursive; font-size:20px; letter-spacing:2px;
      padding:8px 22px; border-radius:8px; border:2px solid #808070;
      pointer-events:none; z-index:22; transition:opacity .3s;
    `
    this._hint.textContent = 'CLICK TO LOOK AROUND'
    document.body.appendChild(this._hint)
  }

  _bindInput() {
    this._onKey = e => {
      this.keys[e.code.toLowerCase()] = e.type === 'keydown'
    }

    this._onMouseMove = e => {
      if (!this.locked) return
      this.yaw   -= e.movementX * 0.0022
      this.pitch  = Math.max(-0.55, Math.min(0.65,
        this.pitch - e.movementY * 0.0022
      ))
    }

    this._onLockChange = () => {
      this.locked = document.pointerLockElement === this.canvas
      this._hint.style.opacity = this.locked ? '0' : '1'
    }

    document.addEventListener('keydown', this._onKey)
    document.addEventListener('keyup',   this._onKey)
    document.addEventListener('mousemove', this._onMouseMove)
    document.addEventListener('pointerlockchange', this._onLockChange)

    // Click canvas → request pointer lock (only when not in paint mode)
    this.canvas.addEventListener('click', () => {
      if (!this.locked) this.canvas.requestPointerLock?.()
    })
  }

  update(delta) {
    this.time += delta
    if (this.paused) { this._updateCamera(); return }

    this.running = this.keys['shiftleft'] || this.keys['shiftright']

    const speed = this.pose === 'crouch' ? SPEED_CROUCH
                : this.pose === 'prone'  ? SPEED_PRONE
                : this.running           ? SPEED_RUN
                : SPEED_STAND

    // Movement vectors relative to camera yaw
    const sinY = Math.sin(this.yaw)
    const cosY = Math.cos(this.yaw)
    const forward = new THREE.Vector3(-sinY, 0, -cosY)
    const right   = new THREE.Vector3( cosY, 0, -sinY)

    const move = new THREE.Vector3()
    if (this.keys['keyw'] || this.keys['arrowup'])    move.addScaledVector(forward,  1)
    if (this.keys['keys'] || this.keys['arrowdown'])  move.addScaledVector(forward, -1)
    if (this.keys['keyd'] || this.keys['arrowright']) move.addScaledVector(right,    1)
    if (this.keys['keya'] || this.keys['arrowleft'])  move.addScaledVector(right,   -1)

    this.moving = move.lengthSq() > 0.001
    if (this.moving) move.normalize().multiplyScalar(speed * delta)

    // Slide collision on X and Z axes separately
    const pos = this.character.group.position
    const R = 0.35
    const H = 1.9

    const tryX = pos.x + move.x
    if (!this._hits(tryX, pos.y, pos.z, R, H)) pos.x = tryX

    const tryZ = pos.z + move.z
    if (!this._hits(pos.x, pos.y, tryZ, R, H)) pos.z = tryZ

    // Keep on floor
    pos.y = 0

    // Rotate character to face move direction
    if (this.moving) {
      const angle = Math.atan2(move.x, move.z)
      this.character.group.rotation.y = THREE.MathUtils.lerp(
        this.character.group.rotation.y, angle, 0.2
      )
    }

    // Compute character velocity for physics (world-space per second)
    const cp = this.character.group.position
    this._charVel.x = (cp.x - this._prevPos.x) / Math.max(delta, 0.001)
    this._charVel.z = (cp.z - this._prevPos.z) / Math.max(delta, 0.001)
    this._prevPos.set(cp.x, cp.y, cp.z)

    // Write velocity into character so its spring system can use it
    this.character._vel = this._charVel

    this.character.animate(delta, this.moving, this.pose, this.running)
    this._updateCamera()
  }

  _hits(x, y, z, r, h) {
    const box = new THREE.Box3(
      new THREE.Vector3(x - r, y + 0.05, z - r),
      new THREE.Vector3(x + r, y + h,    z + r)
    )
    return this.wallBoxes.some(w => box.intersectsBox(w))
  }

  _updateCamera() {
    const pos = this.character.group.position

    const tx = pos.x + Math.sin(this.yaw) * CAM_DIST
    const ty = pos.y + CAM_HEIGHT + this.pitch * 2.2
    const tz = pos.z + Math.cos(this.yaw) * CAM_DIST

    // Direct camera — no lag, feels responsive
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
    this._hint?.remove()
  }
}
