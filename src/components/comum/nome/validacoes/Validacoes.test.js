import { assert } from 'chai';
import { temNumeroNoNome, nomeMaiorQue40Caracteres, nomeNaoPodeTerCaracterEspecial } from './index'


describe('Validaçoes Nome: ', () => {
  it('deve retornar mensagem de erro quando o nome tem algum número', () => {
    let nome = 'Pedro 123';
    let mensagem = temNumeroNoNome(nome);
    assert.equal('Não pode haver números no nome', mensagem);
  })

  it('deve retornar undefined quando o nome é preenchido somente com caracteres', () => {
    let nome = 'Pedro Antonio Avelar';
    let mensagem = temNumeroNoNome(nome);
    assert.equal(undefined, mensagem);
  })

  it('deve retornar undefined quando o nome é preenchido com até 40  caracteres', () => {
    let nome = 'Pedro Antonio Avelar';
    let mensagem = nomeMaiorQue40Caracteres(nome);
    assert.equal(undefined, mensagem);
  })

  it('deve retornar mensagem de erro quando o nome é maior que 40  caracteres', () => {
    let nome = 'Pedro Antoniô Avelar oooolllllllllllllllllllllllllllllllllllllllllllllllll'+
    'llllllllllllllllllllllllllllllllllllllllllllllllllll';
    let mensagem = nomeMaiorQue40Caracteres(nome);
    assert.equal('Nome não pode ser maior que 40 caracteres', mensagem);
  })

  it('deve retornar mensagem de erro quando o nome tem caracteres especiais', () => {
    let nome = '???????,,,,,';
    let mensagem = nomeNaoPodeTerCaracterEspecial(nome);
    assert.equal('Nome não pode ter caracteres especiais', mensagem);
  })

  it('deve retornar undefined quando o nome não tem caracteres especiais', () => {
    let nome = 'Pedro Dias Avelar';
    let mensagem = nomeNaoPodeTerCaracterEspecial(nome);
    assert.equal(undefined, mensagem);
  })

});


