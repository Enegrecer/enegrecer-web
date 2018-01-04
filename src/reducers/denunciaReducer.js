
import {
  CRIAR_DENUNCIA_SUCESSO
} from '../actions';

const initialState = {
  denunciaCadastradaComSucesso: false
};

export default function denuncias(state = initialState, action) {
  switch (action.type) {
    case CRIAR_DENUNCIA_SUCESSO:
      return Object.assign({}, state, { denunciaCadastradaComSucesso: true });
    default:
      return state;
  }
}
