// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4lzCCj_CDKtOHLJMQM0CLXg_yb1CaYwc",
  authDomain: "dragon-news-react-auth-625d4.firebaseapp.com",
  projectId: "dragon-news-react-auth-625d4",
  storageBucket: "dragon-news-react-auth-625d4.appspot.com",
  messagingSenderId: "662344091568",
  appId: "1:662344091568:web:5ad067dc99ccf432d43875"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app