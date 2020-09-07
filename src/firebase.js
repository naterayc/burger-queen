import firebase from 'firebase/app';
import 'firebase/firestore'

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaIWTZhCfM6iG6a73gpe-wsErl8t74WMU",
    authDomain: "burger-queen-5875a.firebaseapp.com",
    databaseURL: "https://burger-queen-5875a.firebaseio.com",
    projectId: "burger-queen-5875a",
    storageBucket: "burger-queen-5875a.appspot.com",
    messagingSenderId: "323528823812",
    appId: "1:323528823812:web:f7f5b8aee12c83a3ca1151"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};