// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflix-clone-f1dce.firebaseapp.com",
  projectId: "netflix-clone-f1dce",
  storageBucket: "netflix-clone-f1dce.appspot.com",
  messagingSenderId: "226078674526",
  appId: "1:226078674526:web:724a45c34283f7c3326ecf",
  measurementId: "G-XJJE9MQ0Y3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);