import { combineReducers } from 'redux';
import { reducer as complaintsReducer } from './modules/complaints';
import { reducer as authReducer } from './modules/auth';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  complaints: complaintsReducer,
  auth: authReducer,
  router: routerReducer,
});
