import { initializeApp } from "firebase/app";
import 'firebase/auth'
import {app} from '../firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAS8I5DhYuoG1f-nqSpckTeRGdfqg5--oM",
  authDomain: "gate-students-1b507.firebaseapp.com",
  databaseURL: "https://gate-students-1b507-default-rtdb.firebaseio.com",
  projectId: "gate-students-1b507",
  storageBucket: "gate-students-1b507.appspot.com",
  messagingSenderId: "994272801645",
  appId: "1:994272801645:web:11c7b9f4e2e20ee4172064"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);
