// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCXCfnxPhuMPflijNR81DZspnbgCpC4OFw",
  authDomain: "gate-students.firebaseapp.com",
  databaseURL: "https://gate-students-1b507-default-rtdb.firebaseio.com",
  projectId: "gate-students",
  storageBucket: "gate-students.appspot.com",
  messagingSenderId: "246033063858",
  appId: "1:246033063858:web:c1a9e7ae7e33c1b08b4eab",
  measurementId: "G-F8653R2EE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;