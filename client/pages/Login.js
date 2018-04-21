import React from 'react';
import Form from '@app/components/Form';
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

const Login = () => (
  <div>
    <h1>Login</h1>
    <Form fields={loginFields} submit={data => post('/api/account/login', data)} />
    <h1>Register</h1>
    <Form fields={registerFields} submit={data => post('/api/account/register', data)} />
  </div>
);

export default Login;
