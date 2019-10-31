import { takeEvery, put, call } from 'redux-saga/effects';
import { ref } from '../../utils/firebaseUtils';
import { LISTA_DENUNCIAS_ERRO, LISTA_DENUNCIAS, listaDenunciasSucesso } from '../../actions/listarDenunciasActions';

async function recuperaDenunciasDoFirebase() {
  const denunciasResponse = await ref.child('denuncias').orderByKey().once('value');
  return denunciasResponse.val();
}

function* listaDenuncias() {
  try {
    const denuncias = yield call(recuperaDenunciasDoFirebase);
    yield put(listaDenunciasSucesso(denuncias));
  } catch (error) {
    yield put({ type: LISTA_DENUNCIAS_ERRO });
  }
}

export function* observaListaDenuncias() {
  yield takeEvery(LISTA_DENUNCIAS, listaDenuncias);
}
