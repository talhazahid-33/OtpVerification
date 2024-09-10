import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE-9_YZ___g4Ash4ICTnU4j6yxpuMdl00",
  authDomain: "otpverification-91fc7.firebaseapp.com",
  projectId: "otpverification-91fc7",
  storageBucket: "otpverification-91fc7.appspot.com",
  messagingSenderId: "732973307234",
  appId: "1:732973307234:web:0f8c42cad0873713df883b",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
