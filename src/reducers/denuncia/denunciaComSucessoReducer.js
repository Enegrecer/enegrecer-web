import { CRIAR_DENUNCIA_SUCESSO, LIMPA_ESTADO_ULTIMA_DENUNCIA } from '../../actions/criarDenunciaActions';

const initialState = { denunciaCadastradaComSucesso: false };

export default function denunciaCriadaComSucesso(state = initialState, action) {
  switch (action.type) {
    case CRIAR_DENUNCIA_SUCESSO:
      return Object.assign({}, state, { denunciaCadastradaComSucesso: true });
    case LIMPA_ESTADO_ULTIMA_DENUNCIA:
      return Object.assign({}, state, { denunciaCadastradaComSucesso: false });
    default:
      return state;
  }
}
