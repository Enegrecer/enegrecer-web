import { LOGADO_COM_SUCESSO, DESLOGADO_COM_SUCESSO } from "../../actions/logarActions";

const estadoInicial = { logado: false };

export default function logadoComSucesso(state = estadoInicial, action) {
    switch (action.type) {
      case LOGADO_COM_SUCESSO:
        return Object.assign({}, state, { logadoComSucesso: true });
      case DESLOGADO_COM_SUCESSO:
        return Object.assign({}, state, { deslogadoComSucesso: false });
      default:
        return state;
    }
  }
  