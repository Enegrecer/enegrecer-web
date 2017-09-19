import { fork, call, put, take } from 'redux-saga/effects';
import rootSaga, { handleCriarDenunciaRequisicao, criarDenuncia } from './denuncias';
import { CRIAR_DENUNCIA_REQUISICAO, criarDenunciaSucesso } from '../actions';

jest.mock('../utils/firebaseUtils');

describe('Saga de Denúncias', () => {
  describe('Deve criar uma denúncia com sucesso', () => {
    const saga = handleCriarDenunciaRequisicao();
    const mockDaAcaoDeCriarDenuncia = {
      type: CRIAR_DENUNCIA_REQUISICAO,
      payload: {
        idCategoria: 'injuria',
        detalhamento: 'teste',
        onSuccess: {
          type: 'TESTE_CRIAR_DENUNCIA',
        },
      },
    };

    it('Deve esperar pela ação de criar denúncia', () => {
      expect(saga.next().value)
        .toEqual(take(CRIAR_DENUNCIA_REQUISICAO));
    });

    it('Deve chamar a função criarDenuncia com o payload recebido da ação', () => {
      expect(saga.next(mockDaAcaoDeCriarDenuncia).value)
        .toEqual(call(criarDenuncia, mockDaAcaoDeCriarDenuncia));
    });

    it('deve despachar a ação de denuncia criada com sucesso', () => {
      expect(saga.next('idDaDenuncia').value)
        .toEqual(put(criarDenunciaSucesso('idDaDenuncia')));
    });

    it('deve despachar a ação de onSuccess', () => {
      expect(saga.next().value)
        .toEqual(put(mockDaAcaoDeCriarDenuncia.payload.onSuccess));
    });
  });
});

describe('Root Sagas', () => {
  it('deve contar o handleCriarDenunciaRequisicao', () => {
    const saga = rootSaga();

    expect(saga.next().value).toEqual(fork(handleCriarDenunciaRequisicao));
    expect(saga.next().done).toBe(true);
  });
});
