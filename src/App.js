import React, { Component } from 'react';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: {},
      input: ''
    };
  }

  componentDidMount() {
    this.initApp();

    const rootRef = firebase.database().ref();
    const postsRef = rootRef.child('posts');

    postsRef.on('value', snap => {
      console.log(snap.val())
      this.setState({
        posts: snap.val()
      })
    })
  }


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
        // [START_EXCLUDE]
        document.getElementById('add-post').disabled = false;
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
        document.getElementById('add-post').disabled = true;
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

  renderPosts() {
    return Object.keys(this.state.posts).map(key =>
      <div key={ key }>
        <div>{ key }</div>
        <div>{ this.state.posts[key].title }</div>
      </div>
    )
  }

  writeNewPost() {
    // A post entry.
    let postData = {
      title: this.state.input,
    };

    // Get a key for a new Post.
    let newPostKey = firebase.database().ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    let updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + newPostKey] = postData;

    return firebase.database().ref().update(updates)
      .catch(err => console.log(err));
  }

  handleAdd() {
    this.state.input.trim().length && this.writeNewPost();
    this.setState({
      input: ''
    })
  }

  handleInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.posts &&  this.renderPosts()}
        <input type="text" value={ this.state.input } onChange={ this.handleInput.bind(this) }/>
        <button id="add-post" onClick={ this.handleAdd.bind(this) }>Add</button>

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
      </div>
    );
  }
}

export default App;
