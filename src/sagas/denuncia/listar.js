import { takeEvery, put, call } from 'redux-saga/effects';
import { ref } from '../../utils/firebaseUtils';
import { LISTA_DENUNCIAS_ERRO, LISTA_DENUNCIAS, listaDenunciasSucesso } from '../../actions/listarDenunciasActions';

async function recuperaDenunciasDoFirebase() {
  const denunciasResponse = await ref.child('denuncias').orderByKey().once('value');
  const denuncias = denunciasResponse.val();

  const idsDenuncias = Object.keys(denuncias);
  const promisesPessoasEnvolvidas = idsDenuncias
    .map(idDenuncia => ref
      .child('pessoasEnvolvidas')
      .child(idDenuncia).once('value'));

  const pessoasEnvolvidas = await Promise.all(promisesPessoasEnvolvidas);

  pessoasEnvolvidas.forEach((pessoaEnvolvida) => {
    denuncias[pessoaEnvolvida.key].agressor = pessoaEnvolvida.val().agressor;
    denuncias[pessoaEnvolvida.key].denunciante = pessoaEnvolvida.val().denunciante;
    denuncias[pessoaEnvolvida.key].vitima = pessoaEnvolvida.val().vitima;
  });

  return denuncias;
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
