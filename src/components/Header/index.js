import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = ({isAuthenticated}) => {
  const renderLinks = isAuthenticated ?
        ( <ul>
            <li><NavLink exact activeClassName="active" to="/">Home Page</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/login">Login Page</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/dashboard">Dashboard(protected route)</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/add-post">Add Post(protected route)</NavLink></li>
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
    <div className="navigation">
      { renderLinks }
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.email
});
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getFeaturedPlaylists: () => dispatch(getFeaturedPlaylists())
//   };
// }
//

export default connect(mapStateToProps, null)(Header);
