import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "class-notes-10-5.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSENGER_ID,
  appId: import.meta.envVITE_FIREBASE_APP_ID,
  measurementId: "G-N7NJK8WQL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
