// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFG6MGddF0L4KcC_rGgfhJdH8ywDGZTAo",
  authDomain: "todo-app-eb9d5.firebaseapp.com",
  projectId: "todo-app-eb9d5",
  storageBucket: "todo-app-eb9d5.appspot.com",
  messagingSenderId: "994536835075",
  appId: "1:994536835075:web:fadde50213a98bd5976636",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
