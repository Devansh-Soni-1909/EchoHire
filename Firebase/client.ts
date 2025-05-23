// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxFuMU1Q1k0CzOeRIUn_QfZflPFZLD8Qw",
  authDomain: "echohire-c5452.firebaseapp.com",
  projectId: "echohire-c5452",
  storageBucket: "echohire-c5452.firebasestorage.app",
  messagingSenderId: "625010677947",
  appId: "1:625010677947:web:d997e7b06e139e0909f19e",
  measurementId: "G-1YLGJZTQG1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);