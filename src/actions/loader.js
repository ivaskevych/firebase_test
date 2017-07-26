import ActionTypes from '../constants';

export {
  showLoader,
  hideLoader
};

function showLoader() {
  return {
    type: ActionTypes.SHOW_LOADER,
    payload: true
  };
}

function hideLoader() {
  return {
    type: ActionTypes.HIDE_LOADER,
    payload: false
  };
}

// function getArtistSuccess(artist) {
//   return {
//     type: ActionTypes.GET_ARTIST_SUCCESS,
//     payload: artist
//   };
// }
//
// function getArtistError(error) {
//   return {
//     type: ActionTypes.GET_ARTIST_ERROR,
//     payload: {
//         error
//     }
//   };
// }
//
// function getArtist(artistId) {
//     const API = ActionTypes.API_BASE + 'artists/' + artistId;
//
//     return dispatch => {
//         dispatch(showLoader());
//         return get(API)
//             .then(response => {
//                 if(response.status !== 200) return Promise.reject(response);
//
//                 return response.json()
//                     .then(data => {
//                         dispatch(hideLoader());
//                         return dispatch(getArtistSuccess(data));
//                     });
//             })
//             .catch(error => {
//                 dispatch(hideLoader());
//
//                 return error.text()
//                     .then(text => dispatch(getArtistError(text)));
//             })
//     }
// }
