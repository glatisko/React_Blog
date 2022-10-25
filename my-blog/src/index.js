import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALfJkA6edpJo4XQ_jl4sgzWYnAvgovuqU",
  authDomain: "my-react-blog-eb5a5.firebaseapp.com",
  projectId: "my-react-blog-eb5a5",
  storageBucket: "my-react-blog-eb5a5.appspot.com",
  messagingSenderId: "577711453415",
  appId: "1:577711453415:web:87f5823fccda39fce29e42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
