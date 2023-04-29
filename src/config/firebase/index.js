// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiLq-9LgtzkynakJG-Bfz9bLoWT09WMjw",
    authDomain: "e-comerce-6b910.firebaseapp.com",
    databaseURL: "https://e-comerce-6b910-default-rtdb.firebaseio.com",
    projectId: "e-comerce-6b910",
    storageBucket: "e-comerce-6b910.appspot.com",
    messagingSenderId: "540762125341",
    appId: "1:540762125341:web:5d4db0420266c6d1c8c2f4",
    measurementId: "G-Y9L368QZDG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase(app);