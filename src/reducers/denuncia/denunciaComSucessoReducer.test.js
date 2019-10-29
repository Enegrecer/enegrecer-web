import { expect } from 'chai';
import denunciaCadastradaComSucesso from './denunciaComSucessoReducer';
import { criarDenunciaRequisicao, criarDenunciaSucesso, limpaEstadoUltimaDencunciaCadastrada } from '../../actions/criarDenunciaActions';

describe('denunciaCadastradaComSucessoReducer', () => {
  describe('Quando a action não é do tipo de denuncia cadastrada com sucesso', () => {
    it('o estado não deve ser alterado', () => {
      const estado = { denunciaCadastradaComSucesso: false };
      const actionCadastrarDenuncia = criarDenunciaRequisicao({});
      const novoEstado = denunciaCadastradaComSucesso(estado, actionCadastrarDenuncia);
      expect(estado).equal(novoEstado);
    });
  });

  describe('quando a action é do tipo de denuncia cadastrada com sucesso', () => {
    it('o estado deve ser alterado com a propriedade denunciaCadastradaComSucesso igual a true  ', () => {
      const actionDenunciaCadastradaComSucesso = criarDenunciaSucesso(1);
      const estado = denunciaCadastradaComSucesso({}, actionDenunciaCadastradaComSucesso);
      expect(estado.denunciaCadastradaComSucesso).equal(true);
    });
  });

  describe('quando a action é do tipo de limpa dados da última denuncia cadastrada', () => {
    it('o estado deve ser alterado com a propriedade denunciaCadastradaComSucesso igual a false  ', () => {
      const limpaDados = limpaEstadoUltimaDencunciaCadastrada();
      const estado = denunciaCadastradaComSucesso({}, limpaDados);
      expect(estado.denunciaCadastradaComSucesso).equal(false);
    });
  });
});

