import { watchGame, updatePlayerPosition, updatePlayerPaint, updatePlayerPose, eliminatePlayer, startGamePhase, endGame } from '../firebase/db.js'
import { Character } from './Character.js'

const SYNC_INTERVAL = 0.1  // send position every 100ms

export class MultiplayerSync {
  constructor(gameId, myUid, myRole, scene, gunSystem, onStateChange) {
    this.gameId       = gameId
    this.myUid        = myUid
    this.myRole       = myRole
    this.scene        = scene
    this.gunSystem    = gunSystem
    this.onStateChange = onStateChange

    this.remoteChars  = {}   // uid → Character
    this.syncTimer    = 0
    this.myChar       = null // set externally
    this.myController = null // set externally
    this._lastStatus  = null

    this._unwatch = watchGame(gameId, data => this._onGameData(data))
  }

  _onGameData(data) {
    if (!data) return
    const players = data.players || {}

    // Sync remote characters
    for (const [uid, playerData] of Object.entries(players)) {
      if (uid === this.myUid) continue // skip self

      if (!playerData.alive) {
        this._removeRemote(uid)
        continue
      }

      if (!this.remoteChars[uid]) {
        // New player entered
        const char = new Character(playerData.paintColors || {}, false)
        char.group.position.set(
          playerData.position?.x ?? 0,
          playerData.position?.y ?? 0,
          playerData.position?.z ?? 0
        )
        this.scene.add(char.group)
        this.remoteChars[uid] = char

        // If I'm a seeker and they're a hider, register hitbox
        if (this.myRole === 'seeker' && playerData.role === 'hider') {
          this.gunSystem?.addHider(uid, char.group)
        }
      }

      const char = this.remoteChars[uid]

      // Lerp position
      const p = playerData.position ?? { x: 0, y: 0, z: 0 }
      char.group.position.lerp({ x: p.x, y: p.y, z: p.z }, 0.25)
      char.group.rotation.y = playerData.rotationY ?? 0

      // Update hitbox position (for seekers)
      this.gunSystem?.updateHiderPosition(uid, char.group.position)

      // Apply paint colors
      if (playerData.paintColors) char.applyColors(playerData.paintColors)

      // Apply pose
      if (playerData.pose && playerData.pose !== char.pose) char.setPose(playerData.pose)
    }

    // Remove players who left
    for (const uid of Object.keys(this.remoteChars)) {
      if (!players[uid]) this._removeRemote(uid)
    }

    // Fire game-state callback (timer, status changes, eliminations)
    if (data.status !== this._lastStatus) {
      this._lastStatus = data.status
    }
    this.onStateChange(data)
  }

  _removeRemote(uid) {
    if (!this.remoteChars[uid]) return
    this.scene.remove(this.remoteChars[uid].group)
    this.remoteChars[uid].dispose()
    delete this.remoteChars[uid]
    this.gunSystem?.removeHider(uid)
  }

  // Called by GameScene each frame with delta
  update(delta) {
    this.syncTimer += delta
    if (this.syncTimer >= SYNC_INTERVAL && this.myChar && this.myController) {
      this.syncTimer = 0
      const pos = this.myChar.group.position
      updatePlayerPosition(this.gameId, this.myUid,
        { x: +pos.x.toFixed(3), y: +pos.y.toFixed(3), z: +pos.z.toFixed(3) },
        +this.myController.yaw.toFixed(4)
      ).catch(() => {})
    }
  }

  async syncPaint(colors) {
    await updatePlayerPaint(this.gameId, this.myUid, colors).catch(() => {})
  }

  async syncPose(pose) {
    await updatePlayerPose(this.gameId, this.myUid, pose).catch(() => {})
  }

  async eliminate(uid) {
    await eliminatePlayer(this.gameId, uid).catch(() => {})
  }

  async triggerStartGame() {
    await startGamePhase(this.gameId).catch(() => {})
  }

  async triggerEndGame(winner) {
    await endGame(this.gameId, winner).catch(() => {})
  }

  destroy() {
    this._unwatch?.()
    for (const uid of Object.keys(this.remoteChars)) this._removeRemote(uid)
  }
}
