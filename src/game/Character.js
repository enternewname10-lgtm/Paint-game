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

  // ── Animation ────────────────────────────────────────────────
  animate(delta, moving, pose, running = false) {
    this._t      = (this._t      || 0) + delta
    this._phase  = (this._phase  || 0) + delta * (running ? 9 : moving ? 5.5 : 0.5)

    const sin = Math.sin(this._phase)
    const lp  = THREE.MathUtils.lerp
    const t   = this._t

    // ── compute targets ──────────────────────────────────────
    let lax, rax, laz, raz, llx, rlx, tx, hx

    if (pose === 'prone') {
      lax = 0.45;  rax = -0.45
      laz = 0.55;  raz = -0.55
      llx = 0;     rlx = 0
      tx  = 0;     hx  = 0

    } else if (pose === 'crouch') {
      laz = 0.55;  raz = -0.55          // arms wide for balance
      if (moving) {
        lax = -sin * 0.18;  rax = sin * 0.18
        llx =  sin * 0.28;  rlx = -sin * 0.28
      } else {
        const sw = Math.sin(t * 0.9) * 0.06
        lax = sw;  rax = -sw
        llx = 0;   rlx = 0
      }
      tx = 0;  hx = 0

    } else if (running) {
      // Gang Beasts run — arms thrown UP and behind, always lagging (slow lerp below)
      lax = -1.0 + sin * 0.5    // up + oscillating
      rax = -1.0 - sin * 0.5    // up + opposite phase
      laz =  0.68                // flared wide
      raz = -0.68
      llx =  sin * 0.70
      rlx = -sin * 0.70
      tx  = -0.18                // lean forward
      hx  =  0.10

    } else if (moving) {
      lax = -sin * 0.38
      rax =  sin * 0.38
      laz =  0.22
      raz = -0.22
      llx =  sin * 0.44
      rlx = -sin * 0.44
      tx  = 0;  hx = 0

    } else {
      // Idle: breathing + gentle sway
      const sw = Math.sin(t * 0.8) * 0.045
      lax = 0.12 + sw;           rax = 0.12 - sw
      laz = 0.28 + Math.abs(sw) * 0.2
      raz = -(0.28 + Math.abs(sw) * 0.2)
      llx = 0;  rlx = 0;  tx = 0
      hx  = Math.sin(t * 0.65) * 0.03
    }

    // ── apply with lerp ───────────────────────────────────────
    // Arms: SLOW lerp when running → they always lag behind = floppy
    const armA = running ? 0.045 : 0.15
    const legA = 0.25
    const bodA = 0.10

    this.leftArmMesh.rotation.x  = lp(this.leftArmMesh.rotation.x,  lax, armA)
    this.leftArmMesh.rotation.z  = lp(this.leftArmMesh.rotation.z,  laz, armA)
    this.rightArmMesh.rotation.x = lp(this.rightArmMesh.rotation.x, rax, armA)
    this.rightArmMesh.rotation.z = lp(this.rightArmMesh.rotation.z, raz, armA)
    this.leftLegMesh.rotation.x  = lp(this.leftLegMesh.rotation.x,  llx, legA)
    this.rightLegMesh.rotation.x = lp(this.rightLegMesh.rotation.x, rlx, legA)
    this.torsoMesh.rotation.x    = lp(this.torsoMesh.rotation.x,    tx,  bodA)
    this.headMesh.rotation.x     = lp(this.headMesh.rotation.x,     hx,  bodA)

    // ── body bob / breathe ────────────────────────────────────
    if (moving || running) {
      const bob = Math.abs(sin) * (running ? 0.032 : 0.016)
      this.headMesh.position.y  = lp(this.headMesh.position.y,  1.42 - bob, 0.28)
      this.torsoMesh.position.y = lp(this.torsoMesh.position.y, 0.88 - bob, 0.28)
    } else {
      const breathe = Math.sin(t * 1.2) * 0.008
      this.headMesh.position.y  = lp(this.headMesh.position.y,  1.42 + breathe, 0.05)
      this.torsoMesh.position.y = lp(this.torsoMesh.position.y, 0.88 + breathe, 0.05)
    }
  }

  getMeshes() { return Object.values(this.parts) }

  dispose() {
    this.group.traverse(o => {
      o.geometry?.dispose()
      if (o.material) { o.material.map?.dispose(); o.material.dispose() }
    })
  }
}
