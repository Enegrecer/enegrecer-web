import { all } from 'redux-saga/effects';
import { observaListaDenuncias } from './denuncia/listar';
import { handleCriarDenunciaRequisicao } from './denuncia/criar';

export default function* rootSaga() {
  yield all([
    observaListaDenuncias(),
    handleCriarDenunciaRequisicao()
  ]);
}
