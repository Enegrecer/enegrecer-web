import { combineReducers } from 'redux';
import { reducer as complaintsReducer } from './modules/complaints';

export default combineReducers({
  complaints: complaintsReducer
});
