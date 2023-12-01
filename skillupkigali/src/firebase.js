import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0yEFY2ZqFvR-fVBwmrBJt--xqOcjs2ok",
  authDomain: "skillup-kigali.firebaseapp.com",
  projectId: "skillup-kigali",
  storageBucket: "skillup-kigali.appspot.com",
  messagingSenderId: "757540313416",
  appId: "1:757540313416:web:60471f70315cc616a13b7d",
  measurementId: "G-CSDKQRV2MX",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };