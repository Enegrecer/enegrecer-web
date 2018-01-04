import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { denunciaReducer }  from 'denunciaReducer';

export default combineReducers({
  router: routerReducer,
});
