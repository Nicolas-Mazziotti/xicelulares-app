import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOdrn79DO79runbyRiyfnnFgSGfsEWxYo",
  authDomain: "xicelulares.firebaseapp.com",
  projectId: "xicelulares",
  storageBucket: "xicelulares.appspot.com",
  messagingSenderId: "800832993745",
  appId: "1:800832993745:web:d736e76fb77f4629d948f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
