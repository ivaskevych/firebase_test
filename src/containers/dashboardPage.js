import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import * as firebase from 'firebase';

class DashboardPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };

    this.rootRef = firebase.database().ref();
    this.postsRef = this.rootRef.child('posts');
  }

  componentDidMount() {
    this.postsRef.on('value', snap => {
      this.setState({
        posts: snap.val()
      })
    })
  }

  componentWillUnmount() {
    this.postsRef.off();
  }

  renderPosts() {
    return Object.keys(this.state.posts).map(key =>
      <div key={ key }>
        <div>{ key }</div>
        <div>{ this.state.posts[key].title }</div>
      </div>
    )
  }

  render() {
    return (
      <div>
        Hello from DASHBOARD Page
        <div>FOR AUTHENTICATED USER ONLY</div>

        { this.state.posts &&  this.renderPosts()}

      </div>
    );
  }
}


// const mapStateToProps = (state) => ({
//   playlists: state.browse.featuredPlaylists,
//   categories: state.browse.categories,
//   releases: state.browse.newReleases,
// });
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getFeaturedPlaylists: () => dispatch(getFeaturedPlaylists()),
//     getBrowseCategories: () => dispatch(getBrowseCategories()),
//     getNewReleases: () => dispatch(getNewReleases()),
//   };
// }
//
const DashboardPageContainer = connect(null, null)(DashboardPage);

export default DashboardPageContainer;
