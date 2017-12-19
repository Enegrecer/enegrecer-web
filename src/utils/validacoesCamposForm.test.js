import * as sinon from 'sinon';
import { assert } from 'chai';
import moment from 'moment';
import * as validacoesCamposForm from './validacoesCamposForm';

describe('validacoesCamposForm', () => {
  describe('validaCamposForm chamadas', () => {
    let windowConfirmStub;
    let dataHoraDeAmanha;
    let dataDeHoje;
    let dataDeAmanha;

    beforeEach(() => {
      windowConfirmStub = sinon.stub(window, 'confirm');
      dataDeHoje = new Date().toJSON().slice(0, 10);
      dataHoraDeAmanha = moment().add(1, 'days');
      dataDeAmanha = dataHoraDeAmanha.toJSON().slice(0, 10);
    })

    afterEach(() => {
      window.confirm.restore();
    })

    it('O formulário deve ser válido se todos os campos forem preenchidos e estiverem todos corretos', () => {
      const campos = {
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

      const retorno = validacoesCamposForm.validaCamposForm(campos);
      assert.isTrue(retorno);
    })

    it('O formulário deve ser inválido caso o usuário não tenha inserido dados', () => {
      const retorno = validacoesCamposForm.validaCamposForm(null);
      assert.isFalse(retorno);
    });

    it('O formulário deve ser inválido se todos os campos opcionais' +
      ' e o campo obrigatório estejam vazios', () => {
      const campos = {
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
      const retorno = validacoesCamposForm.validaCamposForm(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se apenas o campo obrigatório está vazio', () => {
      const campos = {
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
      const retorno = validacoesCamposForm.validaCamposForm(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se apenas o campo obrigatório esteja preenchido' +
      ' e o usuário optou por enviar mesmo assim', () => {
      const campos = {
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
      const retorno = validacoesCamposForm.validaCamposForm(campos);
      assert.isTrue(retorno);
    })

    it('O formulário deve ser inválido se apenas o campo obrigatório esteja preenchido' +
      ' e o usuário optou por não enviar', () => {
      const campos = {
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
      const retorno = validacoesCamposForm.validaCamposForm(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se o campo dataNascimento for menor que 1900', () => {
      const campos = {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: '01/01/1900',
        endereco: '',
        estado: '',
        telefone: '',
        email: '',
        naturalidade: '',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      const retorno = validacoesCamposForm.validaCamposForm(campos);
      assert.isFalse(retorno);
    })


    it('O formulário deve ser inválido se o campo dataNascimento for igual que a data atual', () => {
      const campos = {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: dataDeHoje,
        endereco: '',
        estado: '',
        telefone: '',
        email: '',
        naturalidade: '',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      const retorno = validacoesCamposForm.validaCamposForm(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se o campo dataNascimento for maior que a data atual', () => {
      const campos = {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: dataDeAmanha,
        endereco: '',
        estado: '',
        telefone: '',
        email: '',
        naturalidade: '',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      const retorno = validacoesCamposForm.validaCamposForm(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se o campo telefone for maior que 11', () => {
      const campos = {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: '',
        endereco: '',
        estado: '',
        telefone: '123456789012',
        email: '',
        naturalidade: '',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      const retorno = validacoesCamposForm.validaCamposForm(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se o campo telefone for menor que 10', () => {
      const campos = {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: '',
        endereco: '',
        estado: '',
        telefone: '123456789',
        email: '',
        naturalidade: '',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      const retorno = validacoesCamposForm.validaCamposForm(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se o campo email não estiver no padrão: email@email.com', () => {
      const campos = {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: '',
        endereco: '',
        estado: '',
        telefone: '',
        email: 'email1234',
        naturalidade: '',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      const retorno = validacoesCamposForm.validaCamposForm(campos);
      assert.isFalse(retorno);
    })


    it('O formulário deve ser inválido se o campo nome possuir mais de 40 caracteres', () => {
      const campos = {
        nome: '12345678901234567890123456789012345678901',
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
      assert.isFalse(validacoesCamposForm.validaTamanhoDeCampoString(campos.nome, 40));
    })

    it('O formulário deve ser inválido caso o usuário insira números no campo nome', () => {
      const campos = {
        nome: 'Izael123',
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
      const retorno = validacoesCamposForm.validaCamposForm(campos.nome);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido caso o usuário insira caracteres especiais no campo nome', () => {
      const campos = {
        nome: 'Izael!',
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
      const retorno = validacoesCamposForm.validaCamposForm(campos.nome);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido caso o usuário insira acentos no campo nome', () => {
      const campos = {
        nome: 'Izáel',
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
      const retorno = validacoesCamposForm.validaCamposForm(campos.nome);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se o campo genero possuir mais de 15 caracteres', () => {
      const campos = {
        nome: '',
        genero: '1234567890123456',
        raca: '',
        dataNascimento: '',
        endereco: '',
        estado: '',
        telefone: '',
        email: '',
        naturalidade: '',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      assert.isFalse(validacoesCamposForm.validaTamanhoDeCampoString(campos.genero, 15));
    })

    it('O formulário deve ser inválido se o campo endereco possuir mais de 255 caracteres', () => {
      const campos = {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: '',
        endereco: '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456',
        estado: '',
        telefone: '',
        email: '',
        naturalidade: '',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      assert.isFalse(validacoesCamposForm.validaTamanhoDeCampoString(campos.endereco, 255));
    })

    it('O formulário deve ser inválido se o campo naturalidade possuir mais de 40 caracteres', () => {
      const campos = {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: '',
        endereco: '',
        estado: '',
        telefone: '',
        email: '',
        naturalidade: '12345678901234567890123456789012345678901',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      assert.isFalse(validacoesCamposForm.validaTamanhoDeCampoString(campos.naturalidade, 40));
    })

    it('O formulário deve ser inválido se o campo caracteristicasVitima possuir mais de 255 caracteres', () => {
      const campos = {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: '',
        endereco: '',
        estado: '',
        telefone: '',
        email: '',
        naturalidade: '',
        caracteristicasVitima: '123456789012345678901234567890123456789012345678901234567' +
        '89012345678901234567890123456789012345678901234567890123456789012345678901234567' +
        '89012345678901234567890123456789012345678901234567890123456789012345678901234567' +
        '890123456789012345678901234567890123456',
      }
      assert.isFalse(
        validacoesCamposForm.validaTamanhoDeCampoString(campos.caracteristicasVitima, 255)
      );
    })
  })
});
