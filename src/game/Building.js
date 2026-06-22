import * as THREE from 'three'

// Creates a box mesh
function box(w, h, d, color, x, y, z, opts = {}) {
  const geo  = new THREE.BoxGeometry(w, h, d)
  const mat  = new THREE.MeshLambertMaterial({ color, ...opts })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.set(x, y, z)
  mesh.castShadow    = opts.cast  ?? false
  mesh.receiveShadow = opts.recv  ?? true
  return mesh
}

export class Building {
  constructor(scene) {
    this.scene    = scene
    this.wallBoxes = []   // THREE.Box3 for collision
    this.allMeshes = []   // for raycasting / shadows

    this._build()
  }

  _addMesh(mesh, collidable = false) {
    this.scene.add(mesh)
    this.allMeshes.push(mesh)
    if (collidable) {
      this.wallBoxes.push(new THREE.Box3().setFromObject(mesh))
    }
  }

  _wall(w, h, d, color, x, y, z) {
    const m = box(w, h, d, color, x, y, z, { recv: true })
    this._addMesh(m, true)
    return m
  }

  _floor(w, d, color, x, z) {
    const m = box(w, 0.2, d, color, x, -0.1, z, { recv: true })
    this._addMesh(m, false)
    return m
  }

  _ceiling(w, d, color, x, z) {
    const m = box(w, 0.2, d, color, x, 3.1, z, { recv: false })
    this._addMesh(m, false)
    return m
  }

  _obj(w, h, d, color, x, y, z) {
    const m = box(w, h, d, color, x, y, z, { cast: true, recv: true })
    this._addMesh(m, true)
    return m
  }

  // Furniture that can be hidden behind but doesn't block movement at floor
  _deco(w, h, d, color, x, y, z) {
    const m = box(w, h, d, color, x, y, z, { cast: true, recv: true })
    this._addMesh(m, false)
    return m
  }

  _build() {
    const WALL  = 0xe0d4b8  // beige wall
    const WALL2 = 0xd8e8f0  // light blue wall
    const WALL3 = 0xf0f0e0  // cream wall
    const WALL4 = 0xdde0c8  // warm green-grey
    const WOOD  = 0xc0956b  // warm wood floor
    const TILE  = 0xe8e4d8  // tile floor
    const CEI   = 0xf4ede0  // ceiling white

    // ── Global floor (invisible ground plane for shadows) ───
    const groundMat = new THREE.MeshLambertMaterial({ color: 0x1a1208 })
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.15
    ground.receiveShadow = true
    this.scene.add(ground)

    // ═══════════════════════════════════════════════════════
    //  LIVING ROOM  (centre)  12 × 10
    // ═══════════════════════════════════════════════════════
    const LX = 0, LZ = 0
    this._floor(12, 10, WOOD, LX, LZ)
    this._ceiling(12, 10, CEI, LX, LZ)
    // Outer walls
    this._wall(12, 3, 0.3, WALL, LX, 1.5, LZ - 5)    // south
    this._wall(12, 3, 0.3, WALL, LX, 1.5, LZ + 5)    // north
    this._wall(0.3, 3, 10, WALL, LX - 6, 1.5, LZ)    // west
    this._wall(0.3, 3, 10, WALL, LX + 6, 1.5, LZ)    // east

    // Sofa (dark red)
    this._obj(3.2, 0.65, 1.0, 0x7a1a1a, LX - 1.5, 0.33, LZ + 3.8)   // seat
    this._obj(3.2, 1.0,  0.3, 0x6a1414, LX - 1.5, 0.5,  LZ + 4.25)  // back
    this._obj(0.4, 0.9,  1.0, 0x6a1414, LX + 1.1, 0.45, LZ + 3.8)   // right arm
    this._obj(0.4, 0.9,  1.0, 0x6a1414, LX - 4.1, 0.45, LZ + 3.8)   // left arm

    // Coffee table (dark wood)
    this._obj(1.8, 0.4, 0.9, 0x5c3317, LX - 1.5, 0.2, LZ + 2.2)

    // Bookshelf (right wall)
    this._obj(0.3, 2.4, 1.4, 0x8b6914, LX + 5.2, 1.2, LZ - 2.5)   // body
    // Books (various colours)
    const books = [0xb52b1e, 0x1a4f8a, 0xc9940a, 0x5a3d8a, 0x2a7a3a, 0xd8ccb0]
    books.forEach((c, i) => this._deco(0.25, 0.28, 0.22, c, LX + 5.06, 0.36 + i * 0.36, LZ - 2.5))

    // TV (black) on stand
    this._obj(0.2, 1.4, 2.4, 0x1a1208, LX, 0.7, LZ - 4.6)   // stand
    this._obj(0.12, 0.9, 2.0, 0x0c0c0c, LX, 1.7, LZ - 4.7)  // screen

    // Rug (beige/brown)
    this._deco(3.5, 0.05, 2.5, 0xb09060, LX - 1.5, 0.02, LZ + 2.8)

    // Floor lamp
    this._deco(0.08, 1.6, 0.08, 0x808080, LX + 4.8, 0.8, LZ + 4.2)
    this._deco(0.35, 0.3,  0.35, 0xf4ede0, LX + 4.8, 1.65, LZ + 4.2) // shade

    // ═══════════════════════════════════════════════════════
    //  KITCHEN  (east)  8 × 8  offset (+10, 0, 0)
    // ═══════════════════════════════════════════════════════
    const KX = 13, KZ = -1
    this._floor(8, 8, TILE, KX, KZ)
    this._ceiling(8, 8, CEI, KX, KZ)
    this._wall(8, 3, 0.3, WALL3, KX, 1.5, KZ - 4)    // south
    this._wall(8, 3, 0.3, WALL3, KX, 1.5, KZ + 4)    // north
    this._wall(0.3, 3, 8, WALL3, KX + 4, 1.5, KZ)    // east
    // Opening to living room (west wall has two pieces + a header)
    this._wall(0.3, 3, 3, WALL3, KX - 4, 1.5, KZ - 2.5)
    this._wall(0.3, 3, 3, WALL3, KX - 4, 1.5, KZ + 2.5)
    this._wall(0.3, 0.8, 2, WALL3, KX - 4, 2.9, KZ)  // header above doorway

    // Kitchen counter L-shape
    this._obj(5, 0.9, 0.85, 0xd8d0c0, KX + 1, 0.45, KZ - 3.2)    // south counter
    this._obj(0.85, 0.9, 5, 0xd8d0c0, KX + 3.2, 0.45, KZ - 0.5)  // east counter
    // Cabinet doors on counters
    this._deco(5, 1.8, 0.2, 0xa07844, KX + 1, 1.35, KZ - 3.5)    // south cabinets
    this._deco(0.2, 1.8, 5, 0xa07844, KX + 3.5, 1.35, KZ - 0.5)  // east cabinets
    // Fridge (white)
    this._obj(0.8, 2.0, 0.8, 0xecece0, KX + 3.2, 1.0, KZ + 3.2)
    // Kitchen table + chairs
    this._obj(1.6, 0.75, 0.9, 0x8b6040, KX - 1.2, 0.375, KZ + 2.5)
    this._obj(0.45, 0.85, 0.45, 0xa07848, KX - 2.2, 0.425, KZ + 2.5)
    this._obj(0.45, 0.85, 0.45, 0xa07848, KX - 0.2, 0.425, KZ + 2.5)
    this._obj(0.45, 0.85, 0.45, 0xa07848, KX - 1.2, 0.425, KZ + 1.7)

    // ═══════════════════════════════════════════════════════
    //  BEDROOM  (west)  8 × 8  offset (-10, 0, 0)
    // ═══════════════════════════════════════════════════════
    const BX = -13, BZ = -1
    this._floor(8, 8, WOOD, BX, BZ)
    this._ceiling(8, 8, CEI, BX, BZ)
    this._wall(8, 3, 0.3, WALL2, BX, 1.5, BZ - 4)
    this._wall(8, 3, 0.3, WALL2, BX, 1.5, BZ + 4)
    this._wall(0.3, 3, 8, WALL2, BX - 4, 1.5, BZ)    // west outer
    // East wall with doorway to hallway
    this._wall(0.3, 3, 3, WALL2, BX + 4, 1.5, BZ - 2.5)
    this._wall(0.3, 3, 3, WALL2, BX + 4, 1.5, BZ + 2.5)
    this._wall(0.3, 0.8, 2, WALL2, BX + 4, 2.9, BZ)

    // Bed frame
    this._obj(1.6, 0.35, 2.4, 0x7a5a30, BX - 1.5, 0.175, BZ - 1.5)
    // Mattress
    this._deco(1.5, 0.2, 2.2, 0xe8e0d0, BX - 1.5, 0.45, BZ - 1.5)
    // Pillow
    this._deco(0.7, 0.12, 0.5, 0xf4ede0, BX - 1.5, 0.57, BZ - 2.4)
    // Headboard
    this._obj(1.6, 0.8, 0.2, 0x7a5a30, BX - 1.5, 0.75, BZ - 2.65)
    // Blanket (blue)
    this._deco(1.4, 0.12, 1.4, 0x3a5a7a, BX - 1.5, 0.58, BZ - 0.8)

    // Dresser
    this._obj(1.2, 1.1, 0.55, 0x8b6040, BX + 2.8, 0.55, BZ - 3.4)
    // Desk
    this._obj(1.4, 0.7, 0.65, 0x8b6040, BX + 2.8, 0.35, BZ + 2.0)
    // Desk chair
    this._obj(0.55, 0.45, 0.55, 0x2a4a6a, BX + 2.2, 0.225, BZ + 2.2)
    // Nightstand
    this._obj(0.5, 0.55, 0.5, 0x8b6040, BX - 0.55, 0.275, BZ - 2.2)
    this._deco(0.3, 0.12, 0.3, 0xf4d070, BX - 0.55, 0.57, BZ - 2.2) // lamp

    // ═══════════════════════════════════════════════════════
    //  HALLWAY  (north corridor) 4 × 10  offset (0, 0, -8)
    // ═══════════════════════════════════════════════════════
    const HX = 0, HZ = -9
    this._floor(4, 10, TILE, HX, HZ)
    this._ceiling(4, 10, CEI, HX, HZ)
    this._wall(4, 3, 0.3, WALL4, HX, 1.5, HZ - 5)    // north end
    this._wall(0.3, 3, 6, WALL4, HX - 2, 1.5, HZ - 2) // west partial
    this._wall(0.3, 3, 6, WALL4, HX + 2, 1.5, HZ - 2) // east partial
    // Doorways connecting hallway to living room already handled by living room south wall gaps
    // Add a slim hall table
    this._obj(0.3, 0.9, 1.2, 0x8b6040, HX, 0.45, HZ - 3.5)
    this._deco(0.25, 0.25, 0.25, 0xd44030, HX, 0.95, HZ - 3.5) // red decoration

    // ═══════════════════════════════════════════════════════
    //  BATHROOM  (north-east)  4 × 5  offset (+11, 0, -10)
    // ═══════════════════════════════════════════════════════
    const BATHX = 10, BATHZ = -11
    this._floor(5, 6, 0xddddd5, BATHX, BATHZ)
    this._ceiling(5, 6, CEI, BATHX, BATHZ)
    this._wall(5, 3, 0.3, 0xf0f0f0, BATHX, 1.5, BATHZ - 3)
    this._wall(5, 3, 0.3, 0xf0f0f0, BATHX, 1.5, BATHZ + 3)
    this._wall(0.3, 3, 6, 0xf0f0f0, BATHX + 2.5, 1.5, BATHZ)
    this._wall(0.3, 3, 6, 0xf0f0f0, BATHX - 2.5, 1.5, BATHZ)
    // Bathtub (white)
    this._obj(0.7, 0.5, 1.6, 0xe8e8e0, BATHX + 1.4, 0.25, BATHZ - 1.5)
    // Sink (white)
    this._obj(0.4, 0.05, 0.35, 0xe8e8e0, BATHX - 1.4, 0.8, BATHZ - 2.4)
    this._obj(0.08, 0.8, 0.08, 0xc0c0b8, BATHX - 1.4, 0.4, BATHZ - 2.4) // pedestal
    // Toilet
    this._obj(0.4, 0.4, 0.55, 0xe8e8e0, BATHX + 1.5, 0.2, BATHZ + 2.2)

    // Refresh all collision boxes (in case objects were added after walls)
    this.wallBoxes = this.wallBoxes.map(b => b) // already built inline
  }

  // Returns all meshes for raycasting (excludes the ground plane)
  getRaycastTargets() {
    return this.allMeshes
  }
}
