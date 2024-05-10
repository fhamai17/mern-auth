// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2fa49.firebaseapp.com",
  projectId: "mern-auth-2fa49",
  storageBucket: "mern-auth-2fa49.appspot.com",
  messagingSenderId: "67023685642",
  appId: "1:67023685642:web:04ce9ccef2a41d58a577f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;