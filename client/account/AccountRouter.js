import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Account } from './AccountContext';
import { LoginForm, RegisterForm, ForgotPasswordForm, ResetPasswordForm } from './AccountForms';
import NotFound from '@app/pages/NotFound';

const AccountRouter = () => (
  <Account.Consumer>
    {({ state }) =>
      state.user ? (
        <Redirect to="/" />
      ) : (
        <Switch>
          <Route path="/account/login" component={LoginForm} />
          <Route path="/account/register" component={RegisterForm} />
          <Route path="/account/forgot-password" component={ForgotPasswordForm} />
          <Route path="/account/reset-password" component={ResetPasswordForm} />
          <Route component={NotFound} />
        </Switch>
      )
    }
  </Account.Consumer>
);

export default AccountRouter;
