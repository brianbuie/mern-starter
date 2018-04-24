import React from 'react';
import { post, get } from '@app/utils/fetch';

export const Account = React.createContext('account');

export class AccountProvider extends React.Component {
  state = {
    user: null
  };

  componentWillMount = async () => {
    const { data } = await get('/api/account');
    if (data.displayName) this.setState({ user: data });
  };

  login = user => this.setState({ user });

  logout = async () => {
    await post('/api/account/logout');
    this.setState({ user: null });
  };

  render = () => (
    <Account.Provider
      value={{
        state: this.state,
        actions: {
          login: this.login,
          logout: this.logout
        }
      }}
    >
      {this.props.children}
    </Account.Provider>
  );
}
