import React from 'react';
import Form from 'components/Form';
import { post } from 'utils/fetch';

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

const Login = () => (
  <div>
    <h1>Login</h1>
    <Form fields={loginFields} submit={data => post('/api/auth/login', data)} />
    <h1>Register</h1>
    <Form fields={registerFields} submit={data => post('/api/auth/register', data)} />
  </div>
);

export default Login;
