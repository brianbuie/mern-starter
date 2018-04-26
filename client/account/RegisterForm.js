import Link from '@app/utils/Link';
import Form from '@app/Forms/Form';
import AccountForm from './AccountForm';
import { register } from './AccountState';
import { newToast } from '@app/Toasts/ToastsState';

const RegisterForm = ({ submit, newToast }) => (
  <AccountForm>
    <h1>Register</h1>
    <Form
      fields={[
        { name: 'username', label: 'Username', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'confirm-password', label: 'Again', type: 'password' }
      ]}
      action="/api/account/register"
      submit={submit}
      onError={err => newToast({ ...err, type: 'error' })}
    />
    <Link to="/account/login">Login</Link>
  </AccountForm>
);

// prettier-ignore
export default connect(
  null, 
  dispatch => ({ 
    submit: data => dispatch(register(data)),
    newToast: data => dispatch(newToast(data))
  })
)(RegisterForm);
