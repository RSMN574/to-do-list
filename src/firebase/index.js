// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoKVLKrsf8Ufg3BM2xBDGh_5DaetxAvEA",
  authDomain: "to-do-list-341408.firebaseapp.com",
  databaseURL: "https://to-do-list-341408-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "to-do-list-341408",
  storageBucket: "to-do-list-341408.appspot.com",
  messagingSenderId: "853187459922",
  appId: "1:853187459922:web:9167a60fdb71517b4fd88b",
  measurementId: "G-N97M7YPSJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export{auth}
//const analytics = getAnalytics(app);