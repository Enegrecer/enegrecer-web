import { combineReducers } from 'redux';
import { reducer as complaintsReducer } from './modules/complaints';
import { reducer as authReducer } from './modules/auth';
import { reducer as userReducer } from './modules/users';

export default combineReducers({
  complaints: complaintsReducer,
  auth: authReducer,
  user: userReducer
});
