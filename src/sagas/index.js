import { fork } from 'redux-saga/effects';
import auth from './auth';
import complaint from './complaint';

export default function* rootSaga() {
  yield fork(auth);
  yield fork(complaint);
}
