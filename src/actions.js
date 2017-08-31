import { createAction } from 'redux-actions';

export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';
export const SUCCESS_SIGN_IN = 'SUCCESS_SIGN_IN';
export const FAILURE_SIGN_IN = 'FAILURE_SIGN_IN';
export const requestSignIn = createAction(REQUEST_SIGN_IN);
export const successSignIn = createAction(SUCCESS_SIGN_IN);
export const failureSignIn = createAction(FAILURE_SIGN_IN);
