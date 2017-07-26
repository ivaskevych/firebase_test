import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        Header component
        <ul>
          <li><NavLink exact activeClassName="active" to="/">Home Page</NavLink></li>
          <li><NavLink exact activeClassName="active" to="/auth">Auth Page</NavLink></li>
        </ul>
    </div>
  );
};

export default Header;
