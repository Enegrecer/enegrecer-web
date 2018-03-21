import { assert } from 'chai';
import { generoNaoPodeSerQue15Caracteres } from './index'


describe('Validaçoes Gênero: ', () => {
  it('deve retornar mensagem de erro quando o gênero é maior que 15 caracteres', () => {
    let genero = 'Genero  oooooooooooo';
    let mensagem = generoNaoPodeSerQue15Caracteres(genero);
    assert.equal('Näo pode ser maior que 15 caracteres', mensagem);
  })

  it('deve retornar undefined quando o genero tem menos de 15 caracteres', () => {
    let genero = 'Não binário';
    let mensagem = generoNaoPodeSerQue15Caracteres(genero);
    assert.equal(undefined, mensagem);
  })
});
