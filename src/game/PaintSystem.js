import * as THREE from 'three'

const SWATCHES = [
  '#f4ede0','#e0d4b8','#c0956b','#8b6040',
  '#b52b1e','#7a1a1a','#1a4f8a','#2a6a9a',
  '#c9940a','#808070','#505040','#2c1c0c',
  '#c8b090','#9a7a5a','#4a7a4a','#7a5a8a',
]

export class PaintSystem {
  constructor(scene, camera, myCharacter, buildingMeshes, onPaintChange) {
    this.scene          = scene
    this.camera         = camera
    this.myCharacter    = myCharacter
    this.buildingMeshes = buildingMeshes
    this.onPaintChange  = onPaintChange

    this.active        = false
    this.painting      = false
    this.eyedropActive = false
    this.color         = '#c0956b'
    this.brushRadius   = 32     // pixels on 512 canvas
    this.raycaster     = new THREE.Raycaster()

    this._buildUI()
    this._bindEvents()
  }

  // ── UI ──────────────────────────────────────────────────────
  _buildUI() {
    // Small palette panel on the right
    this.panel = document.createElement('div')
    this.panel.id = 'brush-panel'
    this.panel.style.cssText = `
      position:fixed; right:18px; top:50%; transform:translateY(-50%);
      width:190px; background:var(--white);
      border:3px solid var(--dark); border-radius:var(--r);
      box-shadow:var(--sh-lg); padding:14px;
      display:none; z-index:30; pointer-events:all;
      font-family:var(--font-body);
    `
    this.panel.innerHTML = `
      <div style="font-family:var(--font-graf);font-size:18px;letter-spacing:2px;
        text-align:center;margin-bottom:10px">🖌 BRUSH</div>

      <!-- Colour preview / native picker -->
      <div style="position:relative;margin-bottom:8px">
        <div id="bp-preview" style="height:38px;border:3px solid var(--dark);
          border-radius:var(--r-sm);box-shadow:var(--sh);cursor:pointer;
          background:${this.color}"></div>
        <input type="color" id="bp-picker" value="${this.color}"
          style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">
      </div>

      <!-- Swatches -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-bottom:9px">
        ${SWATCHES.map(c => `
          <div data-c="${c}" class="bp-sw" style="aspect-ratio:1;background:${c};
            border:2px solid var(--dark);border-radius:4px;cursor:pointer;
            box-shadow:1px 1px 0 var(--dark)"></div>
        `).join('')}
      </div>

      <!-- Eyedropper -->
      <button id="bp-eye" class="btn btn-sm btn-full" style="margin-bottom:8px">
        💧 Sample wall color
      </button>

      <!-- Brush size -->
      <div style="font-family:var(--font-graf);font-size:12px;letter-spacing:1px;
        color:var(--dark);margin-bottom:4px">BRUSH SIZE</div>
      <input type="range" id="bp-size" min="8" max="90" value="32" style="width:100%">

      <hr style="border:none;border-top:2px solid var(--surface2);margin:10px 0">
      <div style="font-family:var(--font-marker);font-size:12px;color:var(--grey);
        text-align:center">Click + drag on your character<br>to paint. [P] to exit.</div>
    `
    document.body.appendChild(this.panel)

    // Custom circular brush cursor
    this.cursor = document.createElement('div')
    this.cursor.style.cssText = `
      position:fixed; pointer-events:none; border-radius:50%;
      border:2px solid rgba(0,0,0,0.6);
      transform:translate(-50%,-50%);
      display:none; z-index:25; mix-blend-mode:multiply;
    `
    document.body.appendChild(this.cursor)

    this._refreshCursor()
    this._bindPanelEvents()
  }

  _bindPanelEvents() {
    const picker = this.panel.querySelector('#bp-picker')
    picker.addEventListener('input', e => this._setColor(e.target.value))
    // Clicking the preview div also opens the picker
    this.panel.querySelector('#bp-preview').addEventListener('click', () => picker.click())

    this.panel.querySelectorAll('.bp-sw').forEach(s =>
      s.addEventListener('click', () => this._setColor(s.dataset.c))
    )

    this.panel.querySelector('#bp-eye').addEventListener('click', () => {
      this.eyedropActive = !this.eyedropActive
      const btn = this.panel.querySelector('#bp-eye')
      btn.textContent = this.eyedropActive ? '❌ Cancel sample' : '💧 Sample wall color'
      btn.style.borderColor = this.eyedropActive ? 'var(--blue)' : ''
      this.cursor.style.borderStyle = this.eyedropActive ? 'dashed' : 'solid'
    })

    this.panel.querySelector('#bp-size').addEventListener('input', e => {
      this.brushRadius = parseInt(e.target.value)
      this._refreshCursor()
    })
  }

  _setColor(hex) {
    this.color = hex
    const preview = this.panel.querySelector('#bp-preview')
    if (preview) preview.style.background = hex
    const picker = this.panel.querySelector('#bp-picker')
    if (picker) picker.value = hex
    this._refreshCursor()
  }

  _refreshCursor() {
    // Screen-space cursor size ≈ texture radius scaled to ~0.4 screen px per texel
    const r = Math.max(8, this.brushRadius * 0.42)
    const d = r * 2
    this.cursor.style.width  = d + 'px'
    this.cursor.style.height = d + 'px'
    this.cursor.style.background = this.color + '40'
    this.cursor.style.borderColor = this.color
  }

  // ── Events ──────────────────────────────────────────────────
  _bindEvents() {
    this._onMove = e => {
      if (!this.active) return
      this.cursor.style.left = e.clientX + 'px'
      this.cursor.style.top  = e.clientY + 'px'
      if (this.painting && !this.eyedropActive) this._paint(e.clientX, e.clientY)
    }

    this._onDown = e => {
      if (!this.active || e.button !== 0) return
      if (this.eyedropActive) { this._eyedrop(e.clientX, e.clientY); return }
      this.painting = true
      this._paint(e.clientX, e.clientY)
    }

    this._onUp = e => {
      if (e.button !== 0) return
      if (this.painting) {
        this.painting = false
        // Sync approximate colours to Firebase after each stroke
        this.onPaintChange(this.myCharacter.getColors())
      }
    }

    document.addEventListener('mousemove', this._onMove)
    document.addEventListener('mousedown', this._onDown)
    document.addEventListener('mouseup',   this._onUp)
  }

  // ── Paint stroke ─────────────────────────────────────────────
  _paint(screenX, screenY) {
    const canvas = document.getElementById('game-canvas')
    if (!canvas) return
    const r   = canvas.getBoundingClientRect()
    const nx  = ((screenX - r.left) / r.width)  * 2 - 1
    const ny  = -((screenY - r.top)  / r.height) * 2 + 1

    this.raycaster.setFromCamera({ x: nx, y: ny }, this.camera)
    const hits = this.raycaster.intersectObjects(this.myCharacter.getMeshes(), false)
    if (!hits.length) return

    const hit = hits[0]
    if (!hit.uv) return
    this.myCharacter.paintAtUV(hit.object, hit.uv.x, hit.uv.y, this.color, this.brushRadius)
  }

  // ── Eyedropper ───────────────────────────────────────────────
  _eyedrop(screenX, screenY) {
    const canvas = document.getElementById('game-canvas')
    if (!canvas) return
    const r  = canvas.getBoundingClientRect()
    const nx = ((screenX - r.left) / r.width)  * 2 - 1
    const ny = -((screenY - r.top)  / r.height) * 2 + 1

    this.raycaster.setFromCamera({ x: nx, y: ny }, this.camera)

    const charSet = new Set(this.myCharacter.getMeshes())
    const targets = this.buildingMeshes.filter(m => !charSet.has(m))
    const hits    = this.raycaster.intersectObjects(targets, true)

    if (hits.length > 0) {
      const mat = hits[0].object.material
      if (mat?.color) this._setColor('#' + mat.color.getHexString())
    }

    this.eyedropActive = false
    const btn = this.panel.querySelector('#bp-eye')
    if (btn) { btn.textContent = '💧 Sample wall color'; btn.style.borderColor = '' }
    this.cursor.style.borderStyle = 'solid'
  }

  // ── Toggle ───────────────────────────────────────────────────
  toggle() {
    this.active = !this.active
    this.panel.style.display  = this.active ? 'block' : 'none'
    this.cursor.style.display = this.active ? 'block' : 'none'

    if (this.active) {
      // Release pointer lock so mouse cursor is free
      document.exitPointerLock?.()
    } else {
      this.painting      = false
      this.eyedropActive = false
      // Re-engage pointer lock for movement
      document.getElementById('game-canvas')?.requestPointerLock?.()
    }
  }

  isOpen() { return this.active }

  destroy() {
    document.removeEventListener('mousemove', this._onMove)
    document.removeEventListener('mousedown', this._onDown)
    document.removeEventListener('mouseup',   this._onUp)
    this.panel.remove()
    this.cursor.remove()
  }
}
