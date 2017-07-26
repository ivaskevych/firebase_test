import React from 'react';
import LoaderContainer from './loader';
import Header from '../components/Header';

const App = ({ children }) => (
  <div className="app-wrapper">
    <Header />
    <div className="content-wrapper">
      { children }
    </div>
    <LoaderContainer />
  </div>
);

export default App;
