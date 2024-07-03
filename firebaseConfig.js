// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH-7EftjiwnhMgWGBTb-XCFr0r44ZkRxo",
  authDomain: "datana-a3dfa.firebaseapp.com",
  projectId: "datana-a3dfa",
  storageBucket: "datana-a3dfa.appspot.com",
  messagingSenderId: "94140522315",
  appId: "1:94140522315:web:4566243e05cb576b7d52ce",
  measurementId: "G-YRS2XSSYRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);