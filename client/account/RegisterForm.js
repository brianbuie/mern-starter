import React from 'react';
import { connect } from 'react-redux';
import Link from '@app/utils/Link';
import Form from '@app/Forms/Form';
import AccountForm from './AccountForm';
import { register } from './AccountState';

const RegisterForm = ({ register }) => (
  <AccountForm>
    <h1>Register</h1>
    <Form
      fields={[
        { name: 'username', label: 'Username', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'confirm-password', label: 'Again', type: 'password' }
      ]}
      action="/api/account/register"
      submit={register}
    />
    <Link to="/account/login">Login</Link>
  </AccountForm>
);

// prettier-ignore
export default connect(
  null, 
  dispatch => ({ register: data => dispatch(register(data)) })
)(RegisterForm);
