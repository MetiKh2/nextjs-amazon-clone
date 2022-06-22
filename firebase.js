import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDaoRfAjCZGw5A5D0aRgNldppI3J2GQZBk",
  authDomain: "clone-216e1.firebaseapp.com",
  projectId: "clone-216e1",
  storageBucket: "clone-216e1.appspot.com",
  messagingSenderId: "549536376239",
  appId: "1:549536376239:web:2bb857925482a705f6fb5a",
  measurementId: "G-NDJZJ8VRZ9"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db =getFirestore(app)
export const auth=getAuth()
export const authProvider = new GoogleAuthProvider();