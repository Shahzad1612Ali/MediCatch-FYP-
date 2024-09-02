// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfrmn8gqOPNFiEK0tKDk_S9fAawCRO1Uc",
  authDomain: "medicatch-3bb7b.firebaseapp.com",
  projectId: "medicatch-3bb7b",
  storageBucket: "medicatch-3bb7b.appspot.com",
  messagingSenderId: "344925709270",
  appId: "1:344925709270:web:cfc0714ae418ce48213a77",
  measurementId: "G-QPNCVFK8QK"
}

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);