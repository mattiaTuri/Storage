// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPTrOacRL5hxE-NWNM5jI1rwEdCmOE2e0",
  authDomain: "storage-544e4.firebaseapp.com",
  projectId: "storage-544e4",
  storageBucket: "storage-544e4.appspot.com",
  messagingSenderId: "123918981085",
  appId: "1:123918981085:web:8be7cba1740a2034178834",
  measurementId: "G-L0P886RC0E",
  databaseUrl: "https://storage-544e4-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app)