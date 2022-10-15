import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCM0lS8rE0qSOCECls-iT3yxLfSU0puGBc",
    authDomain: "line-clone-2ae11.firebaseapp.com",
    projectId: "line-clone-2ae11",
    storageBucket: "line-clone-2ae11.appspot.com",
    messagingSenderId: "479342495428",
    appId: "1:479342495428:web:a01e4d38936d17438beb91"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
