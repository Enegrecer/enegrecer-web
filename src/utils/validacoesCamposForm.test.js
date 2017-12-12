import * as sinon from 'sinon';
import { assert } from 'chai'
import * as validacoes from './validacoesCamposForm';

describe('validacoesCamposForm', () => {

  describe('validaCamposForm chamadas', () => {

    it('campos == null deve alertar caso os campos obrigatorios nao foram preenchidos' +
    'chamar o campoVazio(campos.caracteristicasVitima) alertaDeCamposObrigatorios', () => {
      // const campos = null;

      // console.log(validacoes)
      // validacoes.validaCamposForm(campos)
      // assert(alertaDeCamposObrigatoriosSpy.called)
      // expect(alertaDeCamposObrigatoriosSpy.called).toBeTruthy()
      // expect(validacoes.alertaDeCamposObrigatorios).toBeCalled()
    })

    xit('campos diferente de null e com o atributo do campo vazio', () => {})
    xit('deve chamar o verificarCamposVaziosdaVitima(campos) alertaDeCamposNaoPreenchidos', () => {})
    xit('deve chamar o validarInputsDaVitima(campos) alertaCamposNaoPreenchidosCorretamente', () => {})
    xit('deve retornar falso se campos é invalido', () => {})
  })

  xit('deve retornar true quando chamar ', () => {})


});
