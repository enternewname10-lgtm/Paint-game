import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from './config.js'
import { createUserProfile } from './db.js'

export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback)
}

export async function register(email, password, displayName) {
  const cred = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(cred.user, { displayName })
  await createUserProfile(cred.user.uid, displayName)
  return cred.user
}

export async function login(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password)
  return cred.user
}

export async function logout() {
  await signOut(auth)
}

export function getCurrentUser() {
  return auth.currentUser
}
