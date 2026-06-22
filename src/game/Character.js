import * as THREE from 'three'

const DEFAULT_COLORS = {
  head:     '#808080',
  torso:    '#808080',
  leftArm:  '#808080',
  rightArm: '#808080',
  leftLeg:  '#808080',
  rightLeg: '#808080'
}

function mat(hex) {
  return new THREE.MeshLambertMaterial({ color: hex })
}

export class Character {
  constructor(paintColors = {}, isLocalPlayer = false) {
    this.colors = { ...DEFAULT_COLORS, ...paintColors }
    this.group  = new THREE.Group()
    this.isLocalPlayer = isLocalPlayer
    this._build()
    this.pose   = 'stand'
  }

  _build() {
    // Head — slightly squashed sphere for a cartoony feel
    const headGeo = new THREE.SphereGeometry(0.24, 16, 12)
    this.headMesh = new THREE.Mesh(headGeo, mat(this.colors.head))
    this.headMesh.scale.y = 0.92
    this.headMesh.position.y = 1.42
    this.headMesh.castShadow = true
    this.group.add(this.headMesh)

    // Torso — capsule
    const torsoGeo = new THREE.CapsuleGeometry(0.22, 0.42, 6, 12)
    this.torsoMesh = new THREE.Mesh(torsoGeo, mat(this.colors.torso))
    this.torsoMesh.position.y = 0.88
    this.torsoMesh.castShadow = true
    this.group.add(this.torsoMesh)

    // Arms — capsule
    const armGeo = new THREE.CapsuleGeometry(0.075, 0.32, 4, 10)

    this.leftArmMesh = new THREE.Mesh(armGeo, mat(this.colors.leftArm))
    this.leftArmMesh.position.set(-0.34, 0.86, 0)
    this.leftArmMesh.rotation.z = 0.18
    this.leftArmMesh.castShadow = true
    this.group.add(this.leftArmMesh)

    this.rightArmMesh = new THREE.Mesh(armGeo.clone(), mat(this.colors.rightArm))
    this.rightArmMesh.position.set(0.34, 0.86, 0)
    this.rightArmMesh.rotation.z = -0.18
    this.rightArmMesh.castShadow = true
    this.group.add(this.rightArmMesh)

    // Legs — capsule
    const legGeo = new THREE.CapsuleGeometry(0.09, 0.36, 4, 10)

    this.leftLegMesh = new THREE.Mesh(legGeo, mat(this.colors.leftLeg))
    this.leftLegMesh.position.set(-0.13, 0.3, 0)
    this.leftLegMesh.castShadow = true
    this.group.add(this.leftLegMesh)

    this.rightLegMesh = new THREE.Mesh(legGeo.clone(), mat(this.colors.rightLeg))
    this.rightLegMesh.position.set(0.13, 0.3, 0)
    this.rightLegMesh.castShadow = true
    this.group.add(this.rightLegMesh)

    // Eyes — fixed dark spheres, not paintable
    const eyeGeo = new THREE.SphereGeometry(0.045, 8, 6)
    const eyeMat = new THREE.MeshLambertMaterial({ color: '#18100a' })
    const lEye   = new THREE.Mesh(eyeGeo, eyeMat)
    const rEye   = new THREE.Mesh(eyeGeo, eyeMat)
    lEye.position.set(-0.09, 1.46, 0.21)
    rEye.position.set( 0.09, 1.46, 0.21)
    this.group.add(lEye, rEye)

    // Paintable parts map
    this.parts = {
      head:     this.headMesh,
      torso:    this.torsoMesh,
      leftArm:  this.leftArmMesh,
      rightArm: this.rightArmMesh,
      leftLeg:  this.leftLegMesh,
      rightLeg: this.rightLegMesh
    }

    // Pivot point above ground
    this.group.position.y = 0
  }

  // Apply paint to one part or all parts — LOCAL PLAYER ONLY
  setPaint(part, hexColor) {
    if (part === 'all') {
      Object.values(this.parts).forEach(m => {
        m.material = m.material.clone()
        m.material.color.set(hexColor)
      })
      Object.keys(this.colors).forEach(k => this.colors[k] = hexColor)
    } else if (this.parts[part]) {
      this.parts[part].material = this.parts[part].material.clone()
      this.parts[part].material.color.set(hexColor)
      this.colors[part] = hexColor
    }
  }

  // Update all colors at once (for remote players)
  applyColors(paintColors) {
    for (const [part, hex] of Object.entries(paintColors)) {
      if (this.parts[part]) {
        this.parts[part].material.color.set(hex)
        this.colors[part] = hex
      }
    }
  }

  // Poses: stand / crouch / prone
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
        // Rotate body to lie flat
        this.group.rotation.x = Math.PI / 2
        this.group.position.y = 0.28
        break
    }
  }

  // Walking animation — called each frame with delta
  animateWalk(moving, delta, time) {
    if (this.pose !== 'stand') return
    const swing = moving ? Math.sin(time * 6) * 0.35 : 0
    this.leftArmMesh.rotation.x  =  swing
    this.rightArmMesh.rotation.x = -swing
    this.leftLegMesh.rotation.x  = -swing
    this.rightLegMesh.rotation.x =  swing
  }

  // Returns all paintable meshes (used for hit-testing by gun system)
  getMeshes() {
    return Object.values(this.parts)
  }

  dispose() {
    this.group.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose()
      if (obj.material) obj.material.dispose()
    })
  }
}
