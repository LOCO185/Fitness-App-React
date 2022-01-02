// import app from "firebase/app";
// import "firebase/auth";
// import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyBLb83vvuNn4kUMxcd0uzhrldX3-Tltn5k",
  authDomain: "fitness-app-auth.firebaseapp.com",
  projectId: "fitness-app-auth",
  storageBucket: "fitness-app-auth.appspot.com",
  messagingSenderId: "356564603771",
  appId: "1:356564603771:web:58f96d7ad5eb184f86a3de",
  measurementId: "G-5D8M156YK8",
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    // this.db = app.database(); Later add database
  }

  /*** Authentication  ***/
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
}

export default Firebase;
