import ActionTypes from '../constants';

export default function (state = null, action) {
  switch(action.type) {
    case ActionTypes.SHOW_LOADER:
      return action.payload
    case ActionTypes.HIDE_LOADER:
      return action.payload
    default:
      return state;
  }
}
 