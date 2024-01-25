import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBRKI1mRh_0ZaC442Ekwq6ZzCWEWR8M2HI",
    authDomain: "clone-twitter-23af1.firebaseapp.com",
    projectId: "clone-twitter-23af1",
    storageBucket: "clone-twitter-23af1.appspot.com",
    messagingSenderId: "948498956965",
    appId: "1:948498956965:web:e89d378ef433f93821c34c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);