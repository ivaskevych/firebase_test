import React, { Component } from 'react';
import * as firebase from 'firebase';

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };
  }

  pushPost() {
    // A post entry.
    let postData = {
      title: this.state.title,
      body: this.state.body
    };

    // Get a key for a new Post.
    let newPostKey = firebase.database().ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    let updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + newPostKey] = postData;

    return firebase.database().ref().update(updates)
      .then( () => console.log('New post added.'))
      .catch(err => console.log(err));
  }

  handleAddPost() {
    this.state.title.trim().length && this.state.body.trim().length && this.pushPost();
    this.setState({
      title: '',
      body: ''
    })
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div>
          Title:
          <input type="text" name="title" value={ this.state.title } onChange={ this.handleInput.bind(this) }/>
        </div>
        <div>
          Body:
          <textarea name="body" value={ this.state.body } onChange={ this.handleInput.bind(this) }></textarea>
        </div>
        <br/>
        <button id="add-post" onClick={ this.handleAddPost.bind(this) }>Add</button>
      </div>
    );
  }
}

export default AddPost;
