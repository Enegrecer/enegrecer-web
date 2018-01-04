import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { denuncias } from './denunciaReducer';

export default combineReducers({
  router: routerReducer, denuncias
});
