import { postLoud, getLoud } from '@app/utils/fetch';

export const login = data => dispatch => dispatch(postLoud('LOGIN', '/api/account/login', data));

export const register = data => dispatch => dispatch(postLoud('REGISTER', '/api/account/register', data));

export const forgotPassword = data => dispatch => dispatch(postLoud('FORGOT_PASSWORD', '/api/account/forgot-password', data));

export const resetPassword = data => dispatch => dispatch(postLoud('RESET_PASSWORD', '/api/account/reset-password', data));

export const logout = () => dispatch => dispatch(postLoud('LOGOUT', '/api/account/logout'));

export default function reducer(state = null, action) {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN_SUCCESS':
      return payload;
    case 'REGISTER_SUCCESS':
      return payload;
    case 'RESET_PASSWORD_SUCCESS':
      return payload;
    case 'LOGOUT_SUCCESS':
      return null;
    default:
      return state;
  }
}
