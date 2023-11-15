import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
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
const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(firebaseApp);
console.log("initialized firebase connection");