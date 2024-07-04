import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBYz0PhnZGSKK888TolMJXNnizD0tF0Sn0",
  authDomain: "uzum-clone-uzb.firebaseapp.com",
  projectId: "uzum-clone-uzb",
  storageBucket: "uzum-clone-uzb.appspot.com",
  messagingSenderId: "333974490158",
  appId: "1:333974490158:web:470201ef652df0f07f63bf",
};

const app = initializeApp(firebaseConfig);

//auth
export const auth = getAuth(app)

//db
export const db = getFirestore(app)

