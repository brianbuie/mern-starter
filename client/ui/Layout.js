import React from 'react';
import Nav from '@app/Nav/Nav';
import ToastsContainer from '@app/Toasts/ToastsContainer';

const Layout = ({ children }) => (
  <div>
    <Nav />
    <ToastsContainer />
    {children}
  </div>
);

export default Layout;
