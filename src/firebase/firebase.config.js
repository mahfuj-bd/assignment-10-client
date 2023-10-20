// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1YNOVr3Eso2GssBGVj668r7QjFmTLuvQ",
  authDomain: "assignment-10-1f624.firebaseapp.com",
  projectId: "assignment-10-1f624",
  storageBucket: "assignment-10-1f624.appspot.com",
  messagingSenderId: "51083081007",
  appId: "1:51083081007:web:48fb7393ba9321e045ddda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;