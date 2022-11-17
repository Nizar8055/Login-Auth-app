import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBxTan2gScbStq3PO76c1le_guEa-obXTI",
  authDomain: "react-authenticatio.firebaseapp.com",
  projectId: "react-authenticatio",
  storageBucket: "react-authenticatio.appspot.com",
  messagingSenderId: "872148370192",
  appId: "1:872148370192:web:ad23787d584a0562eb1b95",
  measurementId: "G-Y06M6GNB4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;