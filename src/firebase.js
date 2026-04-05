import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Import Firestore functions
import { getAuth } from "firebase/auth";  // Import Auth functions


const firebaseConfig = {
    apiKey: "AIzaSyBQzFFUmnvzNUKdCs1ZZQXXVF-zaaYAVII",
    authDomain: "linkedin-14e89.firebaseapp.com",
    projectId: "linkedin-14e89",
    storageBucket: "linkedin-14e89.firebasestorage.app",
    messagingSenderId: "448708583601",
    appId: "1:448708583601:web:216128842669839332c290"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };