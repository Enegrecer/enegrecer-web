import { assert } from 'chai';
import moment from 'moment';
import * as validaDenuncia from './ValidaDenuncia';

describe('validaDenuncia', () => {
  describe('valida uma denuncia preenchida corretamente', () => {
    function camposDaDenunciaPreenchidoCorretamente() {
      return {
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
    }

    it('Não deve retornar mensagem de erro para formulario preenchido corretamente', () => {
      const camposPreenchidoCorretamente = camposDaDenunciaPreenchidoCorretamente();

      const mensagem = validaDenuncia.validaDenuncia(camposPreenchidoCorretamente);

      assert.equal(undefined, mensagem);
    })
  })
});

describe('validaDenuncia', () => {
  describe('valida denuncia preenchida incorretamente', () => {
    function camposDaDenunciaVazio() {
      return {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: '',
        endereco: '',
        estado: '',
        telefone: '',
        email: '',
        naturalidade: '',
        caracteristicasVitima: 'campo obrigatorio',
      }
    }

    it('Deve retornar mensagem de erro quando o campo caracteristicasVitima é vazio', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.caracteristicasVitima = '';

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('Por favor, descreva as características da vítima.', mensagem);
    })

    it('Deve retornar mensagem de erro quando o campo caracteristicasVitima possuir mais de 255 caracteres', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.caracteristicasVitima = '12345678901234567890123456789012345678901234567890123456' +
        '789012345678901234567890123456789012345678901234567890123456789012' +
        '345678901234567890123456789012345678901234567890123456789012345678' +
        '90123456789012345678901234567890123456789012345678901234567890123456';

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('A descrição do campo caracteristicas da vitima está muito grande. Deve ter menos de 255 caracteres.', mensagem);
    })

    it('Deve retornar mensagem de erro quando o campo nome tiver mais de 40 caracteres', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.nome = 'abcdedfdfadsfladksfalsdfkalsdkfalsdfkasdfasdf';

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('A descrição do campo Nome está muito grande. Deve ter menos de 40 caracteres.', mensagem);
    })

    it('Deve retornar mensagem de erro quando o campo nome tiver número', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.nome = 'Joao123';

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('Por favor, preencha o campo nome sem números.', mensagem);
    })

    it('Deve retornar mensagem de erro quando o campo nome tiver caracter especial', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.nome = 'Joao?';

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('Por favor, preencha o campo nome sem caractere especial.', mensagem);
    })

    it('Deve retornar mensagem de erro quando o campo genero tiver mais de 15 caracteres', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.genero = 'Joaaaaaaaaaaaooooooo';

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('A descrição do campo Gênero está muito grande. Deve ter menos de 15 caracteres.', mensagem);
    })

    it('Deve retornar mensagem de erro quando a data de nascimento for igual a data atual', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.dataNascimento = moment().toJSON().slice(0, 10);

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('Por favor, preencha o campo data de nascimento com uma data válida.', mensagem);
    })

    it('Deve retornar mensagem de erro quando a data de nascimento for maior que a data atual', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.dataNascimento = moment().add(1, 'days').toJSON().slice(0, 10);

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('Por favor, preencha o campo data de nascimento com uma data válida.', mensagem);
    })

    it('Deve retornar mensagem de erro quando o ano da data de nascimento for menor que 1900', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.dataNascimento = new Date('01/01/1889').toJSON().slice(0, 10);

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('Por favor, preencha o campo data de nascimento com uma data válida.', mensagem);
    })

    it('Deve retornar mensagem de erro quando o campo endereco possuir mais de 255 caracteres', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.endereco = '12345678901234567890123456789012345678901234567890123456' +
        '789012345678901234567890123456789012345678901234567890123456789012' +
        '345678901234567890123456789012345678901234567890123456789012345678' +
        '90123456789012345678901234567890123456789012345678901234567890123456';

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('A descrição do campo Endereço está muito grande. Deve ter menos de 255 caracteres.', mensagem);
    })

    it('Deve retornar mensagem de erro quando o campo de telefone conter letras', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.telefone = '12345mmm';

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('Por favor, preencha o campo telefone com um número válido.', mensagem);
    })

    it('Deve retornar mensagem de erro quando o tamanho do campo de telefone menor que 10', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.telefone = '123456789';

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('Por favor, preencha o campo telefone com um número válido.', mensagem);
    })

    it('Deve retornar mensagem de erro quando o tamanho do campo de telefone maior que 11', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.telefone = '123456789012';

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('Por favor, preencha o campo telefone com um número válido.', mensagem);
    })

    it('Deve retornar mensagem de erro quando o campo email é inválido', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.email = 'joao123...';

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('Por favor, preencha com um email válido.', mensagem);
    })

    it('Deve retornar mensagem de erro quando o campo naturalidade tiver mais de 40 caracteres', () => {
      const camposDaDanuncia = camposDaDenunciaVazio();
      camposDaDanuncia.naturalidade = 'ajkshdakshdjashdjashkdjahakshakjhdsjdkdsjkahds';

      const mensagem = validaDenuncia.validaDenuncia(camposDaDanuncia);

      assert.equal('A descrição do campo Naturalidade está muito grande. Deve ter menos de 40 caracteres.', mensagem);
    })
  })
});
