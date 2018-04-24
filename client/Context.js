import React from 'react';
import { AccountProvider } from '@app/Account/AccountContext';
import { ToastProvider } from '@app/Toasts/ToastContext';
import ThemeProvider from '@app/Theme/ThemeProvider';

const contexts = [AccountProvider, ToastProvider, ThemeProvider];

const Context = ({ children }) => contexts.reverse().reduce((acc, cur) => React.createElement(cur, null, acc), children);

export default Context;
