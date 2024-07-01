// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDNGLDG2vbinve8EsaH3nc-IUHJkNApaRU",
  authDomain: "uzum-clone-uz.firebaseapp.com",
  projectId: "uzum-clone-uz",
  storageBucket: "uzum-clone-uz.appspot.com",
  messagingSenderId: "69868978940",
  appId: "1:69868978940:web:532b97065cea8b12920d79",
  measurementId: "G-GYPN0V9MH5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
