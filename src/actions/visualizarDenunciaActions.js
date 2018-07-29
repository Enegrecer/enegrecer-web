import { createAction } from 'redux-actions';

export const BUSCAR_DENUNCIA_POR_ID = 'BUSCAR_DENUNCIA_POR_ID';
export const BUSCA_DENUNCIAS_POR_ID_SUCESSO = 'BUSCA_DENUNCIAS_POR_ID_SUCESSO';
export const DETALHES_DENUNCIA = 'DETALHES_DENUNCIA';

export const buscaDenunciaPorId = createAction(BUSCAR_DENUNCIA_POR_ID);
export const buscaDenunciaPorIdSucesso = createAction(BUSCA_DENUNCIAS_POR_ID_SUCESSO);
export const detalhesDenuncia = createAction(DETALHES_DENUNCIA);
