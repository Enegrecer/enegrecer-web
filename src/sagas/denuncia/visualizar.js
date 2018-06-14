import { takeEvery, put, call } from 'redux-saga/effects';
import { ref } from '../../utils/firebaseUtils';
import { BUSCAR_DENUNCIA_POR_ID, buscaDenunciaPorIdSucesso }
  from '../../actions/visualizarDenunciaActions';

async function recuperaDenunciaPorIdDoFirebase(denunciaId) {
  const denunciaResponse = await ref.child('denuncias').child(denunciaId).orderByKey().once('value');
  const denuncia = denunciaResponse.val();

  const pessoasEnvolvidas = await ref.child('pessoasEnvolvidas')
    .child(denunciaId).once('value');
  denuncia.agressor = pessoasEnvolvidas.val().agressor;
  denuncia.denunciante = pessoasEnvolvidas.val().denunciante;
  denuncia.vitima = pessoasEnvolvidas.val().vitima;

  return denuncia;
}

function* buscaDenunciaPorId(action) {
  try {
    const denuncia = yield call(() => recuperaDenunciaPorIdDoFirebase(action.payload));
    yield put(buscaDenunciaPorIdSucesso(denuncia));
  } catch (error) {
    console.error(error);
    // yield put({ type: LISTA_DENUNCIAS_ERRO });
  }
}

export function* visualizarDenuncia() {
  yield takeEvery(BUSCAR_DENUNCIA_POR_ID, buscaDenunciaPorId);
}
