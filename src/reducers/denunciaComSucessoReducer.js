
import {
  CRIAR_DENUNCIA_SUCESSO
} from '../actions/criarDenunciaActions';


export default function denunciaCriadaComSucesso(state = {}, action) {
  switch (action.type) {
    case CRIAR_DENUNCIA_SUCESSO:
      return Object.assign({}, state, { denunciaCadastradaComSucesso: true });
    default:
      return state;
  }
}
