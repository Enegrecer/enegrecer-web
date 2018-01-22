import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import denunciaComSucessoReducer from './denunciaComSucessoReducer';

export default combineReducers({
  router: routerReducer, denunciaComSucessoReducer,
});
