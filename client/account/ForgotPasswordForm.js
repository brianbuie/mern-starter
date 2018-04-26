import React from 'react';
import { connect } from 'react-redux';
import Link from '@app/utils/Link';
import Form from '@app/Forms/Form';
import AccountForm from './AccountForm';
import { forgotPassword } from './AccountState';
import { newToast } from '@app/Toasts/ToastsState';

const ForgotPasswordForm = ({ forgotPassword, newToast }) => (
  <AccountForm>
    <h1>Forgot Password</h1>
    <Form
      fields={[{ name: 'email', label: 'Email', type: 'email' }]}
      submit={forgotPassword}
      onError={err => newToast({ ...err, type: 'error' })}
    />
    <Link to="/account/login">Login</Link>
  </AccountForm>
);

// prettier-ignore
export default connect(
  null, 
  dispatch => ({ 
    forgotPassword: data => dispatch(forgotPassword(data)),
    newToast: data => dispatch(newToast(data))
  })
)(ForgotPasswordForm);
