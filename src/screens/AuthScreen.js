import { login, register } from '../firebase/auth.js'
import { getUserProfile }  from '../firebase/db.js'

export class AuthScreen {
  constructor(container, onSuccess) {
    this.container = container
    this.onSuccess = onSuccess
    this.mode = 'login' // 'login' | 'register'
    this.render()
  }

  render() {
    this.el = document.createElement('div')
    this.el.className = 'screen'
    this.el.style.gap = '28px'
    this.el.innerHTML = `
      <div style="text-align:center;position:relative;z-index:1">
        <div class="game-title">PLAIN SIGHT</div>
        <div class="game-tagline">hide in plain sight — or find those who do</div>
      </div>

      <div class="card" style="width:min(380px,90vw);position:relative;z-index:1">
        <div class="tabs" style="margin-bottom:20px">
          <button class="tab ${this.mode==='login'?'active':''}" data-tab="login">LOG IN</button>
          <button class="tab ${this.mode==='register'?'active':''}" data-tab="register">SIGN UP</button>
        </div>

        <form id="auth-form" style="display:flex;flex-direction:column;gap:14px">
          ${this.mode === 'register' ? `
          <div class="field">
            <label class="label">USERNAME</label>
            <input class="input" type="text" id="displayName" placeholder="Your tag…" maxlength="20" required />
          </div>` : ''}

          <div class="field">
            <label class="label">EMAIL</label>
            <input class="input" type="email" id="email" placeholder="you@example.com" required />
          </div>

          <div class="field">
            <label class="label">PASSWORD</label>
            <input class="input" type="password" id="password" placeholder="••••••••" minlength="6" required />
          </div>

          <div class="error-msg" id="auth-error"></div>

          <button type="submit" class="btn btn-red btn-full" id="auth-submit">
            ${this.mode === 'login' ? 'LOG IN' : 'CREATE ACCOUNT'}
          </button>
        </form>
      </div>
    `
    this.container.appendChild(this.el)
    this.bind()
  }

  bind() {
    this.el.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.mode = tab.dataset.tab
        this.el.remove()
        this.render()
      })
    })

    const form = this.el.querySelector('#auth-form')
    const errEl = this.el.querySelector('#auth-error')

    form.addEventListener('submit', async e => {
      e.preventDefault()
      const btn = this.el.querySelector('#auth-submit')
      btn.disabled = true
      btn.textContent = '...'
      errEl.classList.remove('show')

      const email = this.el.querySelector('#email').value.trim()
      const pass  = this.el.querySelector('#password').value

      try {
        let user
        if (this.mode === 'login') {
          user = await login(email, pass)
        } else {
          const name = this.el.querySelector('#displayName').value.trim()
          if (!name) throw new Error('Username is required.')
          user = await register(email, pass, name)
        }
        const profile = await getUserProfile(user.uid)
        this.onSuccess(user, profile)
      } catch (err) {
        errEl.textContent = friendlyError(err.code || err.message)
        errEl.classList.add('show')
        btn.disabled = false
        btn.textContent = this.mode === 'login' ? 'LOG IN' : 'CREATE ACCOUNT'
      }
    })
  }

  destroy() { this.el?.remove() }
}

function friendlyError(code) {
  const map = {
    'auth/user-not-found':   'No account with that email.',
    'auth/wrong-password':   'Wrong password.',
    'auth/email-already-in-use': 'Email already in use.',
    'auth/weak-password':    'Password needs at least 6 characters.',
    'auth/invalid-email':    'Invalid email address.'
  }
  return map[code] || 'Something went wrong. Try again.'
}
