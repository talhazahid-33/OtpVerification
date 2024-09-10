
// Initialize Firebase


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getApps,getApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAFyIr-R8GwU93EqLWQmdoCIUFbH9wjHjc",
  authDomain: "authentication-9e50c.firebaseapp.com",
  projectId: "authentication-9e50c",
  storageBucket: "authentication-9e50c.appspot.com",
  messagingSenderId: "1041087871151",
  appId: "1:1041087871151:web:48ff8bc7fd79c2f32b7c5a",
  measurementId: "G-ZWYXRDWT0V"
};
const app = getApps().length ===0? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();
export {auth};