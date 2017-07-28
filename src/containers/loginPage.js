import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import * as firebase from 'firebase';
import { withRouter } from 'react-router';

class LoginPage extends PureComponent {

  toggleSignIn() {
    if (firebase.auth().currentUser) {
      // [START signout]
      firebase.auth().signOut();
      // [END signout]
    } else {
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      if (email.length < 4) {
        console.log('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        console.log('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START authwithemail]
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          console.log('Wrong password.');
        } else {
          console.log(errorMessage);
        }
        console.log(error);
      });
    }
  }

  render() {
    return (
      <div>
          <p>Enter an email and password below and either sign in to an existing account</p>

          <input type="text" id="email" name="email" placeholder="Email"/>
          &nbsp;&nbsp;&nbsp;
          <input type="password" id="password" name="password" placeholder="Password"/>
          <br/><br/>
          <button id="quickstart-sign-in" name="signin" onClick={this.toggleSignIn.bind(this)}>{ firebase.auth().currentUser ? 'Sign Out' : 'Sign In'}</button>
      </div>
    );
  }
}

const LoginPageContainer = withRouter(connect(null, null)(LoginPage));

export default LoginPageContainer;
