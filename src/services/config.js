import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

    authDomain: "tienda--3lrender.firebaseapp.com",

    projectId: "tienda--3lrender",

    storageBucket: "tienda--3lrender.appspot.com",

    messagingSenderId: "1058268109478",

    appId: "1:1058268109478:web:2e05fd1f97e3de452fb267"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);