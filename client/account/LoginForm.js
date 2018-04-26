import React from 'react';
import { connect } from 'react-redux';
import Link from '@app/utils/Link';
import Form from '@app/Forms/Form';
import AccountForm from './AccountForm';
import { login } from './AccountState';
import { newToast } from '@app/Toasts/ToastsState';

const LoginForm = ({ login, newToast }) => (
  <AccountForm>
    <h1>Login</h1>
    <Form
      fields={[{ name: 'username', label: 'Username', type: 'text' }, { name: 'password', label: 'Password', type: 'password' }]}
      submit={login}
      onError={err => newToast({ ...err, type: 'error' })}
    />
    <Link to="/account/register">Register</Link>
    <Link to="/account/forgot-password">Forgot Password</Link>
  </AccountForm>
);

// prettier-ignore
export default connect(
  null, 
  dispatch => ({ 
    login: data => dispatch(login(data)),
    newToast: data => dispatch(newToast(data))
  })
)(LoginForm);
