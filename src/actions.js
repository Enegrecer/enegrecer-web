import { createAction } from 'redux-actions';

export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';
export const SUCCESS_SIGN_IN = 'SUCCESS_SIGN_IN';
export const FAILURE_SIGN_IN = 'FAILURE_SIGN_IN';
export const requestSignIn = createAction(REQUEST_SIGN_IN);
export const successSignIn = createAction(SUCCESS_SIGN_IN);
export const failureSignIn = createAction(FAILURE_SIGN_IN);


export const REQUEST_CREATE_COMPLAINT = 'REQUEST_CREATE_COMPLAINT';
export const SUCCESS_CREATE_COMPLAINT = 'SUCCESS_CREATE_COMPLAINT';
export const FAILURE_CREATE_COMPLAINT = 'FAILURE_CREATE_COMPLAINT';
export const requestCreateComplaint = createAction(REQUEST_CREATE_COMPLAINT);
export const successCreateComplaint = createAction(SUCCESS_SIGN_IN);
export const failureCreateComplaint = createAction(FAILURE_SIGN_IN);
