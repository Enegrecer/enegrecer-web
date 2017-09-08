import { createAction } from 'redux-actions';


export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';
export const SUCCESS_SIGN_IN = 'SUCCESS_SIGN_IN';
export const FAILURE_SIGN_IN = 'FAILURE_SIGN_IN';
export const requestSignIn = createAction(REQUEST_SIGN_IN);
export const successSignIn = createAction(SUCCESS_SIGN_IN);
export const failureSignIn = createAction(FAILURE_SIGN_IN);

export const CRIAR_DENUNCIA_REQUISICAO = 'CRIAR_DENUNCIA_REQUISICAO';
export const DENUNCIA_CRIADA_SUCESSO = 'DENUNCIA_CRIADA_SUCESSO';
export const FALHA_CRIACAO_DENUNCIA = 'FALHA_CRIACAO_DENUNCIA';
export const criarDenunciaRequisicao = createAction(CRIAR_DENUNCIA_REQUISICAO);
export const denunciaCriadaSucesso = createAction(DENUNCIA_CRIADA_SUCESSO);
export const falhaCriacaoDenuncia = createAction(FALHA_CRIACAO_DENUNCIA);
