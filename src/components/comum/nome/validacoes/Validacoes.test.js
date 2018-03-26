import { assert } from 'chai';
import { temNumeroNoNome, nomeMaiorQue40Caracteres, nomeNaoPodeTerCaracterEspecial } from './index';

describe('Validaçoes Nome: ', () => {
  it('deve retornar mensagem de erro quando o nome tem algum número', () => {
    const nome = 'Pedro 123';
    const mensagem = temNumeroNoNome(nome);
    assert.equal('Não pode haver números no nome', mensagem);
  });

  it('deve retornar undefined quando o nome é preenchido somente com caracteres', () => {
    const nome = 'Pedro Antonio Avelar';
    const mensagem = temNumeroNoNome(nome);
    assert.equal(undefined, mensagem);
  });

  it('deve retornar undefined quando o nome é preenchido com até 40  caracteres', () => {
    const nome = 'Pedro Antonio Avelar';
    const mensagem = nomeMaiorQue40Caracteres(nome);
    assert.equal(undefined, mensagem);
  });

  it('deve retornar mensagem de erro quando o nome é maior que 40  caracteres', () => {
    const nome = 'Pedro Antoniô Avelar oooolllllllllllllllllllllllllllllllllllllllllllllllll' +
    'llllllllllllllllllllllllllllllllllllllllllllllllllll';
    const mensagem = nomeMaiorQue40Caracteres(nome);
    assert.equal('Nome não pode ser maior que 40 caracteres', mensagem);
  });

  it('deve retornar mensagem de erro quando o nome tem caracteres especiais', () => {
    const nome = '???????,,,,,';
    const mensagem = nomeNaoPodeTerCaracterEspecial(nome);
    assert.equal('Nome não pode ter caracteres especiais', mensagem);
  });

  it('deve retornar undefined quando o nome não tem caracteres especiais', () => {
    const nome = 'Pedro Dias Avelar';
    const mensagem = nomeNaoPodeTerCaracterEspecial(nome);
    assert.equal(undefined, mensagem);
  });
});

