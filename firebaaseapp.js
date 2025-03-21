import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXT8kib8SpSdgjA3ECEISkKmgIAxhQE1A",
  authDomain: "rescue-bites.firebaseapp.com",
  projectId: "rescue-bites",
  storageBucket: "rescue-bites.firebasestorage.app",
  messagingSenderId: "472191906521",
  appId: "1:472191906521:web:72b85890dffae3b439c4c8",
  measurementId: "G-J2ZHL9QF42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {app, db, auth}