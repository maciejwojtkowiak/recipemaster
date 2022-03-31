import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyByTAEIz9Yp4vwdu1aEaZFnCrGf3VIEDwQ",
  authDomain: "recipemaster-d77f3.firebaseapp.com",
  databaseURL:
    "https://recipemaster-d77f3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "recipemaster-d77f3",
  storageBucket: "recipemaster-d77f3.appspot.com",
  messagingSenderId: "1065908682623",
  appId: "1:1065908682623:web:f138d57786f05fda20644a",
  measurementId: "G-S9X4VJVGRE",
});

// Initialize Firebase
export default app;
export const auth = getAuth();
