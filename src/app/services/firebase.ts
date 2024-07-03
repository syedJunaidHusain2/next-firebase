// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQCy9A4D0xnq-PXpTD-tTNZlFN7qNOOIk",
  authDomain: "next-firebase-bac47.firebaseapp.com",
  projectId: "next-firebase-bac47",
  storageBucket: "next-firebase-bac47.appspot.com",
  messagingSenderId: "851280735423",
  appId: "1:851280735423:web:96622ce66641199c2faa0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
