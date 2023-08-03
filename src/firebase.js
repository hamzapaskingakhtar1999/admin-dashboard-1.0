import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-dashboard-89eea.firebaseapp.com",
  projectId: "admin-dashboard-89eea",
  storageBucket: "admin-dashboard-89eea.appspot.com",
  messagingSenderId: "1022955673840",
  appId: "1:1022955673840:web:194f413f279b28db76ca35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
