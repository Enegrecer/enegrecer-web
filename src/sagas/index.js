import { fork } from 'redux-saga/effects';
import complaint from './denuncias';

export default function* rootSaga() {
  yield fork(complaint);
}
