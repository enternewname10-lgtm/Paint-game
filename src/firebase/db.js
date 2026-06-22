import {
  doc, setDoc, getDoc, updateDoc, increment, arrayUnion
} from 'firebase/firestore'
import {
  ref, set, get, update, onValue, off, push, remove, serverTimestamp
} from 'firebase/database'
import { firestore, rtdb } from './config.js'

// ── Firestore: user profiles ─────────────────────────────────

export async function createUserProfile(uid, displayName) {
  await setDoc(doc(firestore, 'users', uid), {
    displayName,
    currency: 0,
    weaponSkins: ['default'],
    equippedSkin: 'default',
    stats: { gamesPlayed: 0, hiderWins: 0, seekerWins: 0, timesEliminated: 0 },
    friends: [],
    createdAt: new Date().toISOString()
  })
}

export async function getUserProfile(uid) {
  const snap = await getDoc(doc(firestore, 'users', uid))
  return snap.exists() ? { uid, ...snap.data() } : null
}

export async function incrementStats(uid, delta) {
  const userRef = doc(firestore, 'users', uid)
  const updates = {}
  for (const [k, v] of Object.entries(delta)) updates[`stats.${k}`] = increment(v)
  await updateDoc(userRef, updates)
}

export async function addFriend(uid, friendUid) {
  await updateDoc(doc(firestore, 'users', uid), { friends: arrayUnion(friendUid) })
}

export async function spendCurrency(uid, amount) {
  await updateDoc(doc(firestore, 'users', uid), { currency: increment(-amount) })
}

export async function earnCurrency(uid, amount) {
  await updateDoc(doc(firestore, 'users', uid), { currency: increment(amount) })
}

// ── Realtime DB: game rooms ───────────────────────────────────

function genCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

export async function createGame(hostId, displayName, settings) {
  const code = genCode()
  const gameRef = push(ref(rtdb, 'games'))
  const gameId = gameRef.key

  await set(gameRef, {
    hostId,
    code,
    settings: {
      prepTime: settings.prepTime ?? 120,
      seekerCount: settings.seekerCount ?? 1,
      shadowsEnabled: settings.shadowsEnabled !== false,
      maxPlayers: 10
    },
    status: 'lobby',
    createdAt: serverTimestamp(),
    winner: null,
    players: {}
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
    role: null,
    position: { x: 2, y: 0, z: 2 },
    rotationY: 0,
    pose: 'stand',
    paintColors: {
      head: '#808080', torso: '#808080',
      leftArm: '#808080', rightArm: '#808080',
      leftLeg: '#808080', rightLeg: '#808080'
    },
    alive: true,
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

export async function updateGameSettings(gameId, settings) {
  await update(ref(rtdb, `games/${gameId}/settings`), settings)
}
