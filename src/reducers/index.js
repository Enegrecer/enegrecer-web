import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import denunciaComSucessoReducer from './denuncia/denunciaComSucessoReducer';
import loginReducer from './login/loginReducer'

export default combineReducers({
  loginReducer,
  denunciaComSucessoReducer,
  form: formReducer
});
