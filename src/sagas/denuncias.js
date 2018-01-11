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
      estado: acao.payload.estado,
    },
    dataOcorrencia: acao.payload.dataOcorrencia,
    horaOcorrencia: acao.payload.horaOcorrencia,
    detalhamento: acao.payload.detalhamento,
    idStatus: 'nova',
  }).getKey();

  const refPessoasEnvolvidas = ref.child('pessoasEnvolvidas').child(idDenuncia);
  refPessoasEnvolvidas.set({
    vitimas: {
      naturalidade: acao.payload.vitima.naturalidade,
      dataNascimento: acao.payload.vitima.dataNascimento,
      genero: acao.payload.vitima.genero,
      caracteristicasDaVitima: acao.payload.vitima.caracteristicasDaVitima,
      souAVitima: acao.payload.vitima.souAVitima,
      conhecoAVitima: acao.payload.vitima.conhecoAVitima,
      nome: acao.payload.vitima.nome,
      raca: acao.payload.vitima.raca,
      informacoesContato: {
        email: acao.payload.vitima.email,
        endereco: acao.payload.vitima.endereco,
        telefone: acao.payload.vitima.telefone,
        estado: acao.payload.vitima.estado,
      },
    },
    testemunha: {
      nome: acao.payload.testemunha.nome,
      raca: acao.payload.testemunha.raca,
      dataNascimento: acao.payload.testemunha.dataNascimento,
      genero: acao.payload.testemunha.genero,
      caracteristicas: acao.payload.testemunha.caracteristicas,
      informacoesContato: {
        telefone: acao.payload.testemunha.telefone
      }
    },
    autores: { },
  });

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
