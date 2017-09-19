import { createAction } from 'redux-actions';


export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';
export const SUCCESS_SIGN_IN = 'SUCCESS_SIGN_IN';
export const FAILURE_SIGN_IN = 'FAILURE_SIGN_IN';
export const requestSignIn = createAction(REQUEST_SIGN_IN);
export const successSignIn = createAction(SUCCESS_SIGN_IN);
export const failureSignIn = createAction(FAILURE_SIGN_IN);

export const CRIAR_DENUNCIA_REQUISICAO = 'CRIAR_DENUNCIA_REQUISICAO';
export const CRIAR_DENUNCIA_SUCESSO = 'CRIAR_DENUNCIA_SUCESSO';
export const CRIAR_DENUNCIA_FALHA = 'CRIAR_DENUNCIA_FALHA';
export const criarDenunciaRequisicao = createAction(CRIAR_DENUNCIA_REQUISICAO);
export const criarDenunciaSucesso = createAction(CRIAR_DENUNCIA_SUCESSO);
export const criarDenunciaFalha = createAction(CRIAR_DENUNCIA_FALHA);
