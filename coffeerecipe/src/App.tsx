import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from "./Routers";
import "./App.css";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import { Variants } from 'framer-motion';
import { createContext } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3qugKRPrV2kEiQyANeQbbwF-1IgxvTxw",
  authDomain: "coffeerecipe-bc78a.firebaseapp.com",
  projectId: "coffeerecipe-bc78a",
  storageBucket: "coffeerecipe-bc78a.appspot.com",
  messagingSenderId: "1053950689700",
  appId: "1:1053950689700:web:60393b38ed104c8a054131",
  measurementId: "G-87HRHK3YYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const pageChangeMotion = createContext<Variants>({
  animate:{x: 0, opacity: 1, scale: 1,transition:{duration: 0.5, ease: "easeInOut",}},
  initial:{x: "20%", opacity: 0, scale: 0.8,transition:{duration: 0.5, ease: "easeInOut",}},
  exit:{x: "-20%", opacity: 0, scale: 0.8,transition:{duration: 0.5, ease: "easeInOut",}},
});

export const clickButtonMotion = createContext<Variants>({
  animate:{scale: 1,transition:{ duration: 0.5, ease: "easeInOut",}},
  initial:{scale: 0,transition:{ duration: 0.5, ease: "easeInOut",}},
  exit:{scale: 0,transition:{ duration: 0.5, ease: "easeInOut",}},
  whileTap:{ scale: 0.8, transition: { duration: 0.1 }},
});
export const submitButtonMotion = createContext<Variants>({
  animate:{scale: 1,transition:{ duration: 0.5, ease: "easeInOut",}},
  initial:{scale: 0,transition:{ duration: 0.5, ease: "easeInOut",}},
  exit:{scale: 0,transition:{ duration: 0.5, ease: "easeInOut",}},
  whileTap:{ y: "-10%", transition: { duration: 0.1 } },
});

export const CardMotion = createContext<Variants>({
  whileHover:{scale: 1.07,transition: { duration: 0.2 },}
});

function App() {
  return (
      <div>
          <Routers/>
    </div>
  );
}

export default App;
