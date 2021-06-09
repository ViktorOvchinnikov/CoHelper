import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-vDDIPhXXtY_1lvdmFC7bnDx8RhfdiG0",
    authDomain: "cohelper-b777e.firebaseapp.com",
    projectId: "cohelper-b777e",
    storageBucket: "cohelper-b777e.appspot.com",
    messagingSenderId: "296656652071",
    appId: "1:296656652071:web:33e2f9e58fb990e9284b02",
    measurementId: "G-NVC4EVFHG4"
  };

  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
