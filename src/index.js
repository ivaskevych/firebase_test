import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC-Lu90dyHgXlsFMDCg5B5iApgWFIPgGf0",
    authDomain: "hnes-portfolio.firebaseapp.com",
    databaseURL: "https://hnes-portfolio.firebaseio.com",
    projectId: "hnes-portfolio",
    storageBucket: "hnes-portfolio.appspot.com",
    messagingSenderId: "970018884532"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
