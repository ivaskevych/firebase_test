export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  user
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS
});
