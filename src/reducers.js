import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as authReducer } from './modules/auth';

export default combineReducers({
  auth: authReducer,
  router: routerReducer,
});
