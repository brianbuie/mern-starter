import React from 'react';
import Link from '@app/utils/Link';
import { Account } from './AccountContext';

const AccountLink = () => (
  <Account.Consumer>
    {({ state, actions }) =>
      state.user ? (
        <div>
          {state.user.displayName}
          <Link onClick={actions.logout}>Logout</Link>
        </div>
      ) : (
        <Link to="/account/login">Login</Link>
      )
    }
  </Account.Consumer>
);

export default AccountLink;
