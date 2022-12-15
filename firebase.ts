// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "yabessy-firebase.firebaseapp.com",
  projectId: "yabessy-firebase",
  storageBucket: "yabessy-firebase.appspot.com",
  messagingSenderId: "845033696326",
  appId: "1:845033696326:web:c7491c9e2059a2e69fee47",
  measurementId: "G-FS86KF55CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }