import auth from '../services/auth';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = () => ({
  type: LOGIN_USER_SUCCESS
});

export const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  error
});

export const loginUser = (username, password) => dispatch => {
  dispatch(loginUserRequest());

  return auth
    .authenticate(username, password)
    .then(() => dispatch(loginUserSuccess()), err => dispatch(loginUserFailure(err)));
};
