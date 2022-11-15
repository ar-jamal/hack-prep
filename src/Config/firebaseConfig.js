// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhZ_T8JUieFSwf9KGt0cukNSfTMZs1Yvc",
  authDomain: "hackathon-prep-7397f.firebaseapp.com",
  projectId: "hackathon-prep-7397f",
  storageBucket: "hackathon-prep-7397f.appspot.com",
  messagingSenderId: "949720788428",
  appId: "1:949720788428:web:4ca106d62ee5b49d1f4169",
  measurementId: "G-SRK9KQQSHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;