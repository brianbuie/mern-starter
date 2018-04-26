import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Link from '@app/utils/Link';
import Form from '@app/Forms/Form';
import AccountForm from './AccountForm';
import { resetPassword } from './AccountState';

const ResetPasswordForm = ({ location, resetPassword }) => (
  <AccountForm>
    <h1>Reset Password</h1>
    <Form
      fields={[
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'confirm-password', label: 'Again', type: 'password' },
        { name: 'token', type: 'hidden', value: queryString.parse(location.search).token }
      ]}
      submit={resetPassword}
    />
    <Link to="/account/login">Login</Link>
  </AccountForm>
);

// prettier-ignore
export default connect(
  ({ router: { location } }) => ({ location }),
  dispatch => ({ resetPassword: data => dispatch(resetPassword(data)) })
)(ResetPasswordForm);
