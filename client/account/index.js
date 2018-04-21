import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import NotFound from '@app/pages/NotFound';

const Account = () => (
  <Switch>
    <Route path="/account/login" component={Login} />
    <Route path="/account/register" component={Register} />
    <Route path="/account/forgot-password" component={ForgotPassword} />
    <Route path="/account/reset-password" component={ResetPassword} />
    <Route component={NotFound} />
  </Switch>
);

export default Account;
