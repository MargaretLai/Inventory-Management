// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQCHN6bSlaFW1X2CWL19dMjdMKFSvBEhs",
    authDomain: "inventory-management-49f90.firebaseapp.com",
    projectId: "inventory-management-49f90",
    storageBucket: "inventory-management-49f90.appspot.com",
    messagingSenderId: "206087776526",
    appId: "1:206087776526:web:a5295fcdb7d96d177f0f5f",
    measurementId: "G-K5W1LTZQDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}