import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

class HomePage extends PureComponent {
  render() {
    return (
      <div>
        Hello from Home Page
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
const HomePageContainer = connect(null, null)(HomePage);

export default HomePageContainer;
