import { fork, call, put, take } from 'redux-saga/effects';
import firebaseApp from '../utils/firebaseUtils';
import { push } from 'react-router-redux'
import {
  REQUEST_SIGN_IN, successSignIn, failureSignIn,
} from '../actions';

export function signIn(action) {
  return firebaseApp.auth()
    .signInWithEmailAndPassword(action.payload.email, action.payload.password)
    .then(user => ({ user }))
    .catch(error => ({ error }));
}

export function* handleRequestSignIn() {
  while (true) {
    const action = yield take(REQUEST_SIGN_IN);
    const { user, error } = yield call(signIn, action);
    if (user && !error) {
      yield put(successSignIn({ user }));
      yield put(push('/painel/denuncias/nova'));
    } else {
      yield put(failureSignIn({ error }));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRequestSignIn);
}
