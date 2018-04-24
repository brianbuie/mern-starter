import React from 'react';
import { AccountProvider } from '@app/Account/AccountState';
import { ToastProvider } from '@app/Toasts/ToastState';
import ThemeProvider from '@app/Theme/ThemeProvider';

const contexts = [AccountProvider, ToastProvider, ThemeProvider];

const State = ({ children }) => contexts.reverse().reduce((acc, cur) => React.createElement(cur, null, acc), children);

export default State;
