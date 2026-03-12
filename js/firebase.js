import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {

apiKey: "AIzaSyDTUzfSRFY76Zb7Ma1kiMnv6feOg86Mukc",
  authDomain: "lelo-international-hotel.firebaseapp.com",
  databaseURL: "https://lelo-international-hotel-default-rtdb.firebaseio.com",
  projectId: "lelo-international-hotel",
  storageBucket: "lelo-international-hotel.firebasestorage.app",
  messagingSenderId: "36265181147",
  appId: "1:36265181147:web:be35257e4332c0bf7971fe",
  measurementId: "G-PD66QHMBP9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
