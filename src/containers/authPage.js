import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

class AuthPage extends PureComponent {
  render() {
    return (
      <div>
        Hello from Auth page
      </div>
    );
  }
}

const AuthPageContainer = connect(null, null)(AuthPage);

export default AuthPageContainer;
