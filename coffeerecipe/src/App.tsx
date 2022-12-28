import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from "./Routers";
import "./App.css";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

function App() {
  return (
      <div>
          <Routers/>
    </div>
  );
}

export default App;
