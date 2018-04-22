import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Theme from '@app/Theme';
import App from '@app/App';
import { AccountProvider } from '@app/account/AccountContext';

const history = createBrowserHistory();

ReactDOM.render(
  <AccountProvider>
    <Router history={history}>
      <Theme>
        <App />
      </Theme>
    </Router>
  </AccountProvider>,
  document.getElementById('root')
);
