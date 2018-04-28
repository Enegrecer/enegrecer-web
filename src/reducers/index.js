import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import denunciaComSucessoReducer from './denuncia/denunciaComSucessoReducer';
import logadoComSucessoReducer from './login/logadoComSucessoReducer'

export default combineReducers({
  logadoComSucessoReducer,
  denunciaComSucessoReducer,
  form: formReducer
});
