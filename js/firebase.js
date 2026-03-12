// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";


// Firebase configuration
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


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firebase services
export const auth = getAuth(app);

export const db = getDatabase(app);

export const analytics = getAnalytics(app);
