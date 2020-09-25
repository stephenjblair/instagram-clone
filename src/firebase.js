import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyADzlQYr_LeTN16jDqMBCXjx5kVEfKcMgU",
    authDomain: "instagram-clone-ceada.firebaseapp.com",
    databaseURL: "https://instagram-clone-ceada.firebaseio.com",
    projectId: "instagram-clone-ceada",
    storageBucket: "instagram-clone-ceada.appspot.com",
    messagingSenderId: "227440504389",
    appId: "1:227440504389:web:153e4526dba2109d66bd2c",
    measurementId: "G-JHW9QBB5QX"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage }; 


