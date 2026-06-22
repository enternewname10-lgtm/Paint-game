import { logout } from '../firebase/auth.js'
import { getUserProfile, spendCurrency, updateEquippedSkin, addOwnedSkin } from '../firebase/db.js'

const WEAPON_SKINS = [
  { id: 'default',   name: 'Stock Can',    price: 0,    color: '#7a7060' },
  { id: 'rusted',    name: 'Rusty Pipe',   price: 50,   color: '#8B4513' },
  { id: 'cobalt',    name: 'Cobalt Tag',   price: 100,  color: '#1a4f8a' },
  { id: 'crimson',   name: 'Crimson Mist', price: 150,  color: '#b52b1e' },
  { id: 'golden',    name: 'Golden Coat',  price: 250,  color: '#c9940a' },
  { id: 'bone',      name: 'Bone Dry',     price: 200,  color: '#d8ccb0' }
]

export class HomeScreen {
  constructor(container, user, profile, { onPlay, onLogout }) {
    this.container = container
    this.user = user
    this.profile = profile
    this.onPlay = onPlay
    this.onLogout = onLogout
    this.tab = 'home' // 'home' | 'stats' | 'shop'
    this.render()
    this.loadProfile()
  }

  async loadProfile() {
    try {
      this.profile = await getUserProfile(this.user.uid)
      this.refreshProfileArea()
    } catch (_) {}
  }

  refreshProfileArea() {
    if (!this.profile) return
    const s = this.profile.stats
    const el = this.el.querySelector('#profile-area')
    if (!el) return
    el.innerHTML = this.profileHTML()
  }

  profileHTML() {
    const s = this.profile?.stats || {}
    return `
      <div style="display:flex;align-items:center;gap:14px">
        <div style="width:52px;height:52px;border-radius:50%;background:var(--red);
          border:3px solid var(--dark);display:flex;align-items:center;justify-content:center;
          font-family:var(--font-graf);font-size:22px;color:var(--white);
          box-shadow:var(--sh)">
          ${(this.profile?.displayName || this.user.displayName || '?')[0].toUpperCase()}
        </div>
        <div>
          <div style="font-family:var(--font-graf);font-size:22px;letter-spacing:1px">
            ${this.profile?.displayName || this.user.displayName || 'Player'}
          </div>
          <div class="currency-bar" style="margin-top:4px;display:inline-flex">
            🥫 ${this.profile?.currency ?? 0} Cans
          </div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:16px">
        <div class="stat-box"><div class="stat-num">${s.gamesPlayed ?? 0}</div><div class="stat-label">Played</div></div>
        <div class="stat-box"><div class="stat-num" style="color:var(--blue)">${s.hiderWins ?? 0}</div><div class="stat-label">Hider Wins</div></div>
        <div class="stat-box"><div class="stat-num" style="color:var(--red)">${s.seekerWins ?? 0}</div><div class="stat-label">Seeker Wins</div></div>
        <div class="stat-box"><div class="stat-num" style="color:var(--grey)">${s.timesEliminated ?? 0}</div><div class="stat-label">Eliminated</div></div>
      </div>
    `
  }

  shopHTML() {
    const owned    = this.profile?.weaponSkins  || ['default']
    const equipped = this.profile?.equippedSkin || 'default'
    return WEAPON_SKINS.map(skin => {
      const isOwned    = owned.includes(skin.id)
      const isEquipped = equipped === skin.id
      return `
        <div class="shop-item ${isOwned ? 'owned' : ''} ${isEquipped ? 'equipped' : ''}"
             data-skin="${skin.id}" data-price="${skin.price}">
          <div style="width:48px;height:48px;border-radius:50%;
            background:${skin.color};border:2px solid var(--dark);
            margin:0 auto;box-shadow:2px 2px 0 var(--dark)"></div>
          <div class="shop-item-name">${skin.name}</div>
          <div class="shop-item-price">
            ${isEquipped ? '✓ Equipped' : isOwned ? 'Owned' : `🥫 ${skin.price}`}
          </div>
        </div>
      `
    }).join('')
  }

  render() {
    this.el = document.createElement('div')
    this.el.className = 'screen'
    this.el.style.cssText = 'align-items:stretch;justify-content:flex-start;'
    this.el.innerHTML = `
      <!-- Nav bar -->
      <div style="background:var(--dark);padding:12px 24px;display:flex;
        align-items:center;justify-content:space-between;position:relative;z-index:1;
        border-bottom:3px solid var(--red);flex-shrink:0">
        <div class="game-title" style="font-size:clamp(28px,4vw,48px);
          text-shadow:2px 2px 0 var(--red),4px 4px 0 var(--blue);color:var(--white)">
          PLAIN SIGHT
        </div>
        <button class="btn btn-sm" id="logout-btn" style="background:transparent;
          color:var(--grey);border-color:var(--grey);box-shadow:none">
          LOG OUT
        </button>
      </div>

      <!-- Content area -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;
        align-items:center;padding:28px 16px;gap:20px;position:relative;z-index:1">

        <!-- Profile card -->
        <div class="card" style="width:min(540px,100%)" id="profile-area">
          ${this.profileHTML()}
        </div>

        <!-- Main actions -->
        <div style="display:flex;flex-direction:column;gap:12px;width:min(540px,100%)">
          <button class="btn btn-red btn-lg btn-full" id="play-btn">▶ PLAY</button>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <button class="btn btn-blue btn-full" id="shop-btn">🥫 SHOP</button>
            <button class="btn btn-white btn-full" id="stats-btn">📊 STATS</button>
          </div>
        </div>

        <!-- Shop panel (hidden by default) -->
        <div class="card" style="width:min(540px,100%);display:none" id="shop-panel">
          <div style="font-family:var(--font-graf);font-size:26px;
            letter-spacing:2px;margin-bottom:16px">WEAPON SKINS</div>
          <p style="font-size:13px;color:var(--grey);margin-bottom:14px">
            Earn Cans by playing. Buy skins to customize your paint gun.
          </p>
          <div class="shop-grid" id="shop-grid">${this.shopHTML()}</div>
          <div class="error-msg" id="shop-error" style="margin-top:10px"></div>
        </div>
      </div>
    `
    this.container.appendChild(this.el)
    this.bind()
  }

  bind() {
    this.el.querySelector('#logout-btn').addEventListener('click', async () => {
      await logout()
      this.onLogout()
    })

    this.el.querySelector('#play-btn').addEventListener('click', () => this.onPlay())

    const shopPanel = this.el.querySelector('#shop-panel')
    this.el.querySelector('#shop-btn').addEventListener('click', () => {
      shopPanel.style.display = shopPanel.style.display === 'none' ? 'block' : 'none'
    })

    this.el.querySelector('#stats-btn').addEventListener('click', () => {
      this.loadProfile()
    })

    this.el.querySelector('#shop-grid').addEventListener('click', async e => {
      const item = e.target.closest('[data-skin]')
      if (!item) return
      const skinId = item.dataset.skin
      const price  = parseInt(item.dataset.price)
      const skin   = WEAPON_SKINS.find(s => s.id === skinId)
      const owned  = this.profile?.weaponSkins || ['default']
      const errEl  = this.el.querySelector('#shop-error')
      errEl.classList.remove('show')

      if (owned.includes(skinId)) {
        // Equip it
        try {
          await updateEquippedSkin(this.user.uid, skinId)
          this.profile.equippedSkin = skinId
          this.el.querySelector('#shop-grid').innerHTML = this.shopHTML()
        } catch (_) {}
        return
      }

      if ((this.profile?.currency ?? 0) < price) {
        errEl.textContent = `Not enough Cans! You need ${price}.`
        errEl.classList.add('show')
        return
      }

      try {
        await spendCurrency(this.user.uid, price)
        await addOwnedSkin(this.user.uid, skinId)
        await updateEquippedSkin(this.user.uid, skinId)
        this.profile.currency -= price
        this.profile.weaponSkins = [...owned, skinId]
        this.profile.equippedSkin = skinId
        this.el.querySelector('#shop-grid').innerHTML = this.shopHTML()
        this.refreshProfileArea()
      } catch (err) {
        errEl.textContent = 'Purchase failed. Try again.'
        errEl.classList.add('show')
      }
    })
  }

  destroy() { this.el?.remove() }
}
