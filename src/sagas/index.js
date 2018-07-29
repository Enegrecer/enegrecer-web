import { all } from 'redux-saga/effects';
import { observaListaDenuncias } from './denuncia/listar';
import { handleCriarDenunciaRequisicao } from './denuncia/criar';
import { visualizarDenuncia } from './denuncia/visualizar';

export default function* rootSaga() {
  yield all([
    visualizarDenuncia(),
    observaListaDenuncias(),
    handleCriarDenunciaRequisicao()
  ]);
}
