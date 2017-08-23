import rootSaga, { handleRequestSignIn, signIn } from './auth';
import { fork, call, put, take } from 'redux-saga/effects';
import { REQUEST_SIGN_IN, successSignIn, failureSignIn } from '../actions';

jest.mock('../utils/firebaseUtils');

describe('Auth Sagas', () => {
    describe('Sign in', () => {
        it('should login with success', () => {
            const saga = handleRequestSignIn();
            const mockAction = {
                type: REQUEST_SIGN_IN,
                payload: {
                    email: "pass",
                    password: "any"
                }
            };
            
            expect(saga.next().value).toEqual(take(REQUEST_SIGN_IN));
            expect(saga.next(mockAction).value).toEqual(call(signIn, mockAction));
            expect(saga.next({user: 'any'}).value).toEqual(put(successSignIn({user: 'any'})))
        });

        it('should login with success', () => {
            const saga = handleRequestSignIn();
            const mockAction = {
                type: REQUEST_SIGN_IN,
                payload: {
                    email: "error",
                    password: "userNotFound"
                }
            };
            
            expect(saga.next().value).toEqual(take(REQUEST_SIGN_IN));
            expect(saga.next(mockAction).value).toEqual(call(signIn, mockAction));
            expect(saga.next({error: 'any'}).value).toEqual(put(failureSignIn({error: 'any'})))
        });

        it('should login with success', () => {
            const saga = rootSaga();
            
            expect(saga.next().value).toEqual(fork(handleRequestSignIn));
            expect(saga.next().done).toBe(true);
        });
    });
});
