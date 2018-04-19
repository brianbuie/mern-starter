import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Theme from 'Theme';
import App from 'App';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Theme>
      <App />
    </Theme>
  </Router>,
  document.getElementById('root')
);
