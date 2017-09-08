import { fork, call, put, take } from 'redux-saga/effects';
import rootSaga, { handlecriarDenunciaRequisicao, createComplaint } from './denuncias';
import { CRIAR_DENUNCIA_REQUISICAO, denunciaCriadaSucesso } from '../actions';

jest.mock('../utils/firebaseUtils');

describe('Saga de Denúncias', () => {
  describe('Deve criar uma denúncia com sucesso', () => {
    const saga = handlecriarDenunciaRequisicao();
    const mockDaAcaoDeCriarDenuncia = {
      type: CRIAR_DENUNCIA_REQUISICAO,
      payload: {
        idCategoria: 'injury',
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

    it('Deve chamar a função createComplaint com o payload recebido da ação', () => {
      expect(saga.next(mockDaAcaoDeCriarDenuncia).value)
        .toEqual(call(createComplaint, mockDaAcaoDeCriarDenuncia));
    });

    it('deve despachar a ação de denuncia criada com sucesso', () => {
      expect(saga.next('idDaDenuncia').value)
        .toEqual(put(denunciaCriadaSucesso('idDaDenuncia')));
    });

    it('deve despachar a ação de onSuccess', () => {
      expect(saga.next().value)
        .toEqual(put(mockDaAcaoDeCriarDenuncia.payload.onSuccess));
    });
  });
});

describe('Root Sagas', () => {
  it('deve contar o handlecriarDenunciaRequisicao', () => {
    const saga = rootSaga();

    expect(saga.next().value).toEqual(fork(handlecriarDenunciaRequisicao));
    expect(saga.next().done).toBe(true);
  });
});
