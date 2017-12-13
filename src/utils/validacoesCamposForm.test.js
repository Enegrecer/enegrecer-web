import * as sinon from 'sinon';

import { assert } from 'chai'
import * as validaCamposForm from './validacoesCamposForm';

describe('validacoesCamposForm', () => {
  describe('validaCamposForm chamadas', () => {
    let windowConfirmStub;

    beforeEach(() => {
      windowConfirmStub = sinon.stub(window, 'confirm');
    })

    afterEach(() => {
      window.confirm.restore();
    })

    it('O formulário deve ser inválido caso o usuário não tenha inserido dados', () => {
      let retorno = validaCamposForm.validaCamposForm(null);
      assert.isFalse(retorno);
    });

    it('O formulário deve ser inválido se todos os campos opcionais' +
    ' e o campo obrigatório estejam vazios', () => {
      let campos = {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: '',
        endereco: '',
        estado: '',
        telefone: '',
        email: '',
        naturalidade: '',
        caracteristicasVitima: '',
      }
      let retorno = validaCamposForm.validaCamposForm(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se apenas o campo obrigatório está vazio', () => {
      let campos = {
        nome: 'nome',
        genero: 'genero',
        raca: 'raca',
        dataNascimento: '12/12/1998',
        endereco: 'endereco',
        estado: 'estado',
        telefone: '99999999999',
        email: 'email@email.com',
        naturalidade: 'naturalidade',
        caracteristicasVitima: '',
      }
      let retorno = validaCamposForm.validaCamposForm(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se apenas o campo obrigatório esteja preenchido' +
    ' e o usuário optou por enviar mesmo assim', () => {
      let campos = {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: '',
        endereco: '',
        estado: '',
        telefone: '',
        email: '',
        naturalidade: '',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      windowConfirmStub.returns(true);
      let retorno = validaCamposForm.validaCamposForm(campos);
      assert.isTrue(retorno);
    })

    it('O formulário deve ser inválido se apenas o campo obrigatório esteja preenchido' +
    ' e o usuário optou por não enviar', () => {
      let campos = {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: '',
        endereco: '',
        estado: '',
        telefone: '',
        email: '',
        naturalidade: '',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      windowConfirmStub.returns(false);
      let retorno = validaCamposForm.validaCamposForm(campos);
      assert.isFalse(retorno);
    })

    xit('deve chamar o verificarCamposVaziosdaVitima(campos) alertaDeCamposNaoPreenchidos', () => {})
    xit('deve chamar o validarInputsDaVitima(campos) alertaCamposNaoPreenchidosCorretamente', () => {})
    xit('deve retornar falso se campos é invalido', () => {})
    xit('deve retornar true quando chamar ', () => {})

    // it('campos == null deve alertar caso os campos obrigatorios nao foram preenchidos' +
    // 'chamar o campoVazio(campos.caracteristicasVitima) alertaDeCamposObrigatorios', () => {
    //   const campos = null;
    //   console.log(validacoes)
    //   validacoes.validaCamposForm(campos)
    //   assert(alertaDeCamposObrigatoriosSpy.called)
    //   expect(alertaDeCamposObrigatoriosSpy.called).toBeTruthy()
    //   expect(validacoes.alertaDeCamposObrigatorios).toBeCalled()
    // })
  })
});
