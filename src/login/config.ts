import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9f0YZS3Mwt9UUf0YWlJsYGB0Ji89FQ-U",
  authDomain: "practicetslogin.firebaseapp.com",
  projectId: "practicetslogin",
  storageBucket: "practicetslogin.firebasestorage.app",
  messagingSenderId: "763246902724",
  appId: "1:763246902724:web:55a70131dad34f71c07891",
  measurementId: "G-EE3EJQ92S7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
