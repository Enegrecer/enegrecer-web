import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import denunciaComSucessoReducer from './denuncia/denunciaComSucessoReducer';
import listaDenunciaReducer from './denuncia/listaDenunciaReducer';
import visualizarDenunciaReducer from './denuncia/visualizarDenunciaReducer';

export default combineReducers({
  denunciaComSucessoReducer,
  listaDenunciaReducer,
  visualizarDenunciaReducer,
  form: formReducer
});
