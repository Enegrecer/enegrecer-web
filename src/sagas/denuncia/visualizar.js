import { takeEvery, put, call } from 'redux-saga/effects';
import { ref } from '../../utils/firebaseUtils';
import { BUSCAR_DENUNCIA_POR_ID, buscaDenunciaPorIdSucesso }
  from '../../actions/visualizarDenunciaActions';

async function recuperaDenunciaPorIdDoFirebase(denunciaId) {
  const denunciaResponse = await ref.child('denuncias').child(denunciaId).orderByKey().once('value');
  return denunciaResponse.val();
}

function* buscaDenunciaPorId(action) {
  try {
    const denuncia = yield call(() => recuperaDenunciaPorIdDoFirebase(action.payload));
    yield put(buscaDenunciaPorIdSucesso(denuncia));
  } catch (error) {
    console.error(error);
  }
}

export function* visualizarDenuncia() {
  yield takeEvery(BUSCAR_DENUNCIA_POR_ID, buscaDenunciaPorId);
}
