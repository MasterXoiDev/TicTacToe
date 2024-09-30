// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVEXybFEGnYmz7QRqkVTTpA2IlJUBaNUE",
  authDomain: "learn-firebase-26cc4.firebaseapp.com",
  projectId: "learn-firebase-26cc4",
  storageBucket: "learn-firebase-26cc4.appspot.com",
  messagingSenderId: "129150279614",
  appId: "1:129150279614:web:6cee376b54aad76c33e3ef",
  measurementId: "G-KNLKKDF1FH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app)