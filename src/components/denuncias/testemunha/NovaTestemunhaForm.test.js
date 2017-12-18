import * as sinon from 'sinon';
import { assert } from 'chai';
import * as validaCamposForm from './NovaVitimaForm';

describe('validacoesCamposTestemunha', () => {
  describe('validaTestemunhaForm chamadas', () => {

    beforeEach(() => {
    })

    afterEach(() => {
    })

    it('O formulário deve ser válido se todos os campos forem preenchidos e estiverem todos corretos', () => {
      let campos = {
        nome: 'nome',
        genero: 'genero',
        raca: 'raca',
        dataNascimento: '01/01/2000',
        endereco: 'endereco',
        estado: 'estado',
        telefone: '12345678901',
        email: 'email@email.com',
        naturalidade: 'naturalidade',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      let retorno = validaCamposForm.validaCamposForm(campos);
      assert.isTrue(retorno);
    });
  });
});
