 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import {getAuth} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
 
 // https://firebase.google.com/docs/web/setup#available-libraries

 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyC5m495H2x5zqvUK2jBfcvPxss4AXU0iOw",
   authDomain: "unimetours-app-proyecto-e7.firebaseapp.com",
   projectId: "unimetours-app-proyecto-e7",
   storageBucket: "unimetours-app-proyecto-e7.firebasestorage.app",
   messagingSenderId: "415236252123",
   appId: "1:415236252123:web:0f70bad379214e2a6d87fe"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app); 