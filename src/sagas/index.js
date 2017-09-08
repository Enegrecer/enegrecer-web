import { fork } from 'redux-saga/effects';
import auth from './auth';
import complaint from './denuncias';

export default function* rootSaga() {
  yield fork(auth);
  yield fork(complaint);
}
