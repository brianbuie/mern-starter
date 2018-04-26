import { Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import ResetPasswordForm from './ResetPasswordForm';
import NotFound from '@app/Pages/NotFound';

const AccountRouter = ({ user }) =>
  user ? (
    <Redirect to="/" />
  ) : (
    <Switch>
      <Route path="/account/login" component={LoginForm} />
      <Route path="/account/register" component={RegisterForm} />
      <Route path="/account/forgot-password" component={ForgotPasswordForm} />
      <Route path="/account/reset-password" component={ResetPasswordForm} />
      <Route component={NotFound} />
    </Switch>
  );

export default connect(({ user }) => ({ user }))(AccountRouter);
