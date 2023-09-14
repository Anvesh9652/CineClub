// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC3-MonZ9L9FuVUow41TUx2-5aYj25YcxU",
    authDomain: "movie-app-cfe76.firebaseapp.com",
    projectId: "movie-app-cfe76",
    storageBucket: "movie-app-cfe76.appspot.com",
    messagingSenderId: "793634428568",
    appId: "1:793634428568:web:2cd6831df065562dcda2ed",
    measurementId: "G-ZM377QSN2H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export {auth};
export default db;