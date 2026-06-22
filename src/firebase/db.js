import {
  ref, set, get, update, onValue, off, push, remove, serverTimestamp, increment
} from 'firebase/database'
import { rtdb } from './config.js'

// ── User profiles (stored in RTDB /users/{uid}) ───────────────

export async function createUserProfile(uid, displayName) {
  await set(ref(rtdb, `users/${uid}`), {
    displayName,
    currency: 0,
    weaponSkins: ['default'],
    equippedSkin: 'default',
    stats: { gamesPlayed: 0, hiderWins: 0, seekerWins: 0, timesEliminated: 0 },
    createdAt: Date.now()
  })
}

export async function getUserProfile(uid) {
  const snap = await get(ref(rtdb, `users/${uid}`))
  return snap.exists() ? { uid, ...snap.val() } : null
}

export async function incrementStats(uid, delta) {
  const updates = {}
  for (const [k, v] of Object.entries(delta)) {
    if (v !== 0) updates[`users/${uid}/stats/${k}`] = increment(v)
  }
  if (Object.keys(updates).length) await update(ref(rtdb), updates)
}

export async function spendCurrency(uid, amount) {
  await update(ref(rtdb, `users/${uid}`), { currency: increment(-amount) })
}

export async function earnCurrency(uid, amount) {
  await update(ref(rtdb, `users/${uid}`), { currency: increment(amount) })
}

export async function updateEquippedSkin(uid, skinId) {
  await update(ref(rtdb, `users/${uid}`), { equippedSkin: skinId })
}

export async function addOwnedSkin(uid, skinId) {
  const snap = await get(ref(rtdb, `users/${uid}/weaponSkins`))
  const current = snap.val() || ['default']
  if (!current.includes(skinId)) {
    await set(ref(rtdb, `users/${uid}/weaponSkins`), [...current, skinId])
  }
}

// ── Game rooms (RTDB /games/{gameId}) ────────────────────────

function genCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

export async function createGame(hostId, displayName, settings) {
  const code    = genCode()
  const gameRef = push(ref(rtdb, 'games'))
  const gameId  = gameRef.key

  await set(gameRef, {
    hostId,
    code,
    settings: {
      prepTime:      settings.prepTime      ?? 120,
      seekerCount:   settings.seekerCount   ?? 1,
      shadowsEnabled: settings.shadowsEnabled !== false,
      maxPlayers:    10
    },
    status:    'lobby',
    createdAt: Date.now(),
    winner:    null,
    players:   {}
  })

  await joinGame(gameId, hostId, displayName)
  return { gameId, code }
}

export async function findGameByCode(code) {
  const snap = await get(ref(rtdb, 'games'))
  if (!snap.exists()) return null
  let found = null
  snap.forEach(child => {
    const g = child.val()
    if (g.code === code.toUpperCase() && g.status === 'lobby') found = child.key
  })
  return found
}

export async function joinGame(gameId, uid, displayName) {
  await set(ref(rtdb, `games/${gameId}/players/${uid}`), {
    displayName,
    role:     null,
    position: { x: 2, y: 0, z: 2 },
    rotationY: 0,
    pose:     'stand',
    paintColors: {
      head: '#808080', torso: '#808080',
      leftArm: '#808080', rightArm: '#808080',
      leftLeg: '#808080', rightLeg: '#808080'
    },
    alive:   true,
    isReady: false
  })
}

export async function leaveGame(gameId, uid) {
  await remove(ref(rtdb, `games/${gameId}/players/${uid}`))
}

export function watchGame(gameId, callback) {
  const gameRef = ref(rtdb, `games/${gameId}`)
  onValue(gameRef, snap => callback(snap.val()))
  return () => off(gameRef)
}

export async function getGame(gameId) {
  const snap = await get(ref(rtdb, `games/${gameId}`))
  return snap.exists() ? snap.val() : null
}

export async function updatePlayerPosition(gameId, uid, position, rotationY) {
  await update(ref(rtdb, `games/${gameId}/players/${uid}`), { position, rotationY })
}

export async function updatePlayerPaint(gameId, uid, paintColors) {
  await update(ref(rtdb, `games/${gameId}/players/${uid}`), { paintColors })
}

export async function updatePlayerPose(gameId, uid, pose) {
  await update(ref(rtdb, `games/${gameId}/players/${uid}`), { pose })
}

export async function setPlayerReady(gameId, uid, ready) {
  await update(ref(rtdb, `games/${gameId}/players/${uid}`), { isReady: ready })
}

export async function eliminatePlayer(gameId, uid) {
  await update(ref(rtdb, `games/${gameId}/players/${uid}`), { alive: false })
}

export async function assignRoles(gameId, roles) {
  const updates = {}
  for (const [uid, role] of Object.entries(roles)) {
    updates[`players/${uid}/role`] = role
  }
  updates.status = 'prep'
  await update(ref(rtdb, `games/${gameId}`), updates)
}

export async function startGamePhase(gameId) {
  await update(ref(rtdb, `games/${gameId}`), { status: 'game' })
}

export async function endGame(gameId, winner) {
  await update(ref(rtdb, `games/${gameId}`), { status: 'ended', winner })
}
