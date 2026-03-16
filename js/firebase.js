// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDE2bQuZ7kk7kDBIcfsg-GD-LvFoM0dPWg",
  authDomain: "lelo-intarnational-hotel.firebaseapp.com",
  projectId: "lelo-intarnational-hotel",
  storageBucket: "lelo-intarnational-hotel.appspot.com",
  messagingSenderId: "509777274669",
  appId: "1:509777274669:web:393d55c77333420d2315a4",
  measurementId: "G-77PG7GMYQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Persistent login
setPersistence(auth, browserLocalPersistence);

const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
