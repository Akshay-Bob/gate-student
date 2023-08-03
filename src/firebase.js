// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXCfnxPhuMPflijNR81DZspnbgCpC4OFw",
  authDomain: "gate-students.firebaseapp.com",
  projectId: "gate-students",
  storageBucket: "gate-students.appspot.com",
  messagingSenderId: "246033063858",
  appId: "1:246033063858:web:c1a9e7ae7e33c1b08b4eab",
  measurementId: "G-F8653R2EE4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);