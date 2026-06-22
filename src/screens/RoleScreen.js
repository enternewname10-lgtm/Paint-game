export class RoleScreen {
  constructor(container, gameData, myUid, { onStartGame }) {
    this.container   = container
    this.gameData    = gameData
    this.myUid       = myUid
    this.onStartGame = onStartGame
    this.timer       = null
    this.render()
  }

  render() {
    const myRole = this.gameData?.players?.[this.myUid]?.role ?? 'hider'
    const isSeeker = myRole === 'seeker'
    const prepTime = this.gameData?.settings?.prepTime ?? 120
    const mins = Math.floor(prepTime / 60)
    const secs = prepTime % 60

    this.el = document.createElement('div')
    this.el.className = 'screen'
    this.el.style.gap = '12px'
    this.el.innerHTML = `
      <div class="role-reveal" style="z-index:1">
        <div class="role-reveal-title">YOU ARE A</div>
        <div class="role-word ${myRole}">${myRole.toUpperCase()}</div>
        <div class="role-desc">
          ${isSeeker
            ? `Wait ${mins > 0 ? mins + ' min' : ''} ${secs > 0 ? secs + 's' : ''} — then hunt them down.`
            : `You have ${mins > 0 ? mins + ' min' : ''} ${secs > 0 ? secs + 's' : ''} to blend in. Paint yourself. Hide.`
          }
        </div>
        <div class="role-countdown" id="role-cd">
          ${isSeeker ? 'STANDBY' : 'STARTING IN'}
        </div>
        <div style="font-family:var(--font-graf);font-size:72px;
          color:var(--dark);text-shadow:3px 3px 0 ${isSeeker?'var(--red)':'var(--blue)'};"
          id="cd-num">5</div>
      </div>
    `
    this.container.appendChild(this.el)
    this.startCountdown()
  }

  startCountdown() {
    let count = 5
    const numEl = this.el.querySelector('#cd-num')
    this.timer = setInterval(() => {
      count--
      if (numEl) numEl.textContent = count > 0 ? count : 'GO!'
      if (count <= 0) {
        clearInterval(this.timer)
        setTimeout(() => this.onStartGame(), 400)
      }
    }, 1000)
  }

  destroy() {
    clearInterval(this.timer)
    this.el?.remove()
  }
}
