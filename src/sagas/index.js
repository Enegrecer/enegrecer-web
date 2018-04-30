import { fork } from 'redux-saga/effects';
import denuncia from './denuncia/denuncias';

export default function* rootSaga() {
  yield fork(denuncia);
}
