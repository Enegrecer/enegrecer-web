import * as sinon from 'sinon';
import { assert } from 'chai';
import moment from 'moment';
import * as validacoesCamposForm from './ValidaDenuncia';

describe('validaCamposDaDenuncia', () => {
  describe('valida os campos das denuncias chamadas', () => {
    let camposVaziosVitima
    let camposPreenchidosVitima

    beforeEach(() => {
      camposVaziosVitima = {
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

      camposPreenchidosVitima = {
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
    })

    afterEach(() => {})

    it('O formulário deve ser válido se todos os campos forem preenchidos e estiverem todos corretos', () => {
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(camposPreenchidosVitima);
      assert.isTrue(retorno);
    })

    it('O formulário deve ser inválido caso o usuário não tenha inserido dados', () => {
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(null);
      assert.isFalse(retorno);
    });

    it('O formulário deve ser inválido se todos os campos opcionais' +
      ' e o campo obrigatório estejam vazios', () => {
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(camposVaziosVitima);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se apenas o campo obrigatório está vazio', () => {
      const campos = {
        ...camposPreenchidosVitima,
        caracteristicasVitima: '',
      }
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se apenas o campo obrigatório esteja preenchido' +
      ' e o usuário optou por enviar mesmo assim', () => {
      const campos = {
        ...camposVaziosVitima,
        caracteristicasVitima: 'caracteristicasVitima',
      }
      sinon.stub(window, 'confirm').returns(true);
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(campos);
      assert.isTrue(retorno);
      window.confirm.restore();
    })

    it('O formulário deve ser inválido se apenas o campo obrigatório esteja preenchido' +
      ' e o usuário optou por não enviar', () => {
      const campos = {
        ...camposVaziosVitima,
        caracteristicasVitima: 'caracteristicasVitima',
      }
      sinon.stub(window, 'confirm').returns(false);
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(campos);
      assert.isFalse(retorno);
      window.confirm.restore();
    })

    it('O formulário deve ser inválido se o campo dataNascimento for menor que 1900', () => {
      const campos = {
        ...camposVaziosVitima,
        dataNascimento: '01/01/1900',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(campos);
      assert.isFalse(retorno);
    })


    it('O formulário deve ser inválido se o campo dataNascimento for igual que a data atual', () => {
      const dataDeHoje = new Date().toJSON().slice(0, 10);
      const campos = {
        ...camposVaziosVitima,
        dataNascimento: dataDeHoje,
        caracteristicasVitima: 'caracteristicasVitima',
      }
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se o campo dataNascimento for maior que a data atual', () => {
      const dataHoraDeAmanha = moment().add(1, 'days');
      const dataDeAmanha = dataHoraDeAmanha.toJSON().slice(0, 10);
      const campos = {
        ...camposVaziosVitima,
        dataNascimento: dataDeAmanha,
        caracteristicasVitima: 'caracteristicasVitima',
      }
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se o campo telefone for maior que 11', () => {
      const campos = {
        ...camposVaziosVitima,
        telefone: '123456789012',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se o campo telefone for menor que 10', () => {
      const campos = {
        ...camposVaziosVitima,
        telefone: '123456789',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(campos);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se o campo email não estiver no padrão: email@email.com', () => {
      const campos = {
        ...camposVaziosVitima,
        email: 'email1234',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(campos);
      assert.isFalse(retorno);
    })


    it('O formulário deve ser inválido se o campo nome possuir mais de 40 caracteres', () => {
      const campos = {
        ...camposVaziosVitima,
        nome: '12345678901234567890123456789012345678901',
        caracteristicasVitima: 'caracteristicasVitima',
      }
      assert.isFalse(validacoesCamposForm.validaTamanhoDeCampoString(campos.nome, 40));
    })

    it('O formulário deve ser inválido caso o usuário insira números no campo nome', () => {
      const nomeEsperado = 'Izael123'
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(nomeEsperado);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido caso o usuário insira caracteres especiais no campo nome', () => {
      const nomeEsperado = 'Izael'
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(nomeEsperado);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido caso o usuário insira acentos no campo nome', () => {
      const nomeEsperado = 'Izáel'
      const retorno = validacoesCamposForm.validaCamposDaDenuncia(nomeEsperado);
      assert.isFalse(retorno);
    })

    it('O formulário deve ser inválido se o campo genero possuir mais de 15 caracteres', () => {
      const generoEsperado = '1234567890123456'
      assert.isFalse(validacoesCamposForm.validaTamanhoDeCampoString(generoEsperado, 15));
    })

    it('O formulário deve ser inválido se o campo endereco possuir mais de 255 caracteres', () => {
      const enderecoEsperado = '12345678901234567890123456789012345678901234567890123456' +
        '789012345678901234567890123456789012345678901234567890123456789012' +
        '345678901234567890123456789012345678901234567890123456789012345678' +
        '90123456789012345678901234567890123456789012345678901234567890123456'

      assert.isFalse(validacoesCamposForm.validaTamanhoDeCampoString(enderecoEsperado, 255));
    })

    it('O formulário deve ser inválido se o campo naturalidade possuir mais de 40 caracteres', () => {
      const naturalidadeEsperada = '12345678901234567890123456789012345678901'
      assert.isFalse(validacoesCamposForm.validaTamanhoDeCampoString(naturalidadeEsperada, 40));
    })

    it('O formulário deve ser inválido se o campo caracteristicasVitima possuir mais de 255 caracteres', () => {
      const caracteristicasVitima = '123456789012345678901234567890123456789012345678901234567' +
        '89012345678901234567890123456789012345678901234567890123456789012345678901234567' +
        '89012345678901234567890123456789012345678901234567890123456789012345678901234567' +
        '890123456789012345678901234567890123456'
      assert.isFalse(
        validacoesCamposForm.validaTamanhoDeCampoString(caracteristicasVitima, 255)
      );
    })
  })
});
