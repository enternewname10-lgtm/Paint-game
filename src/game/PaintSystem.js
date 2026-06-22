import * as THREE from 'three'

// Preset swatches — muted, real-world palette (no neon)
export const SWATCHES = [
  '#f4ede0', // worn white
  '#e0d4b8', // beige
  '#c0956b', // wood
  '#8b6040', // dark wood
  '#b52b1e', // deep red
  '#7a1a1a', // dark red
  '#1a4f8a', // deep blue
  '#2a6a9a', // mid blue
  '#c9940a', // golden yellow
  '#808070', // warm grey
  '#505040', // dark grey
  '#2c1c0c', // near black
  '#c8b090', // sand
  '#9a7a5a', // tan
  '#4a7a4a', // olive green
  '#7a5a8a', // muted purple
  '#d8b080', // pale gold
  '#a04030', // rust
]

export class PaintSystem {
  constructor(scene, camera, myCharacter, buildingMeshes, onPaintChange) {
    this.scene         = scene
    this.camera        = camera
    this.myCharacter   = myCharacter
    this.buildingMeshes = buildingMeshes
    this.onPaintChange = onPaintChange  // (paintColors) => void

    this.currentColor = '#808080'
    this.selectedPart = 'all'
    this.eyedropActive = false

    this._buildUI()
    this._bindEyedrop()
  }

  _buildUI() {
    this.pad = document.getElementById('paint-pad')
    if (!this.pad) {
      this.pad = document.createElement('div')
      this.pad.id = 'paint-pad'
      document.body.appendChild(this.pad)
    }

    this.pad.innerHTML = `
      <div class="paint-pad-title">🎨 PAINT PAD</div>

      <!-- Color preview + native picker -->
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:10px">
        <div class="paint-color-preview" id="pp-preview"
          style="flex:1;background:${this.currentColor}"></div>
        <label title="Custom color" style="cursor:pointer">
          <div class="btn btn-sm" style="padding:8px">🖊</div>
          <input type="color" id="pp-picker" value="${this.currentColor}"
            style="position:absolute;opacity:0;pointer-events:none;width:0;height:0">
        </label>
      </div>

      <!-- Eyedropper -->
      <button class="btn btn-sm btn-full" id="pp-eye" style="margin-bottom:10px">
        💧 Sample Color
      </button>

      <!-- Swatches -->
      <div class="paint-swatches" id="pp-swatches">
        ${SWATCHES.map(c => `
          <div class="swatch" style="background:${c}" data-color="${c}" title="${c}"></div>
        `).join('')}
      </div>

      <!-- Part selector -->
      <div class="paint-part-label">PAINT PART</div>
      <div class="paint-parts" id="pp-parts">
        ${['all','head','torso','leftArm','rightArm','leftLeg','rightLeg'].map(p => `
          <button class="part-btn ${p==='all'?'active':''}" data-part="${p}">
            ${p === 'all' ? 'ALL' : p.replace(/([A-Z])/g, ' $1').toUpperCase()}
          </button>
        `).join('')}
      </div>

      <!-- Apply -->
      <button class="btn btn-red btn-full" id="pp-apply" style="margin-top:10px">APPLY</button>
      <button class="btn btn-sm btn-full" id="pp-close" style="margin-top:6px;background:transparent;box-shadow:none;border-color:var(--grey);color:var(--grey)">CLOSE  [P]</button>
    `

    // Picker change
    const picker = this.pad.querySelector('#pp-picker')
    picker.addEventListener('input', e => this._setColor(e.target.value))
    picker.parentElement.addEventListener('click', () => picker.click())

    // Swatches
    this.pad.querySelector('#pp-swatches').addEventListener('click', e => {
      const sw = e.target.closest('[data-color]')
      if (sw) this._setColor(sw.dataset.color)
    })

    // Part selector
    this.pad.querySelector('#pp-parts').addEventListener('click', e => {
      const btn = e.target.closest('[data-part]')
      if (!btn) return
      this.selectedPart = btn.dataset.part
      this.pad.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
    })

    // Apply
    this.pad.querySelector('#pp-apply').addEventListener('click', () => {
      this.applyPaint()
    })

    // Eyedropper
    this.pad.querySelector('#pp-eye').addEventListener('click', () => {
      this.eyedropActive = !this.eyedropActive
      const btn = this.pad.querySelector('#pp-eye')
      btn.textContent = this.eyedropActive ? '❌ Cancel Sample' : '💧 Sample Color'
      btn.style.borderColor = this.eyedropActive ? 'var(--blue)' : ''
      document.body.style.cursor = this.eyedropActive ? 'crosshair' : ''
    })

    // Close
    this.pad.querySelector('#pp-close').addEventListener('click', () => this.toggle())
  }

  _bindEyedrop() {
    this._onCanvasClick = e => {
      if (!this.eyedropActive) return
      if (!this.pad.classList.contains('show')) return

      // Raycast from mouse into scene
      const canvas = document.getElementById('game-canvas')
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const nx = ((e.clientX - rect.left) / rect.width)  * 2 - 1
      const ny = -((e.clientY - rect.top)  / rect.height) * 2 + 1

      const raycaster = new THREE.Raycaster()
      raycaster.setFromCamera({ x: nx, y: ny }, this.camera)

      // Don't pick own character
      const targets = this.buildingMeshes.filter(m => {
        let isMe = false
        this.myCharacter.group.traverse(c => { if (c === m) isMe = true })
        return !isMe
      })

      const hits = raycaster.intersectObjects(targets, true)
      if (hits.length > 0) {
        const obj = hits[0].object
        if (obj.material?.color) {
          const hex = '#' + obj.material.color.getHexString()
          this._setColor(hex)
        }
      }

      this.eyedropActive = false
      const btn = this.pad.querySelector('#pp-eye')
      if (btn) { btn.textContent = '💧 Sample Color'; btn.style.borderColor = '' }
      document.body.style.cursor = ''
    }
    document.addEventListener('click', this._onCanvasClick)
  }

  _setColor(hex) {
    this.currentColor = hex
    const preview = this.pad.querySelector('#pp-preview')
    if (preview) preview.style.background = hex
    const picker  = this.pad.querySelector('#pp-picker')
    if (picker)  picker.value = hex

    // Highlight matching swatch
    this.pad.querySelectorAll('.swatch').forEach(s => {
      s.classList.toggle('selected', s.dataset.color === hex)
    })
  }

  applyPaint() {
    this.myCharacter.setPaint(this.selectedPart, this.currentColor)
    // Fire callback so GameScene can sync to Firebase
    this.onPaintChange({ ...this.myCharacter.colors })
  }

  toggle() {
    this.pad.classList.toggle('show')
    if (!this.pad.classList.contains('show')) {
      this.eyedropActive = false
      document.body.style.cursor = ''
    }
  }

  isOpen() {
    return this.pad.classList.contains('show')
  }

  destroy() {
    document.removeEventListener('click', this._onCanvasClick)
    this.pad.classList.remove('show')
  }
}
