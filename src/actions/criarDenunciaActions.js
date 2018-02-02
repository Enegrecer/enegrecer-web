import { createAction } from 'redux-actions';

export const CRIAR_DENUNCIA_REQUISICAO = 'CRIAR_DENUNCIA_REQUISICAO';
export const CRIAR_DENUNCIA_SUCESSO = 'CRIAR_DENUNCIA_SUCESSO';
export const CRIAR_DENUNCIA_FALHA = 'CRIAR_DENUNCIA_FALHA';
export const criarDenunciaRequisicao = createAction(CRIAR_DENUNCIA_REQUISICAO);
export const criarDenunciaSucesso = createAction(CRIAR_DENUNCIA_SUCESSO);
export const criarDenunciaFalha = createAction(CRIAR_DENUNCIA_FALHA);

