import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvDGaUomhybGuKs_bnH7EUtz7CLIDLwhU",
  authDomain: "mos-char.firebaseapp.com",
  projectId: "mos-char",
  storageBucket: "mos-char.appspot.com",
  messagingSenderId: "602020937962",
  appId: "1:602020937962:web:724d768139f460976b9793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db}