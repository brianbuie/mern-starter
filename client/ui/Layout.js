import React from 'react';
import Nav from '@app/ui/Nav';
import ToastDisplay from '@app/Toasts/ToastDisplay';

const Layout = ({ children }) => (
  <div>
    <Nav />
    <ToastDisplay />
    {children}
  </div>
);

export default Layout;
