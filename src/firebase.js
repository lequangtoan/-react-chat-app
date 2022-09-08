// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUuvdmYwQ72h-Mquz9OQC74J9mtsVjebs",
  authDomain: "chat-app-71b95.firebaseapp.com",
  projectId: "chat-app-71b95",
  storageBucket: "chat-app-71b95.appspot.com",
  messagingSenderId: "453209732383",
  appId: "1:453209732383:web:3dbf92d8307429d1deac2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
