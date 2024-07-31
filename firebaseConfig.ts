import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAoBBdz-vD0zykxYwRq9hWqY5ywzDE1zTI",
    authDomain: "xtreme-gym-zab401.firebaseapp.com",
    projectId: "xtreme-gym-zab401",
    storageBucket: "xtreme-gym-zab401.appspot.com",
    messagingSenderId: "919501707615",
    appId: "1:919501707615:web:e505986ed813fa02ca7eea"
};

export const firebase = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebase);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
