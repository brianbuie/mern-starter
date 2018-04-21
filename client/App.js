import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Login from 'pages/Login';

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
