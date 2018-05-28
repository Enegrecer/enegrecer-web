import { createAction } from 'redux-actions';

export const LISTA_DENUNCIAS = 'LISTA_DENUNCIAS';
export const LISTA_DENUNCIAS_SUCCESSO = 'LISTA_DENUNCIAS_SUCCESSO';
export const LISTA_DENUNCIAS_ERRO = 'LISTA_DENUNCIAS_ERRO';

export const listaDenuncias = createAction(LISTA_DENUNCIAS);
export const listaDenunciasSucesso = createAction(LISTA_DENUNCIAS_SUCCESSO);

