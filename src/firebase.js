
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBmBY8MP1HEwAB70EfgdN1j6ttJrhGLPAY",
  authDomain: "movie-app-78f31.firebaseapp.com",
  projectId: "movie-app-78f31",
  storageBucket: "movie-app-78f31.appspot.com",
  messagingSenderId: "876186748635",
  appId: "1:876186748635:web:c28c9b52df11b63d292efe",
  measurementId: "G-BXFM9BF31L",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
