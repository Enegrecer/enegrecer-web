import { LISTA_DENUNCIAS_SUCCESSO } from '../../actions/listarDenunciasActions';

const estadoInicial = { denuncias: [] };

export default function listaDenunciasReducer(state = estadoInicial, action) {
  switch (action.type) {
    case LISTA_DENUNCIAS_SUCCESSO:
      return {
        ...state,
        denuncias: action.payload
      };
    default:
      return state;
  }
}
