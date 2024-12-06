import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyB-r4B7b_XW2TDC-Mpyo7adAtpQjgu9CIE",
  authDomain: "noteapps-ef536.firebaseapp.com",
  databaseURL: "https://noteapps-ef536-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "noteapps-ef536",
  storageBucket: "noteapps-ef536.firebasestorage.app",
  messagingSenderId: "853920049956",
  appId: "1:853920049956:web:b41eb5a59e557152b3a1b1",
});

const FIREBASE = firebase;

export default FIREBASE;
