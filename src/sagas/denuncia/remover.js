import { takeEvery, call } from 'redux-saga/effects';
import { ref } from '../../utils/firebaseUtils';
import { REMOVER_DENUNCIA_REQUISICAO }
  from '../../actions/removerDenunciaActions';

async function removeDenunciaPorId(idDenuncia) {
  await ref.child('denuncias').child(idDenuncia).remove();
}

function* removeDenuncia(action) {
  try {
    yield call(() => removeDenunciaPorId(action.payload.idDenuncia));
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export function* removerDenuncia() {
  yield takeEvery(REMOVER_DENUNCIA_REQUISICAO, removeDenuncia);
}
