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
    const rootRef = firebase.database().ref();
    const postsRef = rootRef.child('posts');

    postsRef.on('value', snap => {
      console.log(snap.val())
      this.setState({
        posts: snap.val()
      })
    })
  }

  renderPosts() {
    return Object.keys(this.state.posts).map(key => 
      <div key={ key }>
        <div>{ key }</div>
        <div>{ this.state.posts[key].title }</div>
      </div>
    )
  }

  writeNewPost = () => {
    // A post entry.
    var postData = {
      title: this.state.input,
    };

    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);
  }

  handleAdd() {
    this.writeNewPost();
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
        <button onClick={ this.handleAdd.bind(this) }>Add</button>
      </div>
    );
  }
}

export default App;
