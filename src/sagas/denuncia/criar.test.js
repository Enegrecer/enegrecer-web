import { call, put, take } from 'redux-saga/effects';
import { handleCriarDenunciaRequisicao, criarDenuncia } from './criar';
import { CRIAR_DENUNCIA_REQUISICAO, criarDenunciaSucesso } from '../../actions/criarDenunciaActions';

jest.mock('../../utils/firebaseUtils');

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
  });
});
