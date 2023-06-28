// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAqkXY1ROmHPpIv9hcMBbmQMMGN-xPhgQ",
  authDomain: "lab6-b23ae.firebaseapp.com",
  projectId: "lab6-b23ae",
  storageBucket: "lab6-b23ae.appspot.com",
  messagingSenderId: "721457180256",
  appId: "1:721457180256:web:b4d3e33dcff5eba4031d05"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export default firebaseApp;