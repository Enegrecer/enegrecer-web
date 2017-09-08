import { fork, call, put, take } from 'redux-saga/effects';
import * as firebase from 'firebase';
import firebaseApp from '../utils/firebaseUtils';

import {
  CRIAR_DENUNCIA_REQUISICAO, denunciaCriadaSucesso,
} from '../actions';

export function createComplaint(action) {
  const ref = firebaseApp.database().ref();
  const complaintsRef = ref.child('complaints');

  const complaintKey = complaintsRef.push({
    idCategoria: action.payload.idCategoria,
    dataHoraCriacao: firebase.database.ServerValue.TIMESTAMP,
    denunciante: action.payload.denunciante,
    informacoesLegais: {
      categoria: 'Agressão Moral',
      numeroBoletimOcorrencia: '07621/12',
      numeroProcesso: '12551/76',
      orgao: 'TJMG',
    },
    local: {
      endereco: action.payload.endereco,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude,
    },
    dataHoraOcorrencia: action.payload.dataHoraOcorrencia,
    detalhamento: action.payload.detalhamento,
    idStatus: 'nova',
  }).getKey();

  return complaintKey;
}

export function* handlecriarDenunciaRequisicao() {
  while (true) {
    const action = yield take(CRIAR_DENUNCIA_REQUISICAO);
    const complaintKey = yield call(createComplaint, action);

    yield put(denunciaCriadaSucesso(complaintKey));
    yield put(action.payload.onSuccess);
  }
}

export default function* rootSaga() {
  yield fork(handlecriarDenunciaRequisicao);
}
