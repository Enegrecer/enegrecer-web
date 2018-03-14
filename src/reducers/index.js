import { combineReducers } from 'redux';
import denunciaComSucessoReducer from './denunciaComSucessoReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  denunciaComSucessoReducer,
  form: formReducer
});
