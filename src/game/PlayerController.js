import * as THREE from 'three'

const SPEED_STAND  = 6.0
const SPEED_CROUCH = 3.2
const SPEED_PRONE  = 1.8
const CAM_DIST     = 4.5
const CAM_HEIGHT   = 1.8
const CAM_SMOOTH   = 0.12

export class PlayerController {
  constructor(character, camera, wallBoxes, canvas) {
    this.character = character
    this.camera    = camera
    this.wallBoxes = wallBoxes
    this.canvas    = canvas

    this.vel      = new THREE.Vector3()
    this.yaw      = 0   // horizontal camera angle
    this.pitch    = 0.3 // vertical camera angle (radians)
    this.keys     = {}
    this.locked   = false // pointer lock active
    this.moving   = false
    this.time     = 0
    this.pose     = 'stand'

    // Camera target (smooth follow)
    this._camPos = new THREE.Vector3()

    this._bindInput()
    this._requestPointerLock()
  }

  _bindInput() {
    this._onKey = e => {
      const k = e.code.toLowerCase()
      this.keys[k] = e.type === 'keydown'
    }
    this._onMouseMove = e => {
      if (!this.locked) return
      this.yaw   -= e.movementX * 0.002
      this.pitch -= e.movementY * 0.002
      this.pitch  = Math.max(-0.6, Math.min(0.7, this.pitch))
    }
    this._onLockChange = () => {
      this.locked = document.pointerLockElement === this.canvas
    }

    document.addEventListener('keydown',            this._onKey)
    document.addEventListener('keyup',              this._onKey)
    document.addEventListener('mousemove',          this._onMouseMove)
    document.addEventListener('pointerlockchange',  this._onLockChange)

    this.canvas.addEventListener('click', () => this._requestPointerLock())
  }

  _requestPointerLock() {
    this.canvas.requestPointerLock?.()
  }

  setPose(pose) {
    this.pose = pose
    this.character.setPose(pose)
  }

  update(delta) {
    this.time += delta
    if (this.paused) return

    const speed = this.pose === 'crouch' ? SPEED_CROUCH
                : this.pose === 'prone'  ? SPEED_PRONE
                : SPEED_STAND

    // Movement direction relative to camera yaw
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw))
    const right   = new THREE.Vector3( Math.cos(this.yaw), 0, -Math.sin(this.yaw))

    const move = new THREE.Vector3()
    if (this.keys['keyw'] || this.keys['arrowup'])    move.addScaledVector(forward,  1)
    if (this.keys['keys'] || this.keys['arrowdown'])  move.addScaledVector(forward, -1)
    if (this.keys['keyd'] || this.keys['arrowright']) move.addScaledVector(right,    1)
    if (this.keys['keya'] || this.keys['arrowleft'])  move.addScaledVector(right,   -1)

    this.moving = move.lengthSq() > 0
    if (this.moving) move.normalize().multiplyScalar(speed * delta)

    // Resolve X and Z separately for smooth wall sliding
    const pos = this.character.group.position
    const RADIUS = 0.35

    const newX = pos.x + move.x
    const boxX = new THREE.Box3(
      new THREE.Vector3(newX - RADIUS, 0.01, pos.z - RADIUS),
      new THREE.Vector3(newX + RADIUS, 2.0,  pos.z + RADIUS)
    )
    if (!this._collides(boxX)) pos.x = newX

    const newZ = pos.z + move.z
    const boxZ = new THREE.Box3(
      new THREE.Vector3(pos.x - RADIUS, 0.01, newZ - RADIUS),
      new THREE.Vector3(pos.x + RADIUS, 2.0,  newZ + RADIUS)
    )
    if (!this._collides(boxZ)) pos.z = newZ

    // Floor clamp
    pos.y = 0

    // Rotate character to face movement direction
    if (this.moving) {
      const angle = Math.atan2(move.x, move.z)
      this.character.group.rotation.y = angle
    }

    // Walking animation
    this.character.animateWalk(this.moving, delta, this.time)

    // Camera follow
    this._updateCamera()
  }

  _collides(box) {
    for (const wall of this.wallBoxes) {
      if (box.intersectsBox(wall)) return true
    }
    return false
  }

  _updateCamera() {
    const pos = this.character.group.position

    // Orbit position behind player
    const targetX = pos.x + Math.sin(this.yaw) * CAM_DIST
    const targetY = pos.y + CAM_HEIGHT + this.pitch * 1.5
    const targetZ = pos.z + Math.cos(this.yaw) * CAM_DIST

    // Smooth
    this._camPos.lerp(new THREE.Vector3(targetX, targetY, targetZ), CAM_SMOOTH)
    this.camera.position.copy(this._camPos)

    // Look at head level
    const lookAt = new THREE.Vector3(pos.x, pos.y + 1.1, pos.z)
    this.camera.lookAt(lookAt)
  }

  // For paint eyedropper — returns camera ray direction from screen center
  getCameraRay() {
    const dir = new THREE.Vector3()
    this.camera.getWorldDirection(dir)
    return { origin: this.camera.position.clone(), direction: dir }
  }

  destroy() {
    document.removeEventListener('keydown',           this._onKey)
    document.removeEventListener('keyup',             this._onKey)
    document.removeEventListener('mousemove',         this._onMouseMove)
    document.removeEventListener('pointerlockchange', this._onLockChange)
    document.exitPointerLock?.()
  }
}
