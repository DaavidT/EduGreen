import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  databaseURL: process.env.databaseURL,
}

export const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
export const dbFirestore = getFirestore(app)
