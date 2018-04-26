import React from 'react';
import { connect } from 'react-redux';
import Link from '@app/utils/Link';
import Form from '@app/Forms/Form';
import AccountForm from './AccountForm';
import { login } from './AccountState';

const LoginForm = ({ login }) => (
  <AccountForm>
    <h1>Login</h1>
    <Form
      fields={[{ name: 'username', label: 'Username', type: 'text' }, { name: 'password', label: 'Password', type: 'password' }]}
      submit={login}
    />
    <Link to="/account/register">Register</Link>
    <Link to="/account/forgot-password">Forgot Password</Link>
  </AccountForm>
);

// prettier-ignore
export default connect(
  null, 
  dispatch => ({ login: data => dispatch(login(data)) })
)(LoginForm);
