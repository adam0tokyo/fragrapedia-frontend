// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPKY0zWliCyfU33rsukENzrWiNZtRUFbo",
  authDomain: "fragrapedia.firebaseapp.com",
  projectId: "fragrapedia",
  storageBucket: "fragrapedia.appspot.com",
  messagingSenderId: "130028796031",
  appId: "1:130028796031:web:29ffde94ae9a6c2907674a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);