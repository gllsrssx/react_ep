// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPF1KB8Eq9X9cFCIqYOfINNyljAVPqW64",
  authDomain: "react-ep.firebaseapp.com",
  projectId: "react-ep",
  storageBucket: "react-ep.appspot.com",
  messagingSenderId: "384745751994",
  appId: "1:384745751994:web:075f257eb78a4c1c950983",
  measurementId: "G-37369YJVSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

