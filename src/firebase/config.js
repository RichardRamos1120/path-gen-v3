import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjg42ZRutrdxA3K1Abw4lwVkD8ssUW9ic",
    authDomain: "pathgen-v3.firebaseapp.com",
    projectId: "pathgen-v3",
    storageBucket: "pathgen-v3.appspot.com",
    messagingSenderId: "91614339108",
    appId: "1:91614339108:web:ee5f6bf50ecaa1a29378b1"
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