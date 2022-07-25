// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUhLs-wJzX-IkB0NvxRqytTyPOjqWgTQA",
  authDomain: "react-proyect-b33b2.firebaseapp.com",
  projectId: "react-proyect-b33b2",
  storageBucket: "react-proyect-b33b2.appspot.com",
  messagingSenderId: "1086505385880",
  appId: "1:1086505385880:web:7c778013c620d455b8f5ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)