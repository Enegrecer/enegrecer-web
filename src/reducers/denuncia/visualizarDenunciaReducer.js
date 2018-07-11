import { BUSCA_DENUNCIAS_POR_ID_SUCESSO } from '../../actions/visualizarDenunciaActions';

const estadoInicial = { denuncias: [] };

export default function visualizarDenunciaReducer(state = estadoInicial, action) {
  switch (action.type) {
    case BUSCA_DENUNCIAS_POR_ID_SUCESSO:
      return {
        ...state,
        denuncia: action.payload
      };
    default:
      return state;
  }
}
