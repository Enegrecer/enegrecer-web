import { createAction } from 'redux-actions';

export const LOGAR = 'LOGAR'
export const LOGADO_COM_SUCESSO = 'LOGADO_COM_SUCESSO';
export const FALHA_AO_LOGAR = 'FALHA_AO_LOGAR';

export const DESLOGAR = 'DESLOGAR'
export const DESLOGADO_COM_SUCESSO = 'DESLOGADO_COM_SUCESSO';
export const FALHA_AO_DESLOGAR = 'FALHA_AO_DESLOGAR';

export const SINCRONIZAR_USUARIO = 'SINCRONIZAR_USUARIO';

export const logar = createAction(LOGAR);
export const logadoComSucesso = createAction(LOGADO_COM_SUCESSO);
export const falhaAoLogar = createAction(FALHA_AO_LOGAR);

export const deslogar = createAction(DESLOGAR);
export const deslogadoComSucesso = createAction(DESLOGADO_COM_SUCESSO);
export const falhaAoDesogar = createAction(FALHA_AO_DESLOGAR);

export const sincronizarUsuario = createAction(SINCRONIZAR_USUARIO);