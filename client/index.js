import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from '@app/App';
import State from '@app/State';

const history = createBrowserHistory();

ReactDOM.render(
  <State>
    <Router history={history}>
      <App />
    </Router>
  </State>,
  document.getElementById('root')
);
