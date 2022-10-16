// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARwp266eOrPDtsYmdbYLn-O14xAiK2GGA",
  authDomain: "nearblimp.firebaseapp.com",
  projectId: "nearblimp",
  storageBucket: "nearblimp.appspot.com",
  messagingSenderId: "201583154968",
  appId: "1:201583154968:web:a24138ab530d3af678b06d",
  measurementId: "G-W0XM74EGHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
