import React from 'react';
import { connect } from 'react-redux';
import Link from '@app/utils/Link';
import Form from '@app/Forms/Form';
import AccountForm from './AccountForm';
import { forgotPassword } from './AccountState';

const ForgotPasswordForm = ({ forgotPassword }) => (
  <AccountForm>
    <h1>Forgot Password</h1>
    <Form fields={[{ name: 'email', label: 'Email', type: 'email' }]} submit={forgotPassword} />
    <Link to="/account/login">Login</Link>
  </AccountForm>
);

// prettier-ignore
export default connect(
  null, 
  dispatch => ({ forgotPassword: data => dispatch(forgotPassword(data)) })
)(ForgotPasswordForm);
