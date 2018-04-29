import { routerReducer } from 'react-router-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

const history = createHistory();

import user from '@app/Account/AccountState';
import toasts from '@app/Toasts/ToastsState';

class State extends React.Component {
  componentDidMount = async () => {
    const states = {
      router: {
        reducer: routerReducer
      },
      toasts,
      user
    };

    const initialState = await Promise.all(
      Object.entries(states).map(async ([name, { getInitialState }]) => {
        if (!getInitialState) return;
        const state = await getInitialState();
        return { [name]: state };
      })
    ).then(state => state.filter(state => !!state).reduce((state, entry) => ({ ...state, ...entry }), {}));

    const reducers = Object.entries(states).reduce((main, [name, { reducer }]) => {
      main[name] = reducer;
      return main;
    }, {});

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      combineReducers(reducers),
      initialState,
      composeEnhancers(applyMiddleware(thunkMiddleware, routerMiddleware(history)))
    );
    this.setState({
      store
    });
  };

  render = () =>
    this.state ? (
      <Provider store={this.state.store}>
        <ConnectedRouter history={history}>{this.props.children}</ConnectedRouter>
      </Provider>
    ) : null;
}

export default State;
