// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCckEv_tLDzXD5MFBirLx_y8c2gfOl65QI",
  authDomain: "todo-app-60226.firebaseapp.com",
  projectId: "todo-app-60226",
  storageBucket: "todo-app-60226.appspot.com",
  messagingSenderId: "584003654966",
  appId: "1:584003654966:web:5ac0ea5aae0980424d4f97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
