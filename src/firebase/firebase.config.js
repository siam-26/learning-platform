// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNJhPDNx4zfft7r2827HCKxC8G0cGtntY",
    authDomain: "coders-info-bd.firebaseapp.com",
    projectId: "coders-info-bd",
    storageBucket: "coders-info-bd.appspot.com",
    messagingSenderId: "302883214869",
    appId: "1:302883214869:web:4653514954acedd33e601c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;