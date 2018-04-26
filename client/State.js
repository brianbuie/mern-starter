import { routerReducer as router } from 'react-router-redux';
import user from '@app/Account/AccountState';
import toasts from '@app/Toasts/ToastsState';
const reducers = {
  router,
  toasts,
  user
};

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers(reducers),
  initialState,
  composeEnhancers(applyMiddleware(thunkMiddleware, routerMiddleware(history)))
);

import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
const State = ({ children }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>{children}</ConnectedRouter>
  </Provider>
);

export default State;
