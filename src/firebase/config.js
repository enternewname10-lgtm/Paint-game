import { initializeApp } from 'firebase/app'
import { getAuth }       from 'firebase/auth'
import { getDatabase }   from 'firebase/database'
import { getFirestore }  from 'firebase/firestore'

const firebaseConfig = {
  apiKey:            'AIzaSyAoDNtacLJNLlPw1NXKY9Ov2Y4MNhtv3vc',
  authDomain:        'plain-sight-924df.firebaseapp.com',
  // ⚠️  Add your Realtime Database URL here after creating it in Firebase Console
  // Build → Realtime Database → Create database → copy the URL (ends in .firebaseio.com)
  databaseURL:       'https://plain-sight-924df-default-rtdb.firebaseio.com',
  projectId:         'plain-sight-924df',
  storageBucket:     'plain-sight-924df.firebasestorage.app',
  messagingSenderId: '716640491645',
  appId:             '1:716640491645:web:1db18219a64b9e55497914',
  measurementId:     'G-MVV62F9554'
}

const app = initializeApp(firebaseConfig)
export const auth      = getAuth(app)
export const rtdb      = getDatabase(app)      // Realtime DB — game state, positions
export const firestore = getFirestore(app)     // Firestore — profiles, stats
export default app
