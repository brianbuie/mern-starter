import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '@app/pages/Home';
import NotFound from '@app/pages/NotFound';
import Login from '@app/pages/Login';

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
