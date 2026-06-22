import * as THREE from 'three'

const H   = 4.2   // ceiling height
const T   = 0.3   // wall thickness
const MID = H / 2 // vertical midpoint

// ── Procedural texture generators ────────────────────────────

function rnd(a, b) { return a + Math.random() * (b - a) }

function genTex(w, h, fn) {
  const cv = document.createElement('canvas')
  cv.width = w; cv.height = h
  fn(cv.getContext('2d'), w, h)
  const t = new THREE.CanvasTexture(cv)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.needsUpdate = true
  return t
}

function texWoodFloor(ctx, w, h) {
  const planks = ['#c89060','#b87848','#d09a6a','#c08855']
  ctx.fillStyle = planks[0]; ctx.fillRect(0, 0, w, h)
  for (let y = 0; y < h; y += 28) {
    ctx.fillStyle = planks[Math.floor(y / 28) % planks.length]
    ctx.fillRect(0, y + 1, w, 27)
    ctx.fillStyle = '#6a4020'; ctx.fillRect(0, y, w, 1)
    for (let g = 0; g < 7; g++) {
      const gy = y + rnd(2, 25)
      ctx.strokeStyle = `rgba(70,35,8,0.07)`; ctx.lineWidth = rnd(0.5, 1.5)
      ctx.beginPath(); ctx.moveTo(0, gy)
      for (let x = 0; x <= w; x += 14) ctx.lineTo(x, gy + Math.sin(x * 0.06 + g) * 2)
      ctx.stroke()
    }
  }
  let bx = rnd(50, 90)
  while (bx < w) { ctx.fillStyle = '#6a4020'; ctx.fillRect(bx, 0, 1, h); bx += rnd(80, 140) }
}

function texDarkWood(ctx, w, h) {
  const planks = ['#6a4828','#7a5832','#604020','#724a28']
  ctx.fillStyle = planks[0]; ctx.fillRect(0, 0, w, h)
  for (let y = 0; y < h; y += 22) {
    ctx.fillStyle = planks[Math.floor(y / 22) % planks.length]
    ctx.fillRect(0, y + 1, w, 21)
    ctx.fillStyle = '#3a2010'; ctx.fillRect(0, y, w, 1)
    for (let g = 0; g < 5; g++) {
      const gy = y + rnd(2, 19)
      ctx.strokeStyle = `rgba(30,15,5,0.08)`; ctx.lineWidth = rnd(0.5, 1.5)
      ctx.beginPath(); ctx.moveTo(0, gy)
      for (let x = 0; x <= w; x += 12) ctx.lineTo(x, gy + Math.sin(x * 0.07 + g) * 1.5)
      ctx.stroke()
    }
  }
}

function texTile(ctx, w, h, tileCol, groutCol) {
  const tw = 64, th = 64, gt = 5
  ctx.fillStyle = groutCol || '#b0ada8'; ctx.fillRect(0, 0, w, h)
  for (let r = 0; r * th < h + th; r++) {
    for (let c = 0; c * tw < w + tw; c++) {
      ctx.fillStyle = tileCol || '#f0ede8'
      ctx.fillRect(c * tw + gt, r * th + gt, tw - gt * 2, th - gt * 2)
      const grd = ctx.createLinearGradient(c*tw, r*th, c*tw+tw, r*th+th)
      grd.addColorStop(0, 'rgba(255,255,255,0.14)'); grd.addColorStop(1, 'rgba(0,0,0,0.06)')
      ctx.fillStyle = grd; ctx.fillRect(c*tw+gt, r*th+gt, tw-gt*2, th-gt*2)
    }
  }
}

function texMarble(ctx, w, h) {
  const tw = 80, th = 80, gt = 4
  ctx.fillStyle = '#b8b4b0'; ctx.fillRect(0, 0, w, h)
  for (let r = 0; r * th < h + th; r++) {
    for (let c = 0; c * tw < w + tw; c++) {
      ctx.fillStyle = '#ece8e4'
      ctx.fillRect(c*tw+gt, r*th+gt, tw-gt*2, th-gt*2)
      ctx.strokeStyle = `rgba(160,150,140,${rnd(0.2, 0.6)})`; ctx.lineWidth = rnd(0.5, 2)
      ctx.beginPath()
      const sx = c*tw + gt + rnd(0, tw - gt)
      ctx.moveTo(sx, r*th + gt)
      ctx.bezierCurveTo(sx+rnd(-18,18), r*th+th*0.35, sx+rnd(-18,18), r*th+th*0.65, sx+rnd(-25,25), r*th+th-gt)
      ctx.stroke()
    }
  }
}

function texCarpet(ctx, w, h, hex) {
  ctx.fillStyle = hex || '#7a6858'; ctx.fillRect(0, 0, w, h)
  for (let i = 0; i < 3000; i++) {
    ctx.fillStyle = `rgba(0,0,0,${rnd(0.02, 0.08)})`
    ctx.fillRect(rnd(0,w), rnd(0,h), 1, rnd(1,4))
  }
}

function texPlaster(ctx, w, h, hex) {
  ctx.fillStyle = hex || '#ede5d0'; ctx.fillRect(0, 0, w, h)
  for (let i = 0; i < 1800; i++) {
    const alpha = rnd(0.01, 0.04)
    ctx.fillStyle = rnd(0,1) > 0.5 ? `rgba(255,255,255,${alpha})` : `rgba(0,0,0,${alpha})`
    ctx.fillRect(rnd(0,w), rnd(0,h), rnd(2,6), rnd(1,4))
  }
}

function texBrick(ctx, w, h) {
  const bW = 56, bH = 26, gt = 4
  const colors = ['#a03828','#b04432','#982e1e','#8c2c20','#b84838']
  ctx.fillStyle = '#c0a878'; ctx.fillRect(0, 0, w, h)
  for (let r = 0; r * bH < h + bH; r++) {
    const off = (r % 2) * (bW / 2)
    for (let c = -1; c * bW < w + bW; c++) {
      const x = c * bW + off, y = r * bH
      ctx.fillStyle = colors[Math.floor(rnd(0, colors.length))]
      ctx.fillRect(x + gt, y + gt, bW - gt*2, bH - gt*2)
      ctx.fillStyle = 'rgba(0,0,0,0.06)'
      for (let s = 0; s < 3; s++) ctx.fillRect(x+gt+rnd(0,bW-gt), y+gt+rnd(0,bH-gt), rnd(6,22), 1)
    }
  }
}

function texWoodGrain(ctx, w, h) {
  const cols = ['#8b6040','#9a7050','#7a5030','#a07848']
  ctx.fillStyle = cols[0]; ctx.fillRect(0, 0, w, h)
  for (let y = 0; y < h; y += 10) {
    ctx.fillStyle = cols[Math.floor(y/10) % cols.length]; ctx.fillRect(0, y, w, 10)
    for (let g = 0; g < 3; g++) {
      const gy = y + rnd(1, 9)
      ctx.strokeStyle = 'rgba(50,25,5,0.09)'; ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(0, gy)
      for (let x = 0; x <= w; x += 10) ctx.lineTo(x, gy + Math.sin(x * 0.09 + g) * 1.5)
      ctx.stroke()
    }
  }
}

function texCeiling(ctx, w, h) {
  ctx.fillStyle = '#f2ede8'; ctx.fillRect(0, 0, w, h)
  for (let i = 0; i < 1200; i++) {
    ctx.fillStyle = `rgba(180,170,160,${rnd(0.01,0.035)})`
    ctx.fillRect(rnd(0,w), rnd(0,h), rnd(2,7), rnd(2,5))
  }
}

// ── Building class ────────────────────────────────────────────

export class Building {
  constructor(scene) {
    this.scene     = scene
    this.wallBoxes = []
    this.allMeshes = []
    this._tex      = this._makeTex()
    this._build()
  }

  _makeTex() {
    return {
      woodFloor: genTex(512, 256, texWoodFloor),
      darkWood:  genTex(512, 256, texDarkWood),
      tile:      genTex(256, 256, (c,w,h) => texTile(c,w,h)),
      tileGrey:  genTex(256, 256, (c,w,h) => texTile(c,w,h,'#e8e4e0','#a8a5a0')),
      marble:    genTex(256, 256, texMarble),
      carpetBei: genTex(256, 256, (c,w,h) => texCarpet(c,w,h,'#a09080')),
      carpetBlu: genTex(256, 256, (c,w,h) => texCarpet(c,w,h,'#60708a')),
      carpetRed: genTex(256, 256, (c,w,h) => texCarpet(c,w,h,'#7a4040')),
      plaster:   genTex(256, 256, (c,w,h) => texPlaster(c,w,h,'#ede5d0')),
      pBlue:     genTex(256, 256, (c,w,h) => texPlaster(c,w,h,'#ccdae8')),
      pGreen:    genTex(256, 256, (c,w,h) => texPlaster(c,w,h,'#cce0d0')),
      pCream:    genTex(256, 256, (c,w,h) => texPlaster(c,w,h,'#f0e8d8')),
      pYellow:   genTex(256, 256, (c,w,h) => texPlaster(c,w,h,'#f0e4c0')),
      brick:     genTex(512, 256, texBrick),
      wood:      genTex(256, 256, texWoodGrain),
      ceiling:   genTex(256, 256, texCeiling),
    }
  }

  // ── Material helpers ────────────────────────────────────────

  _tmat(key, rx, ry, tint) {
    const tex = this._tex[key].clone()
    tex.repeat.set(rx, ry)
    tex.needsUpdate = true
    return new THREE.MeshLambertMaterial({ map: tex, color: tint ?? 0xffffff })
  }

  _cmat(hex) {
    return new THREE.MeshLambertMaterial({ color: hex })
  }

  // ── Mesh helpers ────────────────────────────────────────────

  _add(mesh, collidable = false) {
    this.scene.add(mesh)
    this.allMeshes.push(mesh)
    if (collidable) this.wallBoxes.push(new THREE.Box3().setFromObject(mesh))
  }

  _box(w, h, d, mat, x, y, z, cast = false, recv = true) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    m.position.set(x, y, z)
    m.castShadow = cast; m.receiveShadow = recv
    return m
  }

  _wall(w, h, d, mat, x, y, z) {
    this._add(this._box(w, h, d, mat, x, y, z), true)
  }

  _floor(w, d, mat, x, z) {
    this._add(this._box(w, 0.18, d, mat, x, -0.09, z))
  }

  _ceil(w, d, mat, x, z) {
    this._add(this._box(w, 0.18, d, mat, x, H + 0.09, z))
  }

  _obj(w, h, d, mat, x, y, z) {
    this._add(this._box(w, h, d, mat, x, y, z, true, true), true)
  }

  _deco(w, h, d, mat, x, y, z) {
    this._add(this._box(w, h, d, mat, x, y, z, true, true), false)
  }

  // Wall panel with a doorway cut out
  // 'side' = 'top'|'left'|'right'  determines what's next to the gap
  _wallDoor(totalLen, wallH, thick, mat, cx, cy, cz, rot, gapW = 2.6, gapH = 2.5) {
    const half    = totalLen / 2
    const sideLen = (totalLen - gapW) / 2

    // Two side panels
    const makePanel = (offset, len) => {
      const m = this._box(
        rot === 0 ? len    : thick,
        wallH,
        rot === 0 ? thick  : len,
        mat,
        cx + (rot === 0 ? offset : 0),
        cy,
        cz + (rot === 0 ? 0 : offset)
      )
      this._add(m, true)
    }

    if (sideLen > 0.1) {
      if (rot === 0) {
        makePanel(-(half - sideLen/2), sideLen)
        makePanel( (half - sideLen/2), sideLen)
      } else {
        makePanel(-(half - sideLen/2), sideLen)
        makePanel( (half - sideLen/2), sideLen)
      }
    }

    // Header above door
    const headerH = wallH - gapH
    if (headerH > 0.05) {
      const hm = this._box(
        rot === 0 ? gapW : thick,
        headerH,
        rot === 0 ? thick : gapW,
        mat,
        cx,
        gapH + headerH / 2,
        cz
      )
      this._add(hm, true)
    }
  }

  // Skirting board along a wall
  _skirting(len, mat, x, z, axis = 'x') {
    const m = axis === 'x'
      ? this._box(len, 0.12, 0.06, mat, x, 0.06, z)
      : this._box(0.06, 0.12, len, mat, x, 0.06, z)
    this._add(m)
  }

  // ── Main build ───────────────────────────────────────────────

  _build() {
    // Invisible ground for shadows
    const gnd = new THREE.Mesh(
      new THREE.PlaneGeometry(300, 300),
      new THREE.MeshLambertMaterial({ color: 0x1a1208 })
    )
    gnd.rotation.x = -Math.PI / 2; gnd.position.y = -0.15
    gnd.receiveShadow = true; this.scene.add(gnd)

    this._buildLivingRoom()
    this._buildKitchen()
    this._buildDining()
    this._buildHallway()
    this._buildStudy()
    this._buildMasterBed()
    this._buildGuestBed()
    this._buildBathroom()
    this._buildConservatory()
    this._buildUtility()
  }

  // ══════════════════════════════════════════════════════════════
  //  LIVING ROOM  24×20  centre (0,0)
  // ══════════════════════════════════════════════════════════════
  _buildLivingRoom() {
    const W = 24, D = 20, cx = 0, cz = 0
    const wm = this._tmat('plaster', W/2, H/2)
    const fm = this._tmat('woodFloor', W/1.2, D/1.2)
    const cm = this._tmat('ceiling', W/3, D/3)

    this._floor(W, D, fm, cx, cz)
    this._ceil(W, D, cm, cx, cz)

    // South wall
    this._wall(W, H, T, wm, cx, MID, cz + D/2)
    // North wall — doorway to hallway (centre gap)
    this._wallDoor(W, H, T, wm, cx, MID, cz - D/2, 0, 3.0, 2.6)
    // West wall — doorway to master bedroom
    this._wallDoor(D, H, T, this._tmat('plaster',D/2,H/2), cx - W/2, MID, cz, 1, 3.0, 2.6)
    // East wall — doorway to kitchen
    this._wallDoor(D, H, T, this._tmat('plaster',D/2,H/2), cx + W/2, MID, cz, 1, 3.2, 2.6)

    // Feature brick wall on south face (interior side)
    this._deco(W * 0.6, H * 0.55, 0.12,
      this._tmat('brick', W*0.6/0.5, H*0.55/0.25),
      cx, MID * 0.55, cz + D/2 - 0.22)

    // Large L-shaped sofa
    this._obj(4.8, 0.7, 1.1, this._cmat(0x7a1818), cx - 3,    0.35, cz + 6.5)  // long seat
    this._obj(1.1, 0.7, 2.8, this._cmat(0x7a1818), cx + 1.85, 0.35, cz + 5.7)  // short arm
    this._deco(4.8, 0.95, 0.28, this._cmat(0x6a1010), cx - 3,   0.475, cz + 7.2) // back
    this._deco(1.1, 0.95, 2.8,  this._cmat(0x6a1010), cx + 1.85,0.475, cz + 5.0) // back arm
    // Cushions
    for (let i = 0; i < 3; i++)
      this._deco(0.55, 0.28, 0.1, this._cmat(0xd8c0a0), cx - 4 + i*1.5, 0.84, cz + 7.15)

    // Large coffee table
    this._obj(2.4, 0.04, 1.2, this._tmat('wood',2,1), cx - 1.2, 0.45, cz + 4.5)
    for (const [lx, lz] of [[-1, -0.45],[1,-0.45],[-1,0.45],[1,0.45]])
      this._obj(0.08, 0.44, 0.08, this._cmat(0x5a3820), cx - 1.2 + lx, 0.22, cz + 4.5 + lz)

    // TV unit + screen
    this._obj(3.8, 0.6, 0.5, this._tmat('darkWood',3,1), cx, 0.3, cz - 9.1)
    this._deco(3.2, 1.8, 0.1, this._cmat(0x0c0c0e), cx, 1.5, cz - 9.25)

    // Full bookshelf wall (east side)
    this._obj(0.35, 2.8, 4.2, this._tmat('wood',2,4), cx + 11.3, 1.4, cz - 6)
    const bookColors = [0xb52b1e, 0x1a4f8a, 0xc9940a, 0x5a3d8a, 0x2a7a3a, 0xd8ccb0, 0x8a4040, 0x4a6a8a]
    for (let shelf = 0; shelf < 6; shelf++) {
      let bz = cz - 7.8
      while (bz < cz - 4.2) {
        const bw = rnd(0.14, 0.24)
        this._deco(0.25, rnd(0.22, 0.38), bw,
          this._cmat(bookColors[Math.floor(rnd(0, bookColors.length))]),
          cx + 11.08, 0.3 + shelf * 0.42, bz + bw/2)
        bz += bw + 0.01
      }
    }

    // Side tables + lamps
    this._obj(0.55, 0.6, 0.55, this._tmat('wood',1,1), cx + 1.3, 0.3, cz + 7.0)
    this._deco(0.12, 0.9, 0.12, this._cmat(0xa09080), cx + 1.3, 0.9, cz + 7.0)
    this._deco(0.4, 0.25, 0.4, this._cmat(0xf4e8d8), cx + 1.3, 1.42, cz + 7.0)

    // Two armchairs
    this._obj(1.1, 0.65, 1.0, this._cmat(0x8b6040), cx + 5,  0.325, cz + 4.5)
    this._deco(1.1, 0.9, 0.25, this._cmat(0x7a5030), cx + 5,  0.45, cz + 5.1)
    this._obj(1.1, 0.65, 1.0, this._cmat(0x8b6040), cx - 7, 0.325, cz + 4.5)
    this._deco(1.1, 0.9, 0.25, this._cmat(0x7a5030), cx - 7, 0.45, cz + 5.1)

    // Large rug
    this._deco(5.5, 0.04, 3.5, this._cmat(0x6a4838), cx - 1.5, 0.02, cz + 5.2)

    // Floor lamp
    this._deco(0.1, 1.8, 0.1, this._cmat(0x9a8878), cx - 8, 0.9, cz + 7.5)
    this._deco(0.45, 0.32, 0.45, this._cmat(0xf0e8d8), cx - 8, 1.96, cz + 7.5)

    // Plant (large)
    this._deco(0.55, 0.55, 0.55, this._cmat(0x5a4838), cx - 9.5, 0.28, cz - 7.5)
    this._deco(0.7, 0.9, 0.7, this._cmat(0x3a6a30), cx - 9.5, 0.95, cz - 7.5)

    // Skirting boards
    this._skirting(W, this._cmat(0xf0e8d8), cx, cz + D/2 - T/2, 'x')
    this._skirting(W, this._cmat(0xf0e8d8), cx, cz - D/2 + T/2, 'x')
  }

  // ══════════════════════════════════════════════════════════════
  //  KITCHEN  16×14  centre (+22, 0)
  // ══════════════════════════════════════════════════════════════
  _buildKitchen() {
    const cx = 22, cz = -1
    const W = 16, D = 14
    const wm = this._tmat('pYellow', W/2, H/2)
    const fm = this._tmat('tile', W/1.5, D/1.5)
    const cm = this._tmat('ceiling', W/3, D/3)

    this._floor(W, D, fm, cx, cz)
    this._ceil(W, D, cm, cx, cz)

    // Walls (west has doorway shared with living room)
    this._wall(W, H, T, wm, cx,       MID, cz - D/2)   // south
    this._wall(W, H, T, wm, cx,       MID, cz + D/2)   // north (doorway to dining)
    this._wallDoor(D, H, T, wm, cx + W/2, MID, cz, 1, 3.0, 2.6)  // east outer wall

    // Kitchen counter — south wall L-shape
    this._obj(W * 0.7, 0.92, 0.88, this._tmat('tileGrey', 6, 1), cx - 1, 0.46, cz - D/2 + 0.6)
    this._obj(0.88, 0.92, D * 0.45, this._tmat('tileGrey', 1, 4), cx + W/2 - 0.6, 0.46, cz - 2)
    // Counter base cabinets
    this._deco(W * 0.7, 0.8, 0.82, this._tmat('wood', 5, 1), cx - 1, 0.4, cz - D/2 + 0.55)
    this._deco(0.82, 0.8, D * 0.45, this._tmat('wood', 1, 3), cx + W/2 - 0.55, 0.4, cz - 2)
    // Upper cabinets
    this._obj(W * 0.65, 0.85, 0.38, this._tmat('wood', 5, 1), cx - 1.2, 2.55, cz - D/2 + 0.28)
    this._obj(0.38, 0.85, D * 0.4, this._tmat('wood', 1, 3), cx + W/2 - 0.25, 2.55, cz - 2)

    // Kitchen island
    this._obj(2.8, 0.94, 1.4, this._tmat('tileGrey',3,2), cx - 2, 0.47, cz + 1.5)
    this._deco(2.8, 0.86, 1.4, this._tmat('wood',3,2), cx - 2, 0.43, cz + 1.5)
    // Island bar stools
    for (let i = -1; i <= 1; i++)
      this._obj(0.4, 0.82, 0.4, this._cmat(0x3a3020), cx - 2 + i * 0.95, 0.41, cz + 3.0)

    // Fridge
    this._obj(0.85, 2.1, 0.75, this._cmat(0xe0e0da), cx + W/2 - 1.0, 1.05, cz - D/2 + 0.5)
    // Oven / hob
    this._obj(0.75, 0.1, 0.75, this._cmat(0x303030), cx + 1.5, 0.97, cz - D/2 + 0.56)

    // Dining table + chairs in kitchen nook (north-west)
    this._obj(2.0, 0.75, 1.0, this._tmat('wood',2,1), cx - 5.5, 0.375, cz + 4.0)
    for (const [dx, dz] of [[-1,0],[1,0],[0,-0.85],[0,0.85]])
      this._obj(0.5, 0.85, 0.5, this._tmat('wood',1,1), cx - 5.5 + dx, 0.425, cz + 4.0 + dz)
  }

  // ══════════════════════════════════════════════════════════════
  //  DINING ROOM  14×12  centre (+22, +12)
  // ══════════════════════════════════════════════════════════════
  _buildDining() {
    const cx = 22, cz = 13
    const W = 14, D = 11
    const wm = this._tmat('pCream', W/2, H/2)
    const fm = this._tmat('darkWood', W/1.2, D/1.2)
    const cm = this._tmat('ceiling', W/3, D/3)

    this._floor(W, D, fm, cx, cz)
    this._ceil(W, D, cm, cx, cz)

    this._wall(W, H, T, wm, cx,       MID, cz + D/2)
    this._wall(W, H, T, wm, cx,       MID, cz - D/2)
    this._wall(D, H, T, wm, cx + W/2, MID, cz, 1)  // wait - wrong axis
    // East outer wall
    this._wall(T, H, D, wm, cx + W/2, MID, cz)
    // South wall has opening to living room's north (already open)
    // West wall (shared with living room) — opening handled by living room

    // Large dining table
    this._obj(3.8, 0.78, 1.8, this._tmat('darkWood',4,2), cx - 0.5, 0.39, cz)
    // Table legs
    for (const [dx,dz] of [[-1.6,-0.7],[1.6,-0.7],[-1.6,0.7],[1.6,0.7]])
      this._obj(0.1, 0.78, 0.1, this._tmat('darkWood',1,1), cx - 0.5+dx, 0.39, cz+dz)
    // 8 chairs
    const chairPositions = [
      [-1.8,0,-0.7],[-0.7,0,-0.7],[0.4,0,-0.7],[1.5,0,-0.7],
      [-1.8,0, 0.7],[-0.7,0, 0.7],[0.4,0, 0.7],[1.5,0, 0.7]
    ]
    chairPositions.forEach(([dx,dy,dz]) => {
      this._obj(0.52, 0.88, 0.52, this._tmat('darkWood',1,1), cx-0.5+dx, 0.44, cz+dz)
      this._deco(0.52, 0.75, 0.1, this._tmat('darkWood',1,1), cx-0.5+dx, 0.75, cz+dz+(dz<0?-0.3:0.3))
    })

    // Sideboard
    this._obj(2.2, 0.95, 0.55, this._tmat('darkWood',2,1), cx + 5.5, 0.475, cz)
    // Display cabinet
    this._obj(0.3, 2.2, 1.4, this._tmat('wood',1,3), cx - 5.5, 1.1, cz + 2)

    // Chandelier placeholder (decorative box up high)
    this._deco(0.6, 0.25, 0.6, this._cmat(0xc0a840), cx - 0.5, H - 0.35, cz)
  }

  // ══════════════════════════════════════════════════════════════
  //  HALLWAY  5×28  centre (0, -20)
  // ══════════════════════════════════════════════════════════════
  _buildHallway() {
    const cx = 0, cz = -22
    const W = 5, D = 24
    const wm = this._tmat('plaster', D/2, H/2)
    const fm = this._tmat('tile', W/1.5, D/1.5)
    const cm = this._tmat('ceiling', W/2, D/3)

    this._floor(W, D, fm, cx, cz)
    this._ceil(W, D, cm, cx, cz)

    // Long side walls (no doors — opens to rooms on each end)
    this._wall(T, H, D, wm, cx - W/2, MID, cz)
    this._wall(T, H, D, wm, cx + W/2, MID, cz)
    // North end wall with door to study
    this._wallDoor(W, H, T, wm, cx, MID, cz - D/2, 0, 2.5, 2.6)

    // Hall table + mirror placeholder
    this._obj(1.2, 0.88, 0.45, this._tmat('darkWood',1,1), cx, 0.44, cz)
    this._deco(0.06, 1.1, 0.8, this._cmat(0xd0c8c0), cx, 1.44, cz - 0.22)

    // Coat hooks area
    for (let i = 0; i < 4; i++)
      this._deco(0.08, 0.08, 0.08, this._cmat(0x303028), cx - W/2 + 0.15, 1.8 - i * 0.01, cz - 8 + i * 0.9)
  }

  // ══════════════════════════════════════════════════════════════
  //  STUDY / LIBRARY  14×12  centre (0, -36)
  // ══════════════════════════════════════════════════════════════
  _buildStudy() {
    const cx = 0, cz = -38
    const W = 14, D = 12
    const wm = this._tmat('pBlue', W/2, H/2)
    const fm = this._tmat('carpetRed', W/1.5, D/1.5)
    const cm = this._tmat('ceiling', W/3, D/3)

    this._floor(W, D, fm, cx, cz)
    this._ceil(W, D, cm, cx, cz)

    // Walls — south has doorway to hallway
    this._wallDoor(W, H, T, wm, cx, MID, cz + D/2, 0, 2.5, 2.6)
    this._wall(W, H, T, wm, cx,       MID, cz - D/2)
    this._wall(T, H, D, wm, cx - W/2, MID, cz)
    this._wall(T, H, D, wm, cx + W/2, MID, cz)

    // Floor-to-ceiling bookshelves on 3 walls
    const shelfMat = this._tmat('darkWood', 3, 4)
    this._obj(W - 0.5, H, 0.38, shelfMat, cx, MID, cz - D/2 + 0.22)   // north
    this._obj(0.38, H, D - 0.5, shelfMat, cx - W/2 + 0.22, MID, cz)    // west
    this._obj(0.38, H, D * 0.5, shelfMat, cx + W/2 - 0.22, MID, cz + 1) // east partial

    // Books — hundreds!
    const bkCol = [0xb52b1e,0x1a4f8a,0xc9940a,0x5a3d8a,0x2a7a3a,0xd8ccb0,0x8a4040,0x606878,0xa87040]
    for (let shelf = 0; shelf < 8; shelf++) {
      let bx = cx - W/2 + 0.6
      while (bx < cx + W/2 - 0.6) {
        const bw = rnd(0.12, 0.2)
        this._deco(bw, rnd(0.2, 0.36), 0.28,
          this._cmat(bkCol[Math.floor(rnd(0, bkCol.length))]),
          bx + bw/2, 0.22 + shelf * 0.44, cz - D/2 + 0.06)
        bx += bw + 0.008
      }
    }

    // Large reading desk
    this._obj(2.4, 0.78, 1.1, this._tmat('darkWood',2,1), cx + 2, 0.39, cz + 2)
    this._obj(0.55, 0.85, 0.55, this._tmat('carpetBlu',1,1), cx + 2, 0.425, cz + 3.2)  // chair
    this._deco(0.55, 0.7, 0.12, this._tmat('darkWood',1,1), cx + 2, 0.7, cz + 3.65)     // back

    // Reading armchair
    this._obj(1.0, 0.7, 0.95, this._cmat(0x4a5870), cx - 4.5, 0.35, cz + 2.5)
    this._deco(1.0, 0.95, 0.25, this._cmat(0x3a4860), cx - 4.5, 0.475, cz + 3.1)

    // Globe / desk lamp
    this._deco(0.28, 0.28, 0.28, this._cmat(0x6080a0), cx + 0.8, 0.92, cz + 2)
    this._deco(0.08, 0.55, 0.08, this._cmat(0x808878), cx + 3, 0.67, cz + 2)
    this._deco(0.3, 0.2, 0.3, this._cmat(0xc8a030), cx + 3, 1.05, cz + 2)

    // Fireplace (false) on north wall
    this._obj(2.4, 1.2, 0.38, this._cmat(0xd8cfc0), cx, 0.6, cz - D/2 + 0.22)
    this._deco(1.8, 0.9, 0.3, this._cmat(0x1a1208), cx, 0.5, cz - D/2 + 0.18)
  }

  // ══════════════════════════════════════════════════════════════
  //  MASTER BEDROOM  16×14  centre (-22, -2)
  // ══════════════════════════════════════════════════════════════
  _buildMasterBed() {
    const cx = -22, cz = -2
    const W = 16, D = 14
    const wm = this._tmat('pBlue', W/2, H/2)
    const fm = this._tmat('carpetBei', W/1.5, D/1.5)
    const cm = this._tmat('ceiling', W/3, D/3)

    this._floor(W, D, fm, cx, cz)
    this._ceil(W, D, cm, cx, cz)

    this._wall(W, H, T, wm, cx,       MID, cz - D/2)
    this._wall(W, H, T, wm, cx,       MID, cz + D/2)
    this._wall(T, H, D, wm, cx - W/2, MID, cz)           // west outer
    // East wall doorway to living room
    this._wallDoor(D, H, T, wm, cx + W/2, MID, cz, 1, 3.0, 2.6)

    // King bed
    this._obj(2.2, 0.36, 2.8, this._tmat('darkWood',2,3), cx - 3, 0.18, cz - 2)   // frame
    this._deco(2.1, 0.24, 2.6, this._cmat(0xf0e8e0), cx - 3, 0.48, cz - 2)         // mattress
    this._deco(2.1, 0.2, 1.4, this._cmat(0xd0e0f0), cx - 3, 0.68, cz - 1)          // duvet
    this._deco(0.8, 0.18, 0.5, this._cmat(0xf4f0ec), cx - 3.5, 0.7, cz - 3.1)      // pillow L
    this._deco(0.8, 0.18, 0.5, this._cmat(0xf4f0ec), cx - 2.5, 0.7, cz - 3.1)      // pillow R
    this._obj(2.2, 0.9, 0.28, this._tmat('darkWood',2,1), cx - 3, 0.45, cz - 3.6)  // headboard

    // Nightstands
    for (const dx of [-4.6, -1.4]) {
      this._obj(0.55, 0.55, 0.55, this._tmat('darkWood',1,1), cx + dx, 0.275, cz - 2.5)
      this._deco(0.22, 0.55, 0.22, this._cmat(0xf0dca0), cx + dx, 0.83, cz - 2.5)
    }

    // Double wardrobe
    this._obj(2.8, 2.4, 0.65, this._tmat('darkWood',3,3), cx + W/2 - 1.5, 1.2, cz - 4.5)

    // Dresser
    this._obj(1.6, 1.0, 0.55, this._tmat('darkWood',2,1), cx + 5, 0.5, cz + 4)
    this._deco(1.4, 0.85, 0.06, this._cmat(0xd0c8c0), cx + 5, 1.0, cz + 3.7)  // mirror

    // Armchair
    this._obj(1.0, 0.65, 0.9, this._cmat(0x607090), cx - 7, 0.325, cz + 5)
    this._deco(1.0, 0.9, 0.22, this._cmat(0x506080), cx - 7, 0.45, cz + 5.6)

    // Rug
    this._deco(3.0, 0.04, 2.2, this._cmat(0x4a6080), cx - 3, 0.02, cz - 1.2)
  }

  // ══════════════════════════════════════════════════════════════
  //  GUEST BEDROOM  12×10  centre (-22, +12)
  // ══════════════════════════════════════════════════════════════
  _buildGuestBed() {
    const cx = -22, cz = 12
    const W = 12, D = 10
    const wm = this._tmat('pGreen', W/2, H/2)
    const fm = this._tmat('carpetBlu', W/1.5, D/1.5)
    const cm = this._tmat('ceiling', W/3, D/3)

    this._floor(W, D, fm, cx, cz)
    this._ceil(W, D, cm, cx, cz)

    this._wall(W, H, T, wm, cx, MID, cz + D/2)
    this._wall(W, H, T, wm, cx, MID, cz - D/2)
    this._wall(T, H, D, wm, cx - W/2, MID, cz)
    this._wallDoor(D, H, T, wm, cx + W/2, MID, cz, 1, 2.8, 2.6)

    // Queen bed
    this._obj(1.8, 0.34, 2.2, this._tmat('wood',2,2), cx - 2, 0.17, cz - 1.5)
    this._deco(1.7, 0.22, 2.0, this._cmat(0xf0ece8), cx - 2, 0.45, cz - 1.5)
    this._deco(1.7, 0.2, 1.0, this._cmat(0x6090a0), cx - 2, 0.62, cz - 1.0)
    this._deco(0.7, 0.16, 0.44, this._cmat(0xf8f4f0), cx - 2.4, 0.65, cz - 2.55)
    this._deco(0.7, 0.16, 0.44, this._cmat(0xf8f4f0), cx - 1.6, 0.65, cz - 2.55)
    this._obj(1.8, 0.85, 0.24, this._tmat('wood',2,1), cx - 2, 0.425, cz - 2.75)

    // Desk + chair
    this._obj(1.4, 0.72, 0.6, this._tmat('wood',1,1), cx + 4, 0.36, cz + 3)
    this._obj(0.48, 0.78, 0.48, this._tmat('carpetBlu',1,1), cx + 4, 0.39, cz + 4.0)

    // Wardrobe
    this._obj(1.8, 2.2, 0.6, this._tmat('wood',2,3), cx - 4.2, 1.1, cz - 3.8)

    // Bookcase
    this._obj(0.28, 1.8, 1.6, this._tmat('wood',1,2), cx + W/2 - 0.18, 0.9, cz + 2)
  }

  // ══════════════════════════════════════════════════════════════
  //  BATHROOM  8×8  centre (-22, -15) + small ensuite
  // ══════════════════════════════════════════════════════════════
  _buildBathroom() {
    const cx = -22, cz = -17
    const W = 10, D = 8
    const wm = this._tmat('tile', W/1.2, H/0.8, 0xeeeeee)
    const fm = this._tmat('marble', W/1.2, D/1.2)
    const cm = this._tmat('ceiling', W/3, D/3)

    this._floor(W, D, fm, cx, cz)
    this._ceil(W, D, cm, cx, cz)

    this._wall(W, H, T, wm, cx,       MID, cz - D/2)
    this._wall(W, H, T, wm, cx,       MID, cz + D/2)
    this._wall(T, H, D, wm, cx - W/2, MID, cz)
    this._wallDoor(D, H, T, wm, cx + W/2, MID, cz, 1, 2.4, 2.6)

    // Freestanding bathtub
    this._obj(0.85, 0.5, 1.9, this._cmat(0xf0ede8), cx - 2, 0.25, cz - 1)
    this._deco(0.65, 0.32, 1.7, this._cmat(0xd8d0e8), cx - 2, 0.42, cz - 1)
    // Tub feet
    for (const [dx,dz] of [[-0.35,-0.85],[0.35,-0.85],[-0.35,0.85],[0.35,0.85]])
      this._deco(0.08, 0.08, 0.08, this._cmat(0xc0b888), cx - 2 + dx, 0.04, cz - 1 + dz)

    // Shower cubicle
    this._obj(1.4, H * 0.85, 0.06, this._cmat(0xd0e8e8), cx + 3, H*0.425, cz - 3)
    this._obj(0.06, H * 0.85, 1.4, this._cmat(0xd0e8e8), cx + 3.7, H*0.425, cz - 3.7)

    // Double sink unit
    this._obj(1.8, 0.85, 0.5, this._cmat(0xe8e4e0), cx + 2.5, 0.425, cz + 2.5)
    this._deco(1.8, 0.06, 0.5, this._cmat(0xf4f4f0), cx + 2.5, 0.88, cz + 2.5)  // counter
    this._deco(1.6, 1.0, 0.06, this._cmat(0xd0c8c0), cx + 2.5, 1.42, cz + 2.26)  // mirror

    // Toilet
    this._obj(0.44, 0.42, 0.68, this._cmat(0xf0ece8), cx - 4, 0.21, cz + 2.5)
    this._deco(0.44, 0.1, 0.55, this._cmat(0xf4f0ec), cx - 4, 0.47, cz + 2.2)

    // Towel rail
    this._deco(0.04, 0.04, 0.7, this._cmat(0xc0b888), cx - 4.9, 1.1, cz - 1)
    this._deco(0.04, 0.04, 0.7, this._cmat(0xc0b888), cx - 4.9, 1.4, cz - 1)
  }

  // ══════════════════════════════════════════════════════════════
  //  CONSERVATORY (glass room)  18×12  centre (0, +18)
  // ══════════════════════════════════════════════════════════════
  _buildConservatory() {
    const cx = 0, cz = 19
    const W = 18, D = 12
    const wm = this._tmat('plaster', W/2, H/2, 0xd0e8e4)
    const fm = this._tmat('tile', W/1.5, D/1.5, 0xf0f8f0)
    const cm = this._tmat('ceiling', W/3, D/3, 0xdff0ec)

    this._floor(W, D, fm, cx, cz)
    this._ceil(W, D, cm, cx, cz)

    // South + outer walls (thin, "glass" feel = lighter coloured)
    this._wall(W, H, T, wm, cx,       MID, cz + D/2)
    this._wall(T, H, D, wm, cx - W/2, MID, cz)
    this._wall(T, H, D, wm, cx + W/2, MID, cz)
    // North wall has doorway to living room (open)

    // Lots of plants
    const plantPos = [[-7,16],[7,16],[-7,22],[7,22],[0,24],[-4,24],[4,24]]
    plantPos.forEach(([px, pz]) => {
      const h = rnd(0.6, 1.4)
      this._deco(rnd(0.35, 0.6), rnd(0.3, 0.45), rnd(0.35, 0.6), this._cmat(0x4a6830), px, h*0.5+0.1, pz)
      this._deco(rnd(0.4, 0.8), h, rnd(0.4, 0.8), this._cmat(0x2a5820 + Math.floor(rnd(0,8)) * 0x001000), px, h*0.5, pz)
    })

    // Wicker furniture set
    this._obj(1.6, 0.68, 0.9, this._cmat(0x9a7848), cx - 3, 0.34, cz + 3)
    this._obj(1.6, 0.68, 0.9, this._cmat(0x9a7848), cx + 3, 0.34, cz + 3)
    this._deco(1.6, 0.85, 0.22, this._cmat(0x8a6838), cx - 3, 0.425, cz + 3.6)
    this._deco(1.6, 0.85, 0.22, this._cmat(0x8a6838), cx + 3, 0.425, cz + 3.6)
    // Coffee table
    this._obj(1.2, 0.04, 0.65, this._tmat('wood',1,1), cx, 0.45, cz + 3)
    for (const [dx,dz] of [[-0.5,-0.28],[0.5,-0.28],[-0.5,0.28],[0.5,0.28]])
      this._obj(0.06, 0.44, 0.06, this._cmat(0x8a7050), cx+dx, 0.22, cz+3+dz)

    // Cushions on seats
    this._deco(0.45, 0.1, 0.45, this._cmat(0xc8e8c0), cx - 3.3, 0.73, cz + 3)
    this._deco(0.45, 0.1, 0.45, this._cmat(0xc0dcc8), cx - 3 + 0.6, 0.73, cz + 3)
    this._deco(0.45, 0.1, 0.45, this._cmat(0xc8e8c0), cx + 3, 0.73, cz + 3)
  }

  // ══════════════════════════════════════════════════════════════
  //  UTILITY ROOM  8×6  centre (+14, -22)
  // ══════════════════════════════════════════════════════════════
  _buildUtility() {
    const cx = 16, cz = -20
    const W = 8, D = 8
    const wm = this._tmat('plaster', W/2, H/2, 0xd8d4cc)
    const fm = this._tmat('tileGrey', W/1.5, D/1.5)
    const cm = this._tmat('ceiling', W/3, D/3)

    this._floor(W, D, fm, cx, cz)
    this._ceil(W, D, cm, cx, cz)

    this._wall(W, H, T, wm, cx,       MID, cz - D/2)
    this._wall(W, H, T, wm, cx,       MID, cz + D/2)
    this._wall(T, H, D, wm, cx + W/2, MID, cz)
    this._wallDoor(D, H, T, wm, cx - W/2, MID, cz, 1, 2.4, 2.6)

    // Washer / dryer
    this._obj(0.65, 0.9, 0.65, this._cmat(0xe0e0e0), cx + 2.5, 0.45, cz - 2.8)
    this._obj(0.65, 0.9, 0.65, this._cmat(0xdcdcdc), cx + 2.5, 0.45, cz - 2.0)
    // Shelving
    this._obj(0.24, 2.4, 2.4, this._tmat('wood',1,3), cx - 3.7, 1.2, cz)
    // Utility sink
    this._obj(0.55, 0.88, 0.5, this._cmat(0xd8d8d0), cx + 2.5, 0.44, cz + 2.5)
  }

  // ── Public API ────────────────────────────────────────────────

  getRaycastTargets() { return this.allMeshes }
}
