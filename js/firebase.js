// js/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDE2bQuZ7kk7kDBIcfsg-GD-LvFoM0dPWg",
  authDomain: "lelo-intarnational-hotel.firebaseapp.com",
  projectId: "lelo-intarnational-hotel",
  storageBucket: "lelo-intarnational-hotel.appspot.com",
  messagingSenderId: "509777274669",
  appId: "1:509777274669:web:393d55c77333420d2315a4",
  measurementId: "G-77PG7GMYQ4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
const db = getFirestore(app);

export { app, auth, db, analytics };
