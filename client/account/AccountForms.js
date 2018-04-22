import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import Link from '@app/utils/Link';
import { Account } from './AccountContext';
import Form from '@app/ui/Form';
import { post } from '@app/utils/fetch';

const AccountForm = styled.div`
  max-width: 500px;
  margin: 200px auto;
  text-align: center;
`;

export const LoginForm = () => (
  <Account.Consumer>
    {({ actions: { login } }) => (
      <AccountForm>
        <h1>Login</h1>
        <Form
          fields={[
            { name: 'username', label: 'Username', type: 'text' },
            { name: 'password', label: 'Password', type: 'password' }
          ]}
          submit={async data => {
            const user = await post('/api/account/login', data).then(res => res.json());
            if (user) login(user);
          }}
        />
        <Link to="/account/register">Register</Link>
        <Link to="/account/forgot-password">Forgot Password</Link>
      </AccountForm>
    )}
  </Account.Consumer>
);

export const RegisterForm = () => (
  <AccountForm>
    <h1>Register</h1>
    <Form
      fields={[
        { name: 'username', label: 'Username', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'confirm-password', label: 'Again', type: 'password' }
      ]}
      submit={data => post('/api/account/register', data)}
    />
    <Link to="/account/login">Login</Link>
  </AccountForm>
);

export const ForgotPasswordForm = () => (
  <AccountForm>
    <h1>Forgot Password</h1>
    <Form
      fields={[{ name: 'email', label: 'Email', type: 'email' }]}
      submit={data => post('/api/account/forgot-password', data)}
    />
    <Link to="/account/login">Login</Link>
  </AccountForm>
);

export const ResetPasswordForm = ({ location }) => (
  <AccountForm>
    <h1>Reset Password</h1>
    <Form
      fields={[
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'confirm-password', label: 'Again', type: 'password' },
        { name: 'token', type: 'hidden', value: queryString.parse(location.search).token }
      ]}
      submit={data => post('/api/account/reset-password', data)}
    />
    <Link to="/account/login">Login</Link>
  </AccountForm>
);
