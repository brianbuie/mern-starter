import React from 'react';
import { Link } from 'react-router-dom';
import AccountForm from './AccountForm';
import Form from '@app/ui/Form';
import { post } from '@app/utils/fetch';

// prettier-ignore
const fields = [
  { name: 'username', label: 'Username', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
  { name: 'confirm-password', label: 'Again', type: 'password' }
];

const Register = () => (
  <AccountForm>
    <h1>Register</h1>
    <Form fields={fields} submit={data => post('/api/account/register', data)} />
    <Link to="/account/login">Login</Link>
  </AccountForm>
);

export default Register;
