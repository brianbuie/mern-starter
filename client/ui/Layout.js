import React from 'react';
import Nav from '@app/ui/Nav';
import AccountLink from '@app/account/AccountLink';

const Layout = ({ children }) => (
  <div>
    <Nav />
    {children}
  </div>
);

export default Layout;
