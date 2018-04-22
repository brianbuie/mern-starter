import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '@app/ui/Layout';
import Home from '@app/pages/Home';
import NotFound from '@app/pages/NotFound';
import AccountRouter from '@app/account/AccountRouter';

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
