
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbRTiNdTY_8r9cpfJ-v_LManNxpFQjq8w",
  authDomain: "cgproject-f1d09.firebaseapp.com",
  projectId: "cgproject-f1d09",
  storageBucket: "cgproject-f1d09.appspot.com",
  messagingSenderId: "4776407691",
  appId: "1:4776407691:web:5acda81ee56aed14db5a8e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }; // Aquí exporta la instancia de Firestore (db) junto con la instancia de Firebase (app)
