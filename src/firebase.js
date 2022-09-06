import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBlNfE7Os_Bi3Yv-x6eiFUb_f-itF27T_0',
  authDomain: 'my-portfolio-e664f.firebaseapp.com',
  projectId: 'my-portfolio-e664f',
  storageBucket: 'my-portfolio-e664f.appspot.com',
  messagingSenderId: '509287231830',
  appId: '1:509287231830:web:6289f6cc5ba820b8dc66f7',
  measurementId: 'G-1KFBY4QM0Q',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
