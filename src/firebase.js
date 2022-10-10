import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtKF_kYm_ki--LFbxLwkUmX1xvfZ8PmkA",
  authDomain: "fir-auth-1132-3750c.firebaseapp.com",
  projectId: "fir-auth-1132-3750c",
  storageBucket: "fir-auth-1132-3750c.appspot.com",
  messagingSenderId: "855785863892",
  appId: "1:855785863892:web:9547c118da6f55dee31941",
  measurementId: "G-DSNL453FKT"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
