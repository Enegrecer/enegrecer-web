import { createAction } from 'redux-actions';

export const REQUEST_CREATE_COMPLAINT = 'REQUEST_CREATE_COMPLAINT';
export const SUCCESS_CREATE_COMPLAINT = 'SUCCESS_CREATE_COMPLAINT';
export const FAILURE_CREATE_COMPLAINT = 'FAILURE_CREATE_COMPLAINT';
export const requestCreateComplaint = createAction(REQUEST_CREATE_COMPLAINT);
export const successCreateComplaint = createAction(SUCCESS_CREATE_COMPLAINT);
export const failureCreateComplaint = createAction(FAILURE_CREATE_COMPLAINT);
