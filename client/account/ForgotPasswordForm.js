import { push } from 'react-router-redux';
import Link from '@app/utils/Link';
import Form from '@app/Forms/Form';
import AccountForm from './AccountForm';
import { forgotPassword } from './AccountState';
import { newToast } from '@app/Toasts/ToastsState';

const ForgotPasswordForm = ({ submit, newToast, redirect }) => (
  <AccountForm>
    <h1>Forgot Password</h1>
    <Form
      fields={[{ name: 'email', label: 'Email', type: 'email' }]}
      submit={submit}
      onError={err => newToast({ ...err, type: 'error' })}
      onSuccess={data => {
        newToast({ ...data, type: 'success' });
        redirect('/account/login');
      }}
    />
    <Link to="/account/login">Login</Link>
  </AccountForm>
);

// prettier-ignore
export default connect(
  null, 
  dispatch => ({ 
    submit: data => dispatch(forgotPassword(data)),
    newToast: data => dispatch(newToast(data)),
    redirect: url => dispatch(push(url))
  })
)(ForgotPasswordForm);
