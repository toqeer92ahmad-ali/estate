// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-126a9.firebaseapp.com",
  projectId: "estate-126a9",
  storageBucket: "estate-126a9.firebasestorage.app",
  messagingSenderId: "365229265716",
  appId: "1:365229265716:web:395a342841faeb91570b61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };