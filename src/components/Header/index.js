import React from 'react';
import { NavLink } from 'react-router-dom';
import * as firebase from 'firebase';

const Header = () => {
  const renderLinks = firebase.auth().currentUser ?
        ( <ul>
            <li><NavLink exact activeClassName="active" to="/">Home Page</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/login">Login Page</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/dashboard">Dashboard(protected route)</NavLink></li>
        </ul>
        )
        :
        (
          <ul>
            <li><NavLink exact activeClassName="active" to="/">Home Page</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/login">Login Page</NavLink></li>
          </ul>
        )

  return (
    <div>
        Header component
          { renderLinks }
    </div>
  );
};

export default Header;
