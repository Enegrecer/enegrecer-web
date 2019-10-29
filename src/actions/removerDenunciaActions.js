import { createAction } from 'redux-actions';

export const REMOVER_DENUNCIA_REQUISICAO = 'REMOVER_DENUNCIA_REQUISICAO';
export const REMOVER_DENUNCIA_SUCESSO = 'REMOVER_DENUNCIA_SUCESSO';
export const REMOVER_DENUNCIA_FALHA = 'REMOVER_DENUNCIA_FALHA';

export const removerDenuncia = createAction(REMOVER_DENUNCIA_REQUISICAO);
export const removerDenunciaSucesso = createAction(REMOVER_DENUNCIA_SUCESSO);
export const removerDenunciaFalha = createAction(REMOVER_DENUNCIA_FALHA);
