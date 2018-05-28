import { FETCH_DENUNCIAS_SUCCESS } from '../../actions/listarDenunciasActions';

const estadoInicial = { denuncias: [] };

export default function listaDenunciasReducer(state = estadoInicial, action) {
  switch (action.type) {
    case FETCH_DENUNCIAS_SUCCESS:
      return {
        ...state,
        denuncias: action.payload
      };
    default:
      return state;
  }
}
