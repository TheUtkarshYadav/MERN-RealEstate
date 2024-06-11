// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-f92cb.firebaseapp.com",
    projectId: "mern-estate-f92cb",
    storageBucket: "mern-estate-f92cb.appspot.com",
    messagingSenderId: "250421171091",
    appId: "1:250421171091:web:4d4f8266f5778eeea38e66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);