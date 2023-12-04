// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsrgEsuMjOOENfubzFLpiW1vn82Bqeyts",
  authDomain: "dnevnik-b5266.firebaseapp.com",
  projectId: "dnevnik-b5266",
  storageBucket: "dnevnik-b5266.appspot.com",
  messagingSenderId: "1038138652816",
  appId: "1:1038138652816:web:3543f1024c161eb632c015",
  measurementId: "G-PGV4D33G28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export { db };