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
    this._initSprings()
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

  // ── Spring physics init ──────────────────────────────────────
  _initSprings() {
    // sp(restAngle, stiffness, damping)
    // Low stiffness = floppy. Low damping = overshoots a lot (Gang Beasts feel).
    const sp = (rest, k, d) => ({ vel: 0, cur: rest, rest, k, d })
    this._sp = {
      lax: sp(0,     3.2, 2.2),   // left  arm X  — very floppy
      laz: sp(0.28,  3.2, 2.2),   // left  arm Z
      rax: sp(0,     3.2, 2.2),   // right arm X
      raz: sp(-0.28, 3.2, 2.2),   // right arm Z
      llx: sp(0,     11,  4.0),   // left  leg X  — stiffer (need to walk)
      rlx: sp(0,     11,  4.0),   // right leg X
      hx:  sp(0,     9,   5.0),   // head  X
      tx:  sp(0,     14,  6.0),   // torso X lean
    }
    this._step = 0          // step-cycle phase accumulator
    this._t    = 0          // total time
    this._vel  = { x: 0, z: 0 }  // character velocity (written by controller)
  }

  // Single spring integrator — returns new angle
  _su(s, dt, ext = 0) {
    const force = -(s.cur - s.rest) * s.k + ext
    s.vel += force * dt
    s.vel *= Math.max(0, 1 - s.d * dt)   // damping
    s.cur += s.vel * dt
    s.cur  = Math.max(-2.6, Math.min(2.6, s.cur))  // hard clamp
    return s.cur
  }

  // ── Main animation driver ─────────────────────────────────────
  animate(delta, moving, pose, running = false) {
    this._t    += delta
    const dt    = Math.min(delta, 0.05)   // guard against huge deltas
    const sp    = this._sp
    const step  = this._step
    const vz    = this._vel.z   // forward velocity
    const vx    = this._vel.x   // side velocity

    // Inertia: moving forward pushes arms backward
    const armInertia = -vz * 0.22

    if (pose === 'prone') {
      // ── Prone: arms reach out, breathing pulse ─────────────
      sp.lax.rest = 0.45;  sp.rax.rest = -0.45
      sp.laz.rest = 0.55;  sp.raz.rest = -0.55
      sp.llx.rest = 0;     sp.rlx.rest = 0
      sp.tx.rest  = 0;     sp.hx.rest  = 0
      const breathe = Math.sin(this._t * 0.85) * 0.009
      this.torsoMesh.position.y = THREE.MathUtils.lerp(this.torsoMesh.position.y, 0.88 + breathe, 0.05)

    } else if (pose === 'crouch') {
      // ── Crouch ─────────────────────────────────────────────
      const freq = 4.2
      if (moving) this._step += dt * freq * Math.PI * 2
      const s = Math.sin(step)
      sp.llx.rest =  s * (moving ? 0.28 : 0)
      sp.rlx.rest = -s * (moving ? 0.28 : 0)
      sp.lax.rest =  s * (moving ? -0.15 : 0) + armInertia
      sp.rax.rest = -s * (moving ? -0.15 : 0) + armInertia
      sp.laz.rest = 0.48;  sp.raz.rest = -0.48   // arms wide for balance
      sp.tx.rest  = 0;     sp.hx.rest  = 0

      const shift = Math.sin(this._t * 0.9) * 0.03
      this.torsoMesh.position.y = THREE.MathUtils.lerp(this.torsoMesh.position.y, 0.88 + shift, 0.05)
      this.headMesh.position.y  = THREE.MathUtils.lerp(this.headMesh.position.y,  1.42, 0.08)

    } else {
      // ── Stand: walk / run / idle ────────────────────────────
      const freq = running ? 8.5 : (moving ? 5.5 : 0.4)
      if (moving || running) this._step += dt * freq * Math.PI * 2
      const s = Math.sin(step)

      if (running) {
        // Gang Beasts run — arms fling UP and back, flail wildly
        // Rest position is way behind/up so spring never fully catches up → constant flop
        sp.lax.rest = -1.05 + s *  0.55 + armInertia   // left arm up, oscillating
        sp.rax.rest = -1.05 + s * -0.55 + armInertia   // right arm up, opposite phase
        sp.laz.rest =  0.55 + Math.abs(s) * 0.25        // arms flare outward when up
        sp.raz.rest = -0.55 - Math.abs(s) * 0.25
        sp.llx.rest =  s * 0.65
        sp.rlx.rest = -s * 0.65
        sp.tx.rest  = -0.20    // lean forward
        sp.hx.rest  =  0.12   // head back a little (looking where they're going)

        const bob = Math.abs(s) * 0.032
        this.torsoMesh.position.y = THREE.MathUtils.lerp(this.torsoMesh.position.y, 0.88 - bob, 0.28)
        this.headMesh.position.y  = THREE.MathUtils.lerp(this.headMesh.position.y,  1.42 - bob, 0.28)

      } else if (moving) {
        // Normal walk — arms swing opposite to legs with physics
        sp.lax.rest = -s * 0.35 + armInertia
        sp.rax.rest =  s * 0.35 + armInertia
        sp.laz.rest =  0.22 + s * 0.06
        sp.raz.rest = -0.22 - s * 0.06
        sp.llx.rest =  s * 0.44
        sp.rlx.rest = -s * 0.44
        sp.tx.rest  = 0
        sp.hx.rest  = 0

        const bob = Math.abs(s) * 0.014
        this.torsoMesh.position.y = THREE.MathUtils.lerp(this.torsoMesh.position.y, 0.88 - bob, 0.22)
        this.headMesh.position.y  = THREE.MathUtils.lerp(this.headMesh.position.y,  1.42 - bob, 0.22)

      } else {
        // Idle — gentle breathing + arms sway + tiny random wobble
        const breathe = Math.sin(this._t * 1.25) * 0.009
        const sway    = Math.sin(this._t * 0.72) * 0.045
        sp.lax.rest =  0.12 + sway * 0.5
        sp.rax.rest =  0.12 - sway * 0.5
        sp.laz.rest =  0.28 + sway * 0.18
        sp.raz.rest = -0.28 - sway * 0.18
        sp.llx.rest =  0;  sp.rlx.rest = 0
        sp.tx.rest  =  0;  sp.hx.rest  = Math.sin(this._t * 0.65) * 0.04

        this.torsoMesh.position.y = THREE.MathUtils.lerp(this.torsoMesh.position.y, 0.88 + breathe, 0.05)
        this.headMesh.position.y  = THREE.MathUtils.lerp(this.headMesh.position.y,  1.42 + breathe, 0.05)
      }
    }

    // Side-velocity makes arms drift sideways (turning feel)
    const sideForce = vx * 0.12
    const u = (s, ext) => this._su(s, dt, ext)

    this.leftArmMesh.rotation.x  = u(sp.lax,  sideForce * 0.5)
    this.leftArmMesh.rotation.z  = u(sp.laz,  sideForce)
    this.rightArmMesh.rotation.x = u(sp.rax,  sideForce * 0.5)
    this.rightArmMesh.rotation.z = u(sp.raz, -sideForce)
    this.leftLegMesh.rotation.x  = u(sp.llx,  0)
    this.rightLegMesh.rotation.x = u(sp.rlx,  0)
    this.torsoMesh.rotation.x    = u(sp.tx,   0)
    this.headMesh.rotation.x     = u(sp.hx,   0)
  }

  getMeshes() { return Object.values(this.parts) }

  dispose() {
    this.group.traverse(o => {
      o.geometry?.dispose()
      if (o.material) { o.material.map?.dispose(); o.material.dispose() }
    })
  }
}
