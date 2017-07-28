import {LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS} from '../actions/auth';

const getInitialState = () => ({});

function auth (state = getInitialState(), action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS: {
      return JSON.parse(JSON.stringify(action.user, null, '  '));
    }

    case LOGOUT_USER_SUCCESS: {
      return {};
    }

    default: {
      return state;
    }
  }
}

export default auth;
