import * as THREE from 'three'

const TEX_SIZE = 512  // canvas texture resolution per body part

function makeCanvas(baseHex) {
  const canvas = document.createElement('canvas')
  canvas.width  = TEX_SIZE
  canvas.height = TEX_SIZE
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = baseHex || '#808080'
  ctx.fillRect(0, 0, TEX_SIZE, TEX_SIZE)
  return { canvas, ctx }
}

export class Character {
  constructor(paintColors = {}, isLocalPlayer = false) {
    this.isLocalPlayer = isLocalPlayer
    this.group = new THREE.Group()

    this._canvases  = {}   // partName → { canvas, ctx }
    this._textures  = {}   // partName → THREE.CanvasTexture
    this.colors     = {    // approximate dominant color per part (for sync)
      head:     paintColors.head     || '#808080',
      torso:    paintColors.torso    || '#808080',
      leftArm:  paintColors.leftArm  || '#808080',
      rightArm: paintColors.rightArm || '#808080',
      leftLeg:  paintColors.leftLeg  || '#808080',
      rightLeg: paintColors.rightLeg || '#808080'
    }
    this.pose = 'stand'
    this._build()
  }

  _makeMat(partName) {
    const hex = this.colors[partName]
    if (this.isLocalPlayer) {
      const { canvas, ctx } = makeCanvas(hex)
      this._canvases[partName] = { canvas, ctx }
      const tex = new THREE.CanvasTexture(canvas)
      this._textures[partName] = tex
      return new THREE.MeshLambertMaterial({ map: tex })
    }
    return new THREE.MeshLambertMaterial({ color: hex })
  }

  _build() {
    // Head
    this.headMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.24, 24, 16),
      this._makeMat('head')
    )
    this.headMesh.scale.y = 0.92
    this.headMesh.position.y = 1.42
    this.headMesh.castShadow = true
    this.group.add(this.headMesh)

    // Torso
    this.torsoMesh = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.22, 0.42, 8, 16),
      this._makeMat('torso')
    )
    this.torsoMesh.position.y = 0.88
    this.torsoMesh.castShadow = true
    this.group.add(this.torsoMesh)

    // Arms
    const armGeo = new THREE.CapsuleGeometry(0.075, 0.32, 6, 12)

    this.leftArmMesh = new THREE.Mesh(armGeo, this._makeMat('leftArm'))
    this.leftArmMesh.position.set(-0.34, 0.86, 0)
    this.leftArmMesh.rotation.z = 0.18
    this.leftArmMesh.castShadow = true
    this.group.add(this.leftArmMesh)

    this.rightArmMesh = new THREE.Mesh(armGeo.clone(), this._makeMat('rightArm'))
    this.rightArmMesh.position.set(0.34, 0.86, 0)
    this.rightArmMesh.rotation.z = -0.18
    this.rightArmMesh.castShadow = true
    this.group.add(this.rightArmMesh)

    // Legs
    const legGeo = new THREE.CapsuleGeometry(0.09, 0.36, 6, 12)

    this.leftLegMesh = new THREE.Mesh(legGeo, this._makeMat('leftLeg'))
    this.leftLegMesh.position.set(-0.13, 0.3, 0)
    this.leftLegMesh.castShadow = true
    this.group.add(this.leftLegMesh)

    this.rightLegMesh = new THREE.Mesh(legGeo.clone(), this._makeMat('rightLeg'))
    this.rightLegMesh.position.set(0.13, 0.3, 0)
    this.rightLegMesh.castShadow = true
    this.group.add(this.rightLegMesh)

    // Eyes — always dark, not paintable
    const eyeGeo = new THREE.SphereGeometry(0.045, 8, 6)
    const eyeMat = new THREE.MeshLambertMaterial({ color: '#18100a' })
    const lEye   = new THREE.Mesh(eyeGeo, eyeMat)
    const rEye   = new THREE.Mesh(eyeGeo, eyeMat)
    lEye.position.set(-0.09, 1.46, 0.21)
    rEye.position.set( 0.09, 1.46, 0.21)
    this.group.add(lEye, rEye)

    this.parts = {
      head:     this.headMesh,
      torso:    this.torsoMesh,
      leftArm:  this.leftArmMesh,
      rightArm: this.rightArmMesh,
      leftLeg:  this.leftLegMesh,
      rightLeg: this.rightLegMesh
    }
  }

  // Paint a brush stroke at UV coordinates — local player only
  paintAtUV(mesh, u, v, color, radiusPx = 32) {
    const partName = Object.keys(this.parts).find(k => this.parts[k] === mesh)
    if (!partName || !this._canvases[partName]) return false

    const { ctx } = this._canvases[partName]
    const x = u * TEX_SIZE
    const y = (1 - v) * TEX_SIZE   // canvas Y is flipped vs UV

    // Soft radial brush stroke
    const grad = ctx.createRadialGradient(x, y, 0, x, y, radiusPx)
    grad.addColorStop(0.0, color + 'ff')
    grad.addColorStop(0.6, color + 'cc')
    grad.addColorStop(1.0, color + '00')

    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(x, y, radiusPx, 0, Math.PI * 2)
    ctx.fill()

    this._textures[partName].needsUpdate = true
    this.colors[partName] = color   // track dominant colour for sync
    return true
  }

  // For remote players — apply flat colours per part
  applyColors(paintColors) {
    for (const [part, hex] of Object.entries(paintColors)) {
      if (!this.parts[part]) continue
      const mat = this.parts[part].material
      if (mat.color) mat.color.set(hex)
      this.colors[part] = hex
    }
  }

  getColors() { return { ...this.colors } }

  setPose(pose) {
    this.pose = pose
    this.group.rotation.x = 0
    this.group.position.y = 0
    switch (pose) {
      case 'stand':
        this.group.scale.y = 1
        break
      case 'crouch':
        this.group.scale.y = 0.58
        this.group.position.y = -0.35
        break
      case 'prone':
        this.group.rotation.x = Math.PI / 2
        this.group.position.y = 0.28
        break
    }
  }

  // Main animation driver — call every frame
  animate(delta, moving, pose, running = false) {
    this._t = (this._t || 0) + delta

    if (pose === 'prone') {
      this._animProne()
    } else if (pose === 'crouch') {
      this._animCrouch(moving)
    } else {
      this._animStand(moving, running)
    }
  }

  _animStand(moving, running) {
    const t = this._t
    if (moving) {
      const freq   = running ? 9 : 5.8
      const legAmp = running ? 0.58 : 0.40
      const armAmp = running ? 0.48 : 0.28
      const bobAmp = running ? 0.030 : 0.016

      const s   = Math.sin(t * freq)
      const bob = Math.abs(s) * bobAmp

      this._lr(this.leftLegMesh,  'x',  s * legAmp)
      this._lr(this.rightLegMesh, 'x', -s * legAmp)
      this._lr(this.leftArmMesh,  'x', -s * armAmp)
      this._lr(this.rightArmMesh, 'x',  s * armAmp)

      // Body & head bob
      this.headMesh.position.y  = THREE.MathUtils.lerp(this.headMesh.position.y,  1.42 - bob, 0.3)
      this.torsoMesh.position.y = THREE.MathUtils.lerp(this.torsoMesh.position.y, 0.88 - bob, 0.3)

      // Running: torso leans forward
      this._lr(this.torsoMesh, 'x', running ? -0.13 : 0, 0.08)
      this._lr(this.headMesh,  'x', running ?  0.09 : 0, 0.08)

      // Arms stay at their natural z spread
      this._lr(this.leftArmMesh,  'z',  0.18, 0.12)
      this._lr(this.rightArmMesh, 'z', -0.18, 0.12)

    } else {
      // Idle — subtle breathing + arm sway
      const breathe = Math.sin(t * 1.3) * 0.009
      const sway    = Math.sin(t * 0.75) * 0.04

      this.headMesh.position.y  = THREE.MathUtils.lerp(this.headMesh.position.y,  1.42 + breathe, 0.06)
      this.torsoMesh.position.y = THREE.MathUtils.lerp(this.torsoMesh.position.y, 0.88 + breathe, 0.06)

      this._lr(this.leftArmMesh,  'x',  sway * 0.4, 0.06)
      this._lr(this.rightArmMesh, 'x', -sway * 0.4, 0.06)
      this._lr(this.leftArmMesh,  'z',  0.18 + sway * 0.15, 0.06)
      this._lr(this.rightArmMesh, 'z', -0.18 - sway * 0.15, 0.06)

      this._lr(this.leftLegMesh,  'x', 0, 0.1)
      this._lr(this.rightLegMesh, 'x', 0, 0.1)
      this._lr(this.torsoMesh,    'x', 0, 0.08)
      this._lr(this.headMesh,     'x', 0, 0.08)
    }
  }

  _animCrouch(moving) {
    const t = this._t
    if (moving) {
      const s = Math.sin(t * 4.5)
      this._lr(this.leftLegMesh,  'x',  s * 0.26)
      this._lr(this.rightLegMesh, 'x', -s * 0.26)
      this._lr(this.leftArmMesh,  'x', -s * 0.18)
      this._lr(this.rightArmMesh, 'x',  s * 0.18)
    } else {
      // Crouch idle — slight weight shift
      const shift = Math.sin(t * 0.9) * 0.04
      this.torsoMesh.position.y = THREE.MathUtils.lerp(this.torsoMesh.position.y, 0.88 + shift, 0.05)
      this._lr(this.leftLegMesh,  'x', 0, 0.1)
      this._lr(this.rightLegMesh, 'x', 0, 0.1)
      this._lr(this.leftArmMesh,  'x', 0, 0.1)
      this._lr(this.rightArmMesh, 'x', 0, 0.1)
    }
    // Arms wider when crouched
    this._lr(this.leftArmMesh,  'z',  0.38, 0.08)
    this._lr(this.rightArmMesh, 'z', -0.38, 0.08)
    this._lr(this.torsoMesh, 'x', 0, 0.1)
    this._lr(this.headMesh,  'x', 0, 0.1)
    this.headMesh.position.y = THREE.MathUtils.lerp(this.headMesh.position.y, 1.42, 0.1)
  }

  _animProne() {
    const breathe = Math.sin(this._t * 0.9) * 0.008
    this.torsoMesh.position.y = THREE.MathUtils.lerp(this.torsoMesh.position.y, 0.88 + breathe, 0.05)
    // Arms reach slightly forward
    this._lr(this.leftArmMesh,  'x',  0.28, 0.06)
    this._lr(this.rightArmMesh, 'x', -0.28, 0.06)
    this._lr(this.leftLegMesh,  'x', 0, 0.08)
    this._lr(this.rightLegMesh, 'x', 0, 0.08)
  }

  // Lerp a rotation axis toward a target value
  _lr(mesh, axis, target, alpha = 0.18) {
    mesh.rotation[axis] = THREE.MathUtils.lerp(mesh.rotation[axis], target, alpha)
  }

  getMeshes() { return Object.values(this.parts) }

  dispose() {
    this.group.traverse(o => {
      o.geometry?.dispose()
      if (o.material) { o.material.map?.dispose(); o.material.dispose() }
    })
  }
}
