
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  "projectId": "studio-8743571074-b5546",
  "appId": "1:467625715182:web:bb8a692bd793715b5b9aff",
  "apiKey": "AIzaSyCmD4ox6tCgud_oLLq_zgfsDHaG3o0VTdQ",
  "authDomain": "studio-8743571074-b5546.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "467625715182"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
