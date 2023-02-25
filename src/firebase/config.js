import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSxKam_HfQRcol5OaHqMv8YTcGGwEah8c",
    authDomain: "path-gen-v4.firebaseapp.com",
    projectId: "path-gen-v4",
    storageBucket: "path-gen-v4.appspot.com",
    messagingSenderId: "340643657093",
    appId: "1:340643657093:web:ac0dc2d030554ac1d740ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//init db
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);


export {app,auth,db,storage};