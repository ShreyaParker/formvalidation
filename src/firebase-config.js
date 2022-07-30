// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2WaWrFBp4PUnzdBlJWG_EcnC90HbbHzM",
    authDomain: "formvalidation-c52d4.firebaseapp.com",
    projectId: "formvalidation-c52d4",
    storageBucket: "formvalidation-c52d4.appspot.com",
    messagingSenderId: "379366262330",
    appId: "1:379366262330:web:35594dc4a1c335a80f1703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)