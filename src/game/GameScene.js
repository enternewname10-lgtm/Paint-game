import * as THREE from 'three'
import { Building }         from './Building.js'
import { Character }        from './Character.js'
import { PlayerController } from './PlayerController.js'
import { PaintSystem }      from './PaintSystem.js'
import { GunSystem }        from './GunSystem.js'
import { MultiplayerSync }  from './MultiplayerSync.js'
import { HUD }              from './HUD.js'
import { incrementStats, endGame } from '../firebase/db.js'

const GAME_DURATION = 300  // 5 minutes of active hunting after prep

export class GameScene {
  constructor(canvas, gameData, gameId, myUid, profile, { onGameOver }) {
    this.canvas      = canvas
    this.gameData    = gameData
    this.gameId      = gameId
    this.myUid       = myUid
    this.profile     = profile
    this.onGameOver  = onGameOver

    this.myRole   = gameData.players?.[myUid]?.role ?? 'hider'
    this.isHost   = gameData.hostId === myUid
    this.prepTime = gameData.settings?.prepTime ?? 120
    this.shadows  = gameData.settings?.shadowsEnabled !== false

    this._frameId    = null
    this._gameEnded  = false
    this._prepDone   = false

    this._init()
  }

  _init() {
    // ── Renderer ──────────────────────────────────────────
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = this.shadows
    this.renderer.shadowMap.type    = THREE.PCFSoftShadowMap
    this.renderer.setClearColor(0x9ab8c8)  // soft sky

    // ── Scene ─────────────────────────────────────────────
    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.Fog(0xc8b89a, 25, 70)

    // ── Camera ────────────────────────────────────────────
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 200)
    this.camera.position.set(0, 3, 6)

    // ── Lighting ──────────────────────────────────────────
    this._setupLighting()

    // ── Building ──────────────────────────────────────────
    this.building = new Building(this.scene)

    // ── My character ──────────────────────────────────────
    const myData = this.gameData.players?.[this.myUid]
    this.myChar  = new Character(myData?.paintColors || {}, true)
    this.myChar.group.position.set(1, 0, 1)
    this.scene.add(this.myChar.group)

    // ── Player controller ─────────────────────────────────
    this.controller = new PlayerController(
      this.myChar, this.camera, this.building.wallBoxes, this.canvas
    )
    // Block movement for seeker during prep
    if (this.myRole === 'seeker') this.controller.paused = true

    // ── Gun system (seekers) ──────────────────────────────
    this.gunSystem = null
    if (this.myRole === 'seeker') {
      this.gunSystem = new GunSystem(this.scene, this.camera, uid => this._onHitHider(uid))
    }

    // ── Multiplayer sync ──────────────────────────────────
    this.sync = new MultiplayerSync(
      this.gameId, this.myUid, this.myRole,
      this.scene, this.gunSystem,
      data => this._onGameStateChange(data)
    )
    this.sync.myChar       = this.myChar
    this.sync.myController = this.controller

    // ── Paint system (hiders) ─────────────────────────────
    this.paintSystem = null
    if (this.myRole === 'hider') {
      this.paintSystem = new PaintSystem(
        this.scene, this.camera, this.myChar,
        this.building.getRaycastTargets(),
        colors => this.sync.syncPaint(colors)
      )
    }

    // ── HUD ───────────────────────────────────────────────
    this.hud = new HUD(
      this.myRole,
      this.prepTime,
      pose => { this.controller.setPose(pose); this.sync.syncPose(pose) },
      () => this.paintSystem?.toggle()
    )

    // Prep end callback
    this.hud.onPrepEnd = () => this._onPrepEnd()
    this.hud.onTimeOut = () => this._endGame('hiders')  // time ran out → hiders win

    // ── Resize ────────────────────────────────────────────
    this._onResize = () => {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', this._onResize)

    // ── Clock & loop ──────────────────────────────────────
    this.clock = new THREE.Clock()
    this._animate()
  }

  _setupLighting() {
    // Warm ambient
    const ambient = new THREE.AmbientLight(0xd8c8a8, 0.55)
    this.scene.add(ambient)

    // Directional "sun" through window slots
    const sun = new THREE.DirectionalLight(0xfff0d8, 1.1)
    sun.position.set(8, 14, 6)
    sun.castShadow = this.shadows
    sun.shadow.mapSize.set(2048, 2048)
    sun.shadow.camera.near = 0.5
    sun.shadow.camera.far  = 80
    sun.shadow.camera.left = sun.shadow.camera.bottom = -30
    sun.shadow.camera.right = sun.shadow.camera.top  =  30
    this.scene.add(sun)

    // Room fill lights
    const rooms = [
      { pos: [0, 2.6, 0],    col: 0xffe0b0, int: 0.7, dist: 14 },   // living
      { pos: [13, 2.6, -1],  col: 0xe8f0ff, int: 0.6, dist: 10 },   // kitchen
      { pos: [-13, 2.6, -1], col: 0xf0e8ff, int: 0.6, dist: 10 },   // bedroom
      { pos: [0, 2.6, -9],   col: 0xfff0e0, int: 0.5, dist: 8 },    // hallway
    ]
    rooms.forEach(r => {
      const pt = new THREE.PointLight(r.col, r.int, r.dist)
      pt.position.set(...r.pos)
      if (this.shadows) {
        pt.castShadow = true
        pt.shadow.mapSize.set(512, 512)
      }
      this.scene.add(pt)
    })
  }

  _animate() {
    this._frameId = requestAnimationFrame(() => this._animate())
    const delta = Math.min(this.clock.getDelta(), 0.1)

    this.controller.update(delta)
    this.sync.update(delta)
    this.hud.update(delta)
    this.gunSystem?.update(delta)

    this.renderer.render(this.scene, this.camera)
  }

  _onPrepEnd() {
    this._prepDone = true
    // Unlock seekers
    if (this.myRole === 'seeker') this.controller.paused = false
    // Switch HUD to game phase timer
    this.hud.startGamePhase(GAME_DURATION)

    // Host transitions status in Firebase
    if (this.isHost) this.sync.triggerStartGame()
  }

  _onGameStateChange(data) {
    if (this._gameEnded || !data) return
    const players = data.players || {}

    // Check win conditions (host resolves)
    if (this.isHost && this._prepDone && data.status === 'game') {
      const hiders  = Object.values(players).filter(p => p.role === 'hider')
      const alive   = hiders.filter(p => p.alive)
      if (alive.length === 0 && hiders.length > 0) {
        this._endGame('seekers')
      }
    }

    // If already ended in DB, react
    if (data.status === 'ended' && data.winner) {
      this._endGame(data.winner, false)
    }
  }

  async _onHitHider(uid) {
    if (this._gameEnded) return
    const playerData = this.gameData.players?.[uid]
    const name = this.sync.remoteChars[uid]
      ? (this.gameData.players?.[uid]?.displayName ?? 'Hider')
      : 'Hider'

    this.hud.showHiderCaught(name)
    this.gunSystem?.removeHider(uid)
    await this.sync.eliminate(uid)
    await incrementStats(this.myUid, { seekerWins: 0 }) // tallied on game end
  }

  async _endGame(winner, writeToDb = true) {
    if (this._gameEnded) return
    this._gameEnded = true
    this.controller.paused = true

    if (writeToDb && this.isHost) {
      await this.sync.triggerEndGame(winner)
    }

    // Update personal stats
    const isWinner = (winner === 'seekers' && this.myRole === 'seeker')
                  || (winner === 'hiders'  && this.myRole === 'hider')
    try {
      await incrementStats(this.myUid, {
        gamesPlayed: 1,
        hiderWins:   winner === 'hiders'  && this.myRole === 'hider'  ? 1 : 0,
        seekerWins:  winner === 'seekers' && this.myRole === 'seeker' ? 1 : 0,
        timesEliminated: !isWinner && this.myRole === 'hider' ? 1 : 0
      })
    } catch (_) {}

    setTimeout(() => this.onGameOver(winner, this.myRole), 1800)
  }

  destroy() {
    cancelAnimationFrame(this._frameId)
    window.removeEventListener('resize', this._onResize)
    this.controller.destroy()
    this.hud.destroy()
    this.sync.destroy()
    this.paintSystem?.destroy()
    this.gunSystem?.destroy()
    this.renderer.dispose()
  }
}
