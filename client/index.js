import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from '@app/App';
import Context from '@app/Context';

const history = createBrowserHistory();

ReactDOM.render(
  <Context>
    <Router history={history}>
      <App />
    </Router>
  </Context>,
  document.getElementById('root')
);
