import { assert } from 'chai';
import { campoMaiorQue255Caracteres, campoObrigatorio } from './index';

describe('Validacoes: limite do é 255 cararcteres', () => {
  it('deve retornar mensagem de erro quando o campo é preenchido com mais de 255 caracteres', () => {
    const texto = '12345678901234567890123456789012345678901234567890123456' +
    '789012345678901234567890123456789012345678901234567890123456789012' +
    '345678901234567890123456789012345678901234567890123456789012345678' +
    '90123456789012345678901234567890123456789012345678901234567890123456';

    const mensagem = campoMaiorQue255Caracteres(texto);
    assert.equal('O limite deste campo é 255 caracteres.', mensagem);
  });

  it('deve retornar undefined quando o campo é preenchido com menos de 255 caracteres', () => {
    const texto = '12345678901234567890123456789012345678901234567890123456';
    const mensagem = campoMaiorQue255Caracteres(texto);
    assert.equal(undefined, mensagem);
  });
});

describe('Validacoes: Campo obrigatório', () => {
  it('deve retornar mensagem de erro quando o campo está vazio', () => {
    const mensagem = campoObrigatorio('');
    assert.equal('Campo obrigatório.', mensagem);
  });

  it('deve retornar mensagem de erro quando o campo é undefined', () => {
    const mensagem = campoObrigatorio(undefined);
    assert.equal('Campo obrigatório.', mensagem);
  });

  it('deve retornar undefined quando o campo é preenchido', () => {
    const texto = 'Teste';
    const mensagem = campoObrigatorio(texto);
    assert.equal(undefined, mensagem);
  });
});
