import React from 'react';
import { Link } from 'react-router-dom';
import AccountForm from './AccountForm';
import Form from '@app/ui/Form';
import { post } from '@app/utils/fetch';

// prettier-ignore
const fields = [
  { name: 'email', label: 'Email', type: 'email' }
];

const ForgotPassword = () => (
  <AccountForm>
    <h1>Forgot Password</h1>
    <Form fields={fields} submit={data => post('/api/account/forgot-password', data)} />
    <Link to="/account/login">Login</Link>
  </AccountForm>
);

export default ForgotPassword;
