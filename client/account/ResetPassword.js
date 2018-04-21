import React from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import AccountForm from './AccountForm';
import Form from '@app/ui/Form';
import { post } from '@app/utils/fetch';

// prettier-ignore
const fields = token => [
  { name: 'password', label: 'Password', type: 'password' },
  { name: 'confirm-password', label: 'Again', type: 'password' },
  { name: 'token', type: 'hidden', value: token }
];

const ResetPassword = ({ location }) => (
  <AccountForm>
    <h1>Reset Password</h1>
    <Form fields={fields(queryString.parse(location.search).token)} submit={data => post('/api/account/reset-password', data)} />
    <Link to="/account/login">Login</Link>
  </AccountForm>
);

export default ResetPassword;
