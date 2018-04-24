import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '@app/ui/Layout';
import Home from '@app/Pages/Home';
import NotFound from '@app/Pages/NotFound';
import AccountRouter from '@app/Account/AccountRouter';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/account" component={AccountRouter} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
