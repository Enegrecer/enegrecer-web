import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import denunciaComSucessoReducer from './denuncia/denunciaComSucessoReducer';

export default combineReducers({
  denunciaComSucessoReducer,
  form: formReducer
});
;