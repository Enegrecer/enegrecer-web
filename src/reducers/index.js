import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import denunciaComSucessoReducer from './denuncia/denunciaComSucessoReducer';
import listaDenunciaReducer from './denuncia/listaDenunciaReducer';

export default combineReducers({
  denunciaComSucessoReducer,
  listaDenunciaReducer,
  form: formReducer
});
