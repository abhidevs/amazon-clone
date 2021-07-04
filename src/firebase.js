import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCd-uSWfDUwsR3mGAojGS1Sx2K9PtVDoy4",
  authDomain: "amaz0n-clone-01.firebaseapp.com",
  databaseURL: "https://amaz0n-clone-01.firebaseio.com",
  projectId: "amaz0n-clone-01",
  storageBucket: "amaz0n-clone-01.appspot.com",
  messagingSenderId: "100498644926",
  appId: "1:100498644926:web:1402e4f7c0d234112623ef",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };