import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUCgUE10-9x-3nqlS7fKa8QzvJCIa04CY",
    authDomain: "catalog-ee838.firebaseapp.com",
    projectId: "catalog-ee838",
    storageBucket: "catalog-ee838.appspot.com",
    messagingSenderId: "1016620190581",
    appId: "1:1016620190581:web:6d56547c34dccb99dce13c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
