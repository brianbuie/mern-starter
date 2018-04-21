import React from 'react';
import { Link } from 'react-router-dom';
import AccountForm from './AccountForm';
import Form from '@app/ui/Form';
import { post } from '@app/utils/fetch';

// prettier-ignore
const fields = [
  { name: 'username', label: 'Username', type: 'text' },
  { name: 'password', label: 'Password', type: 'password' }
];

const Login = () => (
  <AccountForm>
    <h1>Login</h1>
    <Form fields={fields} submit={data => post('/api/account/login', data)} />
    <Link to="/account/register">Register</Link>
    <Link to="/account/forgot-password">Forgot Password</Link>
  </AccountForm>
);

export default Login;
