import React from 'react';
import styled from 'styled-components';
import Link from '@app/utils/Link';
import AccountLink from '@app/account/AccountLink';

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nav = () => (
  <Menu>
    <Link to="/">Home</Link>
    <AccountLink />
  </Menu>
);

export default Nav;
