import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAQvnYOcPsjdD3s0scK46HEsHWZ5ZLgpJ8",
  authDomain: "cohelper-de019.firebaseapp.com",
  projectId: "cohelper-de019",
  storageBucket: "cohelper-de019.appspot.com",
  messagingSenderId: "655174740057",
  appId: "1:655174740057:web:663f1107902d5bbd4ca948",
  measurementId: "G-DRNRNLDCD8"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));
