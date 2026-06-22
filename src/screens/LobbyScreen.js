import {
  createGame, findGameByCode, joinGame, leaveGame,
  watchGame, setPlayerReady, assignRoles, updateGameSettings
} from '../firebase/db.js'

export class LobbyScreen {
  constructor(container, user, profile, { onRole, onBack }) {
    this.container = container
    this.user      = user
    this.profile   = profile
    this.onRole    = onRole
    this.onBack    = onBack

    this.gameId    = null
    this.gameData  = null
    this.unwatch   = null
    this.view      = 'menu' // 'menu' | 'create' | 'join' | 'waiting'

    this.render()
  }

  render() {
    this.el = document.createElement('div')
    this.el.className = 'screen'
    this.el.style.gap = '20px'
    this.container.appendChild(this.el)
    this.showMenu()
  }

  clearContent() {
    this.el.innerHTML = ''
  }

  header(title) {
    return `
      <div style="text-align:center;position:relative;z-index:1">
        <div class="game-title" style="font-size:clamp(36px,6vw,64px)">${title}</div>
      </div>
    `
  }

  showMenu() {
    this.clearContent()
    this.el.innerHTML = `
      ${this.header('FIND A GAME')}
      <div class="card" style="width:min(360px,90vw);display:flex;flex-direction:column;gap:12px;position:relative;z-index:1">
        <button class="btn btn-red btn-full btn-lg" id="create-btn">CREATE LOBBY</button>
        <button class="btn btn-blue btn-full btn-lg" id="join-btn">JOIN LOBBY</button>
        <hr class="divider">
        <button class="btn btn-white btn-full" id="back-btn">← BACK</button>
      </div>
    `
    this.el.querySelector('#create-btn').addEventListener('click', () => this.showCreate())
    this.el.querySelector('#join-btn').addEventListener('click', () => this.showJoin())
    this.el.querySelector('#back-btn').addEventListener('click', () => this.onBack())
  }

  showCreate() {
    this.clearContent()
    this.el.innerHTML = `
      ${this.header('CREATE LOBBY')}
      <div class="card" style="width:min(400px,90vw);display:flex;flex-direction:column;gap:16px;position:relative;z-index:1">

        <div class="field">
          <label class="label">PREP TIME</label>
          <div style="display:flex;align-items:center;gap:12px">
            <input type="range" id="prep-time" min="60" max="300" step="30" value="120" style="flex:1">
            <span class="badge" id="prep-time-val">2 min</span>
          </div>
        </div>

        <div class="field">
          <label class="label">SEEKERS</label>
          <div style="display:flex;gap:8px" id="seeker-btns">
            ${[1,2,3].map(n=>`<button class="btn btn-sm ${n===1?'btn-red':''}" data-n="${n}">${n}</button>`).join('')}
          </div>
        </div>

        <div class="toggle-row">
          <label class="label" style="margin:0">SHADOWS</label>
          <label class="toggle">
            <input type="checkbox" id="shadows-toggle" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>

        <div class="toggle-row">
          <label class="label" style="margin:0">MAX PLAYERS (10)</label>
          <span style="font-family:var(--font-graf);font-size:20px">10</span>
        </div>

        <div class="error-msg" id="create-error"></div>

        <div style="display:flex;gap:10px">
          <button class="btn btn-white" id="back-btn2">←</button>
          <button class="btn btn-red btn-full" id="create-go">CREATE</button>
        </div>
      </div>
    `

    let seekerCount = 1
    const seekerBtns = this.el.querySelectorAll('#seeker-btns button')
    seekerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        seekerCount = parseInt(btn.dataset.n)
        seekerBtns.forEach(b => b.classList.remove('btn-red'))
        btn.classList.add('btn-red')
      })
    })

    const prepSlider = this.el.querySelector('#prep-time')
    const prepVal    = this.el.querySelector('#prep-time-val')
    prepSlider.addEventListener('input', () => {
      const s = parseInt(prepSlider.value)
      prepVal.textContent = s < 60 ? `${s}s` : `${s/60} min`
    })

    this.el.querySelector('#back-btn2').addEventListener('click', () => this.showMenu())

    this.el.querySelector('#create-go').addEventListener('click', async () => {
      const btn = this.el.querySelector('#create-go')
      const err = this.el.querySelector('#create-error')
      btn.disabled = true; btn.textContent = '...'
      err.classList.remove('show')
      try {
        const settings = {
          prepTime:      parseInt(prepSlider.value),
          seekerCount,
          shadowsEnabled: this.el.querySelector('#shadows-toggle').checked
        }
        const { gameId, code } = await createGame(
          this.user.uid, this.profile?.displayName || this.user.displayName, settings
        )
        this.gameId = gameId
        this.showWaiting(code, true)
      } catch (e) {
        err.textContent = 'Could not create lobby. Check Firebase config.'
        err.classList.add('show')
        btn.disabled = false; btn.textContent = 'CREATE'
      }
    })
  }

  showJoin() {
    this.clearContent()
    this.el.innerHTML = `
      ${this.header('JOIN LOBBY')}
      <div class="card" style="width:min(360px,90vw);display:flex;flex-direction:column;gap:14px;position:relative;z-index:1">
        <div class="field">
          <label class="label">LOBBY CODE</label>
          <input class="input" id="code-input" maxlength="6"
            placeholder="ABC123" style="text-transform:uppercase;font-size:28px;
            letter-spacing:6px;font-family:var(--font-graf);text-align:center">
        </div>
        <div class="error-msg" id="join-error"></div>
        <div style="display:flex;gap:10px">
          <button class="btn btn-white" id="back-btn3">←</button>
          <button class="btn btn-blue btn-full" id="join-go">JOIN</button>
        </div>
      </div>
    `
    this.el.querySelector('#code-input').addEventListener('input', e => {
      e.target.value = e.target.value.toUpperCase()
    })
    this.el.querySelector('#back-btn3').addEventListener('click', () => this.showMenu())
    this.el.querySelector('#join-go').addEventListener('click', async () => {
      const btn = this.el.querySelector('#join-go')
      const err = this.el.querySelector('#join-error')
      const code = this.el.querySelector('#code-input').value.trim()
      if (code.length < 6) { err.textContent='Enter a 6-character code'; err.classList.add('show'); return }
      btn.disabled = true; btn.textContent = '...'
      err.classList.remove('show')
      try {
        const gameId = await findGameByCode(code)
        if (!gameId) throw new Error('Lobby not found.')
        await joinGame(gameId, this.user.uid, this.profile?.displayName || this.user.displayName)
        this.gameId = gameId
        this.showWaiting(code, false)
      } catch (e) {
        err.textContent = e.message || 'Could not join. Try again.'
        err.classList.add('show')
        btn.disabled = false; btn.textContent = 'JOIN'
      }
    })
  }

  showWaiting(code, isHost) {
    this.clearContent()
    this.el.innerHTML = `
      ${this.header('LOBBY')}
      <div style="display:flex;flex-direction:column;gap:16px;width:min(500px,90vw);position:relative;z-index:1">
        <div class="card" style="text-align:center">
          <div style="font-family:var(--font-marker);font-size:16px;color:var(--grey);margin-bottom:8px">
            Share this code:
          </div>
          <div class="game-code">${code}</div>
        </div>

        <div class="card" style="display:flex;flex-direction:column;gap:8px">
          <div style="font-family:var(--font-graf);font-size:20px;letter-spacing:1px;margin-bottom:4px">
            PLAYERS <span id="player-count" class="badge">0/10</span>
          </div>
          <div id="player-list" style="display:flex;flex-direction:column;gap:6px">
            <div class="loader" style="margin:10px auto"></div>
          </div>
        </div>

        <div style="display:flex;gap:10px">
          <button class="btn btn-white" id="leave-btn">LEAVE</button>
          ${isHost
            ? '<button class="btn btn-red btn-full" id="start-btn" disabled>START GAME</button>'
            : '<button class="btn btn-blue btn-full" id="ready-btn">READY UP</button>'
          }
        </div>

        <div class="error-msg" id="wait-error"></div>
      </div>
    `

    this.el.querySelector('#leave-btn').addEventListener('click', async () => {
      this.unwatch?.()
      await leaveGame(this.gameId, this.user.uid).catch(() => {})
      this.gameId = null
      this.showMenu()
    })

    if (!isHost) {
      let ready = false
      const readyBtn = this.el.querySelector('#ready-btn')
      readyBtn.addEventListener('click', async () => {
        ready = !ready
        readyBtn.textContent = ready ? '✓ READY' : 'READY UP'
        readyBtn.className = ready ? 'btn btn-yellow btn-full' : 'btn btn-blue btn-full'
        await setPlayerReady(this.gameId, this.user.uid, ready)
      })
    }

    if (isHost) {
      const startBtn = this.el.querySelector('#start-btn')
      startBtn.addEventListener('click', () => this.hostStart())
    }

    this.unwatch = watchGame(this.gameId, data => {
      if (!data) return
      this.gameData = data
      this.updateWaitingUI(data, isHost)

      // If host already started, react
      if (data.status === 'prep' && data.players?.[this.user.uid]?.role) {
        this.unwatch?.()
        this.onRole(this.gameId, { ...data, gameId: this.gameId })
      }
    })
  }

  updateWaitingUI(data, isHost) {
    const players = Object.entries(data.players || {})
    const count   = players.length

    const countEl = this.el.querySelector('#player-count')
    if (countEl) countEl.textContent = `${count}/10`

    const listEl = this.el.querySelector('#player-list')
    if (listEl) {
      listEl.innerHTML = players.map(([uid, p]) => `
        <div class="player-item">
          <div class="player-dot ${p.isReady || uid === data.hostId ? 'ready' : ''}"></div>
          <span style="flex:1">${p.displayName || 'Player'}</span>
          ${uid === data.hostId ? '<span class="badge" style="background:var(--red);color:var(--white)">HOST</span>' : ''}
          ${p.isReady ? '<span class="badge">READY</span>' : ''}
        </div>
      `).join('')
    }

    if (isHost) {
      const startBtn = this.el.querySelector('#start-btn')
      if (startBtn) {
        const allReady = players.every(([uid, p]) => uid === data.hostId || p.isReady)
        const enough   = count >= 2
        startBtn.disabled = !(allReady && enough)
        startBtn.title = !enough ? 'Need at least 2 players' : !allReady ? 'Wait for everyone to ready up' : ''
      }
    }
  }

  async hostStart() {
    const errEl = this.el.querySelector('#wait-error')
    errEl?.classList.remove('show')
    try {
      const players = Object.keys(this.gameData.players || {})
      const seekerCount = this.gameData.settings?.seekerCount ?? 1
      const shuffled = [...players].sort(() => Math.random() - 0.5)
      const roles = {}
      shuffled.forEach((uid, i) => { roles[uid] = i < seekerCount ? 'seeker' : 'hider' })
      await assignRoles(this.gameId, roles)
    } catch (e) {
      if (errEl) { errEl.textContent = 'Could not start game.'; errEl.classList.add('show') }
    }
  }

  destroy() {
    this.unwatch?.()
    this.el?.remove()
  }
}
