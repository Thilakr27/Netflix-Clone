import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIAwm8Sy5djwgToFeJCFTpRKyBoHPMsuY",
  authDomain: "netflix-clone-981ad.firebaseapp.com",
  projectId: "netflix-clone-981ad",
  storageBucket: "netflix-clone-981ad.appspot.com",
  messagingSenderId: "168233153848",
  appId: "1:168233153848:web:972c8afcf50b54685e7dcd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" ")); // Display the specific error message
  }
};

// Logout function
const logout = () => {
  signOut(auth);
};

// Export functions and objects using named exports
export { auth, db, signup, login, logout };
