// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg9J9EeLJR7ST8c2Fh-2O5QMX0JLg8b18",
  authDomain: "jamal-boiler-plate.firebaseapp.com",
  projectId: "jamal-boiler-plate",
  storageBucket: "jamal-boiler-plate.appspot.com",
  messagingSenderId: "1057692604502",
  appId: "1:1057692604502:web:1012f3da0dd01a90c0c3f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;