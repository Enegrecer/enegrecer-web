import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import denunciasReducer from './denunciaReducer';


export default combineReducers({
  router: routerReducer, denunciasReducer
});
