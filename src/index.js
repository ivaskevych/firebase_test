import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import Root from './containers/root';
import configureStore from './store';

const config = {
    apiKey: "AIzaSyC-Lu90dyHgXlsFMDCg5B5iApgWFIPgGf0",
    authDomain: "hnes-portfolio.firebaseapp.com",
    databaseURL: "https://hnes-portfolio.firebaseio.com",
    projectId: "hnes-portfolio",
    storageBucket: "hnes-portfolio.appspot.com",
    messagingSenderId: "970018884532"
};

const initialStore = {
    loader: false
};
const store = configureStore(initialStore);

console.log(store.getState())

firebase.initializeApp(config);

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
