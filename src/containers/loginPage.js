import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import * as firebase from 'firebase';
import { withRouter } from 'react-router';

class LoginPage extends PureComponent {

  componentDidMount() {
    this.initApp();
  }

  toggleSignIn() {
    if (firebase.auth().currentUser) {
      // [START signout]
      firebase.auth().signOut();
      localStorage.removeItem('session');
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
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authwithemail]
    }
    document.getElementById('quickstart-sign-in').disabled = true;
  }

  sendEmailVerification() {
    // [START sendemailverification]
    firebase.auth().currentUser.sendEmailVerification().then(function() {
      // Email Verification sent!
      // [START_EXCLUDE]
      console.log('Email Verification Sent!');
      // [END_EXCLUDE]
    });
    // [END sendemailverification]
  }

  initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    // let _this = this;
    firebase.auth().onAuthStateChanged(function(user) {
      // [START_EXCLUDE silent]
      document.getElementById('quickstart-verify-email').disabled = true;
      // [END_EXCLUDE]
      if (user) {
        // User is signed in.
          // let displayName = user.displayName;
          // let email = user.email;
          // let emailVerified = user.emailVerified;
          // let photoURL = user.photoURL;
          // let isAnonymous = user.isAnonymous;
          // let uid = user.uid;
          // let providerData = user.providerData;
          localStorage.setItem('session', JSON.stringify(user));
          // return _this.props.history.push('/dashboard')

        // [START_EXCLUDE]
        document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
        document.getElementById('quickstart-sign-in').textContent = 'Sign out';
        document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
        if (!user.emailVerified) {
          document.getElementById('quickstart-verify-email').disabled = false;
        }
        // [END_EXCLUDE]
      } else {
        // User is signed out.
        // [START_EXCLUDE]
        localStorage.removeItem('session');
        document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
        document.getElementById('quickstart-sign-in').textContent = 'Sign in';
        document.getElementById('quickstart-account-details').textContent = 'null';
        // [END_EXCLUDE]
      }
      // [START_EXCLUDE silent]
      document.getElementById('quickstart-sign-in').disabled = false;
      // [END_EXCLUDE]
    });
    // [END authstatelistener]
    document.getElementById('quickstart-sign-in').addEventListener('click', this.toggleSignIn, false);
    document.getElementById('quickstart-verify-email').addEventListener('click', this.sendEmailVerification, false);
  }

  render() {
    return (
        <main>
          <div>
            {/* Container for the demo */}
            <div>
              <div>
                <h2>Firebase Email &amp; Password Authentication</h2>
              </div>
              <div>
                <p>Enter an email and password below and either sign in to an existing account or sign up</p>

                <input type="text" id="email" name="email" placeholder="Email"/>
                &nbsp;&nbsp;&nbsp;
                <input type="password" id="password" name="password" placeholder="Password"/>
                <br/><br/>
                <button disabled id="quickstart-sign-in" name="signin">Sign In</button>
                &nbsp;&nbsp;&nbsp;
                <button disabled id="quickstart-verify-email" name="verify-email">Send Email Verification</button>

                {/* Container where we'll display the user details */}
                <div>
                  Firebase sign-in status: <span id="quickstart-sign-in-status">Unknown</span>
                  <div>Firebase auth <code>currentUser</code> object value:</div>
                  <pre><code id="quickstart-account-details">null</code></pre>
                </div>
              </div>
            </div>

          </div>
        </main>
    );
  }
}

const LoginPageContainer = withRouter(connect(null, null)(LoginPage));

export default LoginPageContainer;
