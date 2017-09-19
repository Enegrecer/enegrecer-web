import { fork, call, put, take } from 'redux-saga/effects';
import * as firebase from 'firebase';
import firebaseApp from '../utils/firebaseUtils';

import {
  CRIAR_DENUNCIA_REQUISICAO, criarDenunciaSucesso,
} from '../actions';

export function criarDenuncia(acao) {
  const ref = firebaseApp.database().ref();
  const refDenuncias = ref.child('denuncias');

  const idDenuncia = refDenuncias.push({
    idCategoria: acao.payload.idCategoria,
    dataHoraCriacao: firebase.database.ServerValue.TIMESTAMP,
    denunciante: acao.payload.denunciante,
    informacoesLegais: {
      categoria: 'Agressão Moral',
      numeroBoletimOcorrencia: '07621/12',
      numeroProcesso: '12551/76',
      orgao: 'TJMG',
    },
    local: {
      endereco: acao.payload.endereco,
      latitude: acao.payload.latitude,
      longitude: acao.payload.longitude,
    },
    dataHoraOcorrencia: acao.payload.dataHoraOcorrencia,
    detalhamento: acao.payload.detalhamento,
    idStatus: 'nova',
  }).getKey();

  return idDenuncia;
}

export function* handleCriarDenunciaRequisicao() {
  while (true) {
    const acao = yield take(CRIAR_DENUNCIA_REQUISICAO);
    const idDenuncia = yield call(criarDenuncia, acao);

    yield put(criarDenunciaSucesso(idDenuncia));
    yield put(acao.payload.onSuccess);
  }
}

export default function* rootSaga() {
  yield fork(handleCriarDenunciaRequisicao);
}
