export class HUD {
  constructor(myRole, prepTime, onPoseChange, onTogglePaint) {
    this.myRole       = myRole
    this.prepTime     = prepTime
    this.onPoseChange = onPoseChange
    this.onTogglePaint = onTogglePaint
    this.currentPose  = 'stand'
    this.eliminated   = false

    // Timer state
    this.timeLeft  = prepTime   // during prep phase
    this.inPrep    = true       // switches to game timer later
    this.gameTimeLeft = 0

    this._build()
    this._bindKeys()
  }

  _build() {
    this.hud = document.getElementById('hud')
    if (!this.hud) {
      this.hud = document.createElement('div')
      this.hud.id = 'hud'
      document.body.appendChild(this.hud)
    }

    this.hud.innerHTML = `
      <!-- Role badge -->
      <div class="hud-role ${this.myRole}">
        ${this.myRole === 'seeker' ? '👁 SEEKER' : '🎨 HIDER'}
      </div>

      <!-- Timer -->
      <div class="hud-timer" id="hud-timer">
        ${this._fmtTime(this.timeLeft)}
      </div>

      <!-- Crosshair (seekers only) -->
      ${this.myRole === 'seeker' ? '<div class="hud-crosshair"></div>' : ''}

      <!-- Pose bar (hiders only) -->
      ${this.myRole === 'hider' ? `
        <div class="hud-pose-bar">
          <button class="pose-btn active" data-pose="stand">STAND [1]</button>
          <button class="pose-btn"        data-pose="crouch">CROUCH [2]</button>
          <button class="pose-btn"        data-pose="prone">PRONE [3]</button>
        </div>
        <div class="hud-paint-btn">
          <button class="btn btn-blue" id="hud-paint-open">🎨 PAINT [P]</button>
        </div>
      ` : ''}

      <!-- Ammo indicator (seekers) -->
      ${this.myRole === 'seeker' ? `
        <div class="hud-ammo">🔴 CLICK TO SHOOT</div>
      ` : ''}

      <!-- Prep phase banner -->
      <div id="hud-prep-banner" style="position:absolute;bottom:90px;left:50%;transform:translateX(-50%);
        font-family:var(--font-graf);font-size:22px;letter-spacing:2px;
        background:var(--dark);color:var(--white);padding:8px 20px;
        border:3px solid var(--dark);border-radius:var(--r);box-shadow:var(--sh);">
        ${this.myRole === 'hider' ? '🎨 PREP PHASE — PAINT & HIDE!' : '⏳ SEEKERS WAIT…'}
      </div>
    `

    this.hud.classList.add('show')

    // Pose buttons
    this.hud.querySelectorAll('.pose-btn').forEach(btn => {
      btn.addEventListener('click', () => this._setPose(btn.dataset.pose))
    })

    // Paint pad toggle
    const paintBtn = this.hud.querySelector('#hud-paint-open')
    paintBtn?.addEventListener('click', () => this.onTogglePaint?.())
  }

  _bindKeys() {
    this._onKey = e => {
      switch (e.code) {
        case 'Digit1': this._setPose('stand');  break
        case 'Digit2': this._setPose('crouch'); break
        case 'Digit3': this._setPose('prone');  break
        case 'KeyP':
          if (this.myRole === 'hider') this.onTogglePaint?.()
          break
      }
    }
    document.addEventListener('keydown', this._onKey)
  }

  _setPose(pose) {
    this.currentPose = pose
    this.onPoseChange?.(pose)
    this.hud.querySelectorAll('.pose-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.pose === pose)
    })
  }

  _fmtTime(s) {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  // Called every frame with delta
  update(delta) {
    if (this.eliminated || this.timeLeft <= 0) return

    if (this.inPrep) {
      this.timeLeft -= delta
      if (this.timeLeft <= 0) {
        this.timeLeft = 0
        this.onPrepEnd?.()
      }
    } else {
      this.timeLeft -= delta
      if (this.timeLeft <= 0) {
        this.timeLeft = 0
        this.onTimeOut?.()
      }
    }

    const timerEl = this.hud.querySelector('#hud-timer')
    if (timerEl) {
      timerEl.textContent = this._fmtTime(Math.max(0, this.timeLeft))
      timerEl.classList.toggle('urgent', this.timeLeft < 30)
    }
  }

  startGamePhase(gameTimeSecs = 300) {
    this.inPrep    = false
    this.timeLeft  = gameTimeSecs

    // Hide prep banner
    const banner = this.hud.querySelector('#hud-prep-banner')
    if (banner) banner.style.display = 'none'

    // Enable shooting for seeker
    if (this.myRole === 'seeker') {
      const roleEl = this.hud.querySelector('.hud-role')
      if (roleEl) roleEl.style.borderColor = 'var(--red)'
    }
  }

  showEliminated() {
    if (this.eliminated) return
    this.eliminated = true
    const el = document.createElement('div')
    el.className = 'hud-eliminated'
    el.textContent = 'TAGGED!'
    this.hud.appendChild(el)

    // Disable pose bar and paint
    this.hud.querySelectorAll('.pose-btn, #hud-paint-open').forEach(b => b.disabled = true)
  }

  showHiderCaught(name) {
    const el = document.createElement('div')
    el.style.cssText = `
      position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);
      font-family:var(--font-graf);font-size:32px;letter-spacing:2px;
      background:var(--red);color:var(--white);padding:10px 24px;
      border:3px solid var(--dark);border-radius:var(--r);box-shadow:var(--sh);
      animation:elim-flash 2s ease-out forwards;pointer-events:none
    `
    el.textContent = `${name} TAGGED!`
    this.hud.appendChild(el)
    setTimeout(() => el.remove(), 2000)
  }

  destroy() {
    document.removeEventListener('keydown', this._onKey)
    this.hud.classList.remove('show')
    this.hud.innerHTML = ''
  }
}
