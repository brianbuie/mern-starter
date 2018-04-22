import React from 'react';

export const Account = React.createContext('account');

export class AccountProvider extends React.Component {
  state = {
    user: null
  };

  login = user => this.setState({ user });

  logout = () => this.setState({ user: null });

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
