// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1oxTI7dtlhCYhxskxzQWN5ZMGbpauRzQ",
  authDomain: "rentpar-house-app.firebaseapp.com",
  projectId: "rentpar-house-app",
  storageBucket: "rentpar-house-app.appspot.com",
  messagingSenderId: "885196640451",
  appId: "1:885196640451:web:7110e589e5c490ddd89276"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db =getFirestore();