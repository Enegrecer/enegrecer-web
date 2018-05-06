import { fork } from 'redux-saga/effects';
import denuncia from './denuncia/denuncias';
import login from './login/loginSaga';

export default function* rootSaga() {
  yield fork(denuncia);
  yield fork(login);
}
