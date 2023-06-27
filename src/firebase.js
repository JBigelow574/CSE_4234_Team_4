// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxWxbXd8OycZ1WIDhSgNFKpfpce-Ic8Uk",
    authDomain: "lab6test-d40a6.firebaseapp.com",
    projectId: "lab6test-d40a6",
    storageBucket: "lab6test-d40a6.appspot.com",
    messagingSenderId: "751426146791",
    appId: "1:751426146791:web:e9b6c19d957675ee85ed42"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;