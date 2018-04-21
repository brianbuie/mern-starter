import React from 'react';
import Form from '@app/components/Form';
import queryString from 'query-string';
import { post } from '@app/utils/fetch';

// prettier-ignore
const loginFields = [
  { name: 'username', label: 'Username', type: 'text' },
  { name: 'password', label: 'Password', type: 'password' }
];

const registerFields = [
  { name: 'username', label: 'Username', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
  { name: 'confirm-password', label: 'Again', type: 'password' }
];

// prettier-ignore
const forgotPasswordFields = [
  { name: 'email', label: 'Email', type: 'email' }
];

const resetPasswordFields = token => [
  { name: 'password', label: 'Password', type: 'password' },
  { name: 'confirm-password', label: 'Again', type: 'password' },
  { name: 'token', type: 'hidden', value: token }
];

const Login = ({ location }) => (
  <div>
    <h1>Login</h1>
    <Form fields={loginFields} submit={data => post('/api/account/login', data)} />
    <h1>Register</h1>
    <Form fields={registerFields} submit={data => post('/api/account/register', data)} />
    <h1>Forgot Password</h1>
    <Form fields={forgotPasswordFields} submit={data => post('/api/account/forgot-password', data)} />
    <h1>Reset Password</h1>
    <Form
      fields={resetPasswordFields(queryString.parse(location.search).token)}
      submit={data => post('/api/account/reset-password', data)}
    />
  </div>
);

export default Login;
