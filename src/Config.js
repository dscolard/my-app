import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO8a6Phrd_HG0NzPmwhV941vUZ9zrK1c8",
  authDomain: "final-year-project-5939a.firebaseapp.com",
  databaseURL: "https://final-year-project-5939a.firebaseio.com",
  projectId: "final-year-project-5939a",
  storageBucket: "final-year-project-5939a.appspot.com",
  messagingSenderId: "82214890761",
  appId: "1:82214890761:web:27dbc1c9657fc82e4377d8",
  measurementId: "G-ZBKF5Q362V",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();
export const fs = firebase.firestore();

export default firebase;
