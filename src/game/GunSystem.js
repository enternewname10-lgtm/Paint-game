import * as THREE from 'three'

const SHOOT_COOLDOWN = 0.8  // seconds between shots

export class GunSystem {
  constructor(scene, camera, onHit) {
    this.scene   = scene
    this.camera  = camera
    this.onHit   = onHit  // (uid) => void

    this.hitboxes = {}   // uid → THREE.Mesh (invisible hitbox)
    this.cooldown  = 0
    this.raycaster = new THREE.Raycaster()

    // Muzzle flash element
    this._flash = document.createElement('div')
    this._flash.style.cssText = `
      position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
      width:60px;height:60px;border-radius:50%;
      background:radial-gradient(circle,rgba(255,220,100,0.9) 0%,transparent 70%);
      pointer-events:none;z-index:25;display:none;
    `
    document.body.appendChild(this._flash)

    this._onMouseDown = e => {
      if (e.button === 0) this.shoot()
    }
    document.addEventListener('mousedown', this._onMouseDown)
  }

  // Register a remote hider's hitbox
  addHider(uid, characterGroup) {
    if (this.hitboxes[uid]) this.removeHider(uid)
    const geo  = new THREE.BoxGeometry(0.65, 1.85, 0.65)
    const mat  = new THREE.MeshBasicMaterial({ visible: false })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.position.copy(characterGroup.position)
    mesh.position.y += 0.9
    mesh.userData.uid = uid
    this.scene.add(mesh)
    this.hitboxes[uid] = mesh
  }

  removeHider(uid) {
    if (!this.hitboxes[uid]) return
    this.scene.remove(this.hitboxes[uid])
    delete this.hitboxes[uid]
  }

  // Call each frame to keep hitboxes aligned to characters
  updateHiderPosition(uid, position) {
    if (this.hitboxes[uid]) {
      this.hitboxes[uid].position.set(position.x, position.y + 0.9, position.z)
    }
  }

  shoot() {
    if (this.cooldown > 0) return

    this.cooldown = SHOOT_COOLDOWN

    // Flash
    this._flash.style.display = 'block'
    setTimeout(() => { this._flash.style.display = 'none' }, 80)

    // Raycast from center of screen
    this.raycaster.setFromCamera({ x: 0, y: 0 }, this.camera)
    const boxes = Object.values(this.hitboxes)
    const hits  = this.raycaster.intersectObjects(boxes)
    if (hits.length > 0) {
      const uid = hits[0].object.userData.uid
      if (uid) this.onHit(uid)
    }
  }

  update(delta) {
    if (this.cooldown > 0) this.cooldown -= delta
  }

  destroy() {
    document.removeEventListener('mousedown', this._onMouseDown)
    Object.keys(this.hitboxes).forEach(uid => this.removeHider(uid))
    this._flash.remove()
  }
}
