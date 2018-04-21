import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '@app/pages/Home';
import NotFound from '@app/pages/NotFound';
import Account from '@app/account';

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/account" component={Account} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
