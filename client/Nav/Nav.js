import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from '@app/utils/Link';
import { logout } from '@app/Account/AccountState';

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nav = ({ user, logout }) => (
  <Menu>
    <Link to="/">Home</Link>
    {user ? (
      <div>
        {user.displayName}
        <Link onClick={logout}>Logout</Link>
      </div>
    ) : (
      <Link to="/account/login">Login</Link>
    )}
  </Menu>
);

export default connect(
  ({ user }) => ({ user }),
  dispatch => ({
    logout: () => dispatch(logout())
  })
)(Nav);
