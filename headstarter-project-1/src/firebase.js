// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfhW_-hJeR2t8BIzdiRiKq7DL99VQzlMM",
  authDomain: "resumeparser-f4206.firebaseapp.com",
  projectId: "resumeparser-f4206",
  storageBucket: "resumeparser-f4206.appspot.com",
  messagingSenderId: "245221369607",
  appId: "1:245221369607:web:e06a167d91512b8e9807a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
