import { initializeApp } from 'firebase/app'
import { getAuth }       from 'firebase/auth'
import { getDatabase }   from 'firebase/database'

const firebaseConfig = {
  apiKey:            'AIzaSyAoDNtacLJNLlPw1NXKY9Ov2Y4MNhtv3vc',
  authDomain:        'plain-sight-924df.firebaseapp.com',
  databaseURL:       'https://plain-sight-924df-default-rtdb.firebaseio.com',
  projectId:         'plain-sight-924df',
  storageBucket:     'plain-sight-924df.firebasestorage.app',
  messagingSenderId: '716640491645',
  appId:             '1:716640491645:web:1db18219a64b9e55497914'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const rtdb = getDatabase(app)
export default app
