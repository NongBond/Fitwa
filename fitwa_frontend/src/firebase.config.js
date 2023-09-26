import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA2gphGNdegYUjp7r8N_bgCBtwxfd6N3rk",
    authDomain: "fitwa-197c5.firebaseapp.com",
    projectId: "fitwa-197c5",
    storageBucket: "fitwa-197c5.appspot.com",
    messagingSenderId: "1023622810382",
    appId: "1:1023622810382:web:0e93ad7ade082d9114255f",
    measurementId: "G-13J3Q69HPE"
};

const app = initializeApp(firebaseConfig);

export const auth = app.auth();