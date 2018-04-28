import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import denunciaComSucessoReducer from './denunciaComSucessoReducer';

export default combineReducers({
  denunciaComSucessoReducer,
  form: formReducer
});
