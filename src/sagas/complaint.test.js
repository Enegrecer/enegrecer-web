import { fork, call, put, take } from 'redux-saga/effects';
import rootSaga, { handleRequestCreateComplaint, createComplaint } from './complaint';
import { REQUEST_CREATE_COMPLAINT, successCreateComplaint } from '../actions';

jest.mock('../utils/firebaseUtils');

describe('Saga de Denúncias', () => {
  describe('Deve criar uma denúncia com sucesso', () => {
    const saga = handleRequestCreateComplaint();
    const mockDaAcaoDeCriarDenuncia = {
      type: REQUEST_CREATE_COMPLAINT,
      payload: {
        categoryId: 'injury',
        report: 'teste',
        onSuccess: {
          type: 'TESTE_CRIAR_DENUNCIA',
        },
      },
    };

    it('Deve esperar pela ação de criar denúncia', () => {
      expect(saga.next().value)
        .toEqual(take(REQUEST_CREATE_COMPLAINT));
    });

    it('Deve chamar a função createComplaint com o payload recebido da ação', () => {
      expect(saga.next(mockDaAcaoDeCriarDenuncia).value)
        .toEqual(call(createComplaint, mockDaAcaoDeCriarDenuncia));
    });

    it('deve despachar a ação de denuncia criada com sucesso', () => {
      expect(saga.next('idDaDenuncia').value)
        .toEqual(put(successCreateComplaint('idDaDenuncia')));
    });

    it('deve despachar a ação de onSuccess', () => {
      expect(saga.next().value)
        .toEqual(put(mockDaAcaoDeCriarDenuncia.payload.onSuccess));
    });
  });
});

describe('Root Sagas', () => {
  it('deve contar o handleRequestCreateComplaint', () => {
    const saga = rootSaga();

    expect(saga.next().value).toEqual(fork(handleRequestCreateComplaint));
    expect(saga.next().done).toBe(true);
  });
});
