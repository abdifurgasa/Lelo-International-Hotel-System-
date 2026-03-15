// js/firebase.js

// Import Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// Import Firebase Auth
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Import Firestore (database)
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Import Storage (for photos)
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE2bQuZ7kk7kDBIcfsg-GD-LvFoM0dPWg",
  authDomain: "lelo-intarnational-hotel.firebaseapp.com",
  projectId: "lelo-intarnational-hotel",
  storageBucket: "lelo-intarnational-hotel.firebasestorage.app",
  messagingSenderId: "509777274669",
  appId: "1:509777274669:web:393d55c77333420d2315a4",
  measurementId: "G-77PG7GMYQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export for use in other JS files
export { app, auth, db, storage };
