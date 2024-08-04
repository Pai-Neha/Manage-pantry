// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCvs8S7PrwDCPRCi_qrATy7E0zFpO_gQsM",
  authDomain: "inventory-management-5c8fb.firebaseapp.com",
  projectId: "inventory-management-5c8fb",
  storageBucket: "inventory-management-5c8fb.appspot.com",
  messagingSenderId: "604851191610",
  appId: "1:604851191610:web:485cf725baae1ec41e5a03",
  measurementId: "G-KSZVGW9Z8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };