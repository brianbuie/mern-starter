import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ThemeProvider from '@app/Theme/ThemeProvider';
import App from '@app/App';
import { AccountProvider } from '@app/Account/AccountContext';

const history = createBrowserHistory();

ReactDOM.render(
  <AccountProvider>
    <Router history={history}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </AccountProvider>,
  document.getElementById('root')
);
