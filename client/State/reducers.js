import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import user from '@app/Account/AccountState';
import toasts from '@app/Toasts/ToastsState';

export default combineReducers({
  router,
  toasts,
  user
});
