import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2gphGNdegYUjp7r8N_bgCBtwxfd6N3rk",
  authDomain: "fitwa-197c5.firebaseapp.com",
  projectId: "fitwa-197c5",
  storageBucket: "fitwa-197c5.appspot.com",
  messagingSenderId: "1023622810382",
  appId: "1:1023622810382:web:22ab5d551d937e9414255f",
  measurementId: "G-1K1JKTGNKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);