import { fork, call, put, take } from 'redux-saga/effects';
import { push } from 'react-router-redux'
import rootSaga, { handleRequestSignIn, signIn } from './auth';
import { REQUEST_SIGN_IN, successSignIn, failureSignIn } from '../actions';

jest.mock('../utils/firebaseUtils');

describe('Auth Sagas', () => {
  describe('Sign in', () => {
    let saga;

    function generateRequestSignInMockAction(email, password) {
      return {
        type: REQUEST_SIGN_IN,
        payload: {
          email,
          password,
        },
      };
    }

    beforeEach(() => {
      saga = handleRequestSignIn();
    });

    it('should login with success', () => {
      const mockRequestSignInAction = generateRequestSignInMockAction('pass', 'any');

      expect(saga.next().value)
        .toEqual(take(REQUEST_SIGN_IN));
      expect(saga.next(mockRequestSignInAction).value)
        .toEqual(call(signIn, mockRequestSignInAction));
      expect(saga.next({ user: 'any' }).value)
        .toEqual(put(successSignIn({ user: 'any' })));
      expect(saga.next().value)
        .toEqual(put(push('/painel/denuncias/nova')));
    });

    it('should faill login', () => {
      const mockRequestSignInAction = generateRequestSignInMockAction('error', 'userNotFound');

      expect(saga.next().value)
        .toEqual(take(REQUEST_SIGN_IN));
      expect(saga.next(mockRequestSignInAction).value)
        .toEqual(call(signIn, mockRequestSignInAction));
      expect(saga.next({ error: 'any' }).value)
        .toEqual(put(failureSignIn({ error: 'any' })));
    });
  });

  describe('Root Sagas', () => {
    it('should contain handleRequestSignIn', () => {
      const saga = rootSaga();

      expect(saga.next().value).toEqual(fork(handleRequestSignIn));
      expect(saga.next().done).toBe(true);
    });
  });
});
