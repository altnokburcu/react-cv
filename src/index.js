import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDJxrNdlWYVDXujcIYGPB6sH7V5LcJnqTY",
    authDomain: "mycvreact.firebaseapp.com",
    databaseURL: "https://mycvreact.firebaseio.com",
    projectId: "mycvreact",
    storageBucket: "mycvreact.appspot.com",
    messagingSenderId: "332464741756"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
