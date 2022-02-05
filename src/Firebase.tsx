import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const app = initializeApp({
  apiKey: "AIzaSyAK7HPi-jEJRk9WMWcvF3_eF42bendLHLk",
  authDomain: "recipemaster-3256c.firebaseapp.com",
  databaseURL: "https://recipemaster-3256c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "recipemaster-3256c",
  storageBucket: "recipemaster-3256c.appspot.com",
  messagingSenderId: "823337100127",
  appId: "1:823337100127:web:98e7299265ab45a1ab0cea"
});

// Initialize Firebase
export default app
export const auth = getAuth(app)

