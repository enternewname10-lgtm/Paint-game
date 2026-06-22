import { onAuthChange } from './firebase/auth.js'
import { AuthScreen }  from './screens/AuthScreen.js'
import { HomeScreen }  from './screens/HomeScreen.js'
import { LobbyScreen } from './screens/LobbyScreen.js'
import { RoleScreen }  from './screens/RoleScreen.js'
import { GameScene }   from './game/GameScene.js'

// ── App state ────────────────────────────────────────────────
export const state = {
  user: null,
  profile: null,
  gameId: null,
  gameData: null
}

let currentScreen = null
let currentGame = null
const app = document.getElementById('app')
const canvas = document.getElementById('game-canvas')

// ── Screen management ────────────────────────────────────────
function clearScreen() {
  if (currentScreen) { currentScreen.destroy?.(); currentScreen = null }
  app.innerHTML = ''
  canvas.style.display = 'none'
}

export function goTo(screenName, extra = {}) {
  clearScreen()

  switch (screenName) {
    case 'auth':
      currentScreen = new AuthScreen(app, (user, profile) => {
        state.user = user
        state.profile = profile
        goTo('home')
      })
      break

    case 'home':
      currentScreen = new HomeScreen(app, state.user, state.profile, {
        onPlay:   () => goTo('lobby'),
        onLogout: () => goTo('auth')
      })
      break

    case 'lobby':
      currentScreen = new LobbyScreen(app, state.user, state.profile, {
        onRole: (gameId, gameData) => {
          state.gameId  = gameId
          state.gameData = gameData
          goTo('role')
        },
        onBack: () => goTo('home')
      })
      break

    case 'role':
      currentScreen = new RoleScreen(app, state.gameData, state.user.uid, {
        onStartGame: () => goTo('game')
      })
      break

    case 'game':
      canvas.style.display = 'block'
      currentGame = new GameScene(canvas, state.gameData, state.gameId, state.user.uid, state.profile, {
        onGameOver: (winner) => {
          if (currentGame) { currentGame.destroy(); currentGame = null }
          goTo('gameover', { winner })
        }
      })
      break

    case 'gameover':
      currentGame?.destroy()
      currentGame = null
      canvas.style.display = 'none'
      showGameOver(extra.winner, extra.myRole)
      break
  }
}

function showGameOver(winner, myRole) {
  const el = document.createElement('div')
  el.className = 'screen'
  el.style.gap = '20px'
  el.innerHTML = `
    <div class="gameover-title ${winner}" style="position:relative;z-index:1">
      ${winner === 'hiders' ? 'HIDERS WIN' : 'SEEKERS WIN'}
    </div>
    <p style="font-family:var(--font-marker);font-size:22px;color:var(--grey);position:relative;z-index:1">
      ${winner === 'hiders' ? 'They vanished into plain sight.' : 'No one can hide forever.'}
    </p>
    <button class="btn btn-red btn-lg" id="go-home">Back to Home</button>
  `
  app.appendChild(el)
  currentScreen = { destroy: () => el.remove() }
  el.querySelector('#go-home').addEventListener('click', () => goTo('home'))
}

// ── Boot ─────────────────────────────────────────────────────

// Show a loading indicator immediately so the screen is never black
const loadingEl = document.createElement('div')
loadingEl.className = 'screen'
loadingEl.id = 'loading-screen'
loadingEl.innerHTML = `
  <div style="text-align:center;position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:20px">
    <div class="game-title">PLAIN SIGHT</div>
    <div class="loader"></div>
    <div style="font-family:var(--font-marker);color:var(--grey);font-size:16px" id="load-msg">
      Connecting…
    </div>
  </div>
`
app.appendChild(loadingEl)
app.style.pointerEvents = 'all'

function removeLoader() {
  loadingEl.remove()
}

// Fallback: if Firebase doesn't respond in 4 seconds, show auth anyway
const fallback = setTimeout(() => {
  removeLoader()
  showConfigWarning()
  goTo('auth')
}, 4000)

try {
  onAuthChange(user => {
    clearTimeout(fallback)
    removeLoader()
    state.user = user
    if (user) {
      goTo('home')
    } else {
      goTo('auth')
    }
  })
} catch (err) {
  clearTimeout(fallback)
  removeLoader()
  showConfigWarning()
  goTo('auth')
}

function showConfigWarning() {
  const banner = document.createElement('div')
  banner.style.cssText = `
    position:fixed;bottom:16px;left:50%;transform:translateX(-50%);
    background:#241c0e;color:#f4ede0;
    font-family:'Rubik',sans-serif;font-size:13px;
    padding:10px 20px;border-radius:8px;border:2px solid #b52b1e;
    z-index:999;max-width:90vw;text-align:center;
    box-shadow:4px 4px 0 #b52b1e;
  `
  banner.innerHTML = `
    ⚠️ Firebase not configured — fill in <strong>src/firebase/config.js</strong> to enable auth &amp; multiplayer.
    <button onclick="this.parentElement.remove()" style="margin-left:12px;background:none;border:none;color:#c9940a;cursor:pointer;font-size:13px">✕</button>
  `
  document.body.appendChild(banner)
}
