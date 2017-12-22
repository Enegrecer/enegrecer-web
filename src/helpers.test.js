import * as helpers from './helpers';

describe('Helpers functions', () => {
  let palavraGrande
  beforeEach(() => {
    palavraGrande = 'O Coletivo Nacional de Juventude Negra – Enegrecer';
    expect(palavraGrande).toHaveLength(50)
  })
  it('deve cortar a palavra no tamanho especificado', () => {
    const palavraCortada = helpers.cortarPalavra(palavraGrande, 40);
    expect(palavraCortada).toHaveLength(40);
    const palavraEsperada = 'O Coletivo Nacional de Juventude Negra –';
    expect(palavraCortada).toBe(palavraEsperada);
  })
  it('deve manter o tamanho se não receber o parametro de tamanho', () => {
    const palavraCortada = helpers.cortarPalavra(palavraGrande);
    expect(palavraCortada).toHaveLength(50);
    expect(palavraCortada).toBe(palavraGrande);
  })

  it('deve manter o tamanho se receber o parametro de tamanho uma str vazia', () => {
    const palavraCortada = helpers.cortarPalavra(palavraGrande, '');
    expect(palavraCortada).toHaveLength(50);
    expect(palavraCortada).toBe(palavraGrande);
  })
})
