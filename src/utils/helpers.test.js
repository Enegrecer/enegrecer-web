import * as helpers from './helpers';

describe('Helpers functions', () => {
  let palavraGrande;
  beforeEach(() => {
    palavraGrande = 'O Coletivo Nacional de Juventude Negra – Enegrecer';
    expect(palavraGrande).toHaveLength(50);
  });
  it('deve cortar a palavra no tamanho especificado', () => {
    const palavraCortada = helpers.cortarPalavra(palavraGrande, 40);
    expect(palavraCortada).toHaveLength(40);
    const palavraEsperada = 'O Coletivo Nacional de Juventude Negra –';
    expect(palavraCortada).toBe(palavraEsperada);
  });
  it('deve manter o tamanho se não receber o parametro de tamanho', () => {
    const palavraCortada = helpers.cortarPalavra(palavraGrande);
    expect(palavraCortada).toHaveLength(50);
    expect(palavraCortada).toBe(palavraGrande);
  });

  it('deve manter o tamanho se receber o parametro de tamanho uma str vazia', () => {
    const palavraCortada = helpers.cortarPalavra(palavraGrande, '');
    expect(palavraCortada).toHaveLength(50);
    expect(palavraCortada).toBe(palavraGrande);
  });

  it('deve retornar true se a idade é menor que 29 anos', () => {
    const temMenosDe29Anos = helpers.temMenosDe29Anos('08/07/1991');
    expect(temMenosDe29Anos).toBe(true);
  });

  it('deve retornar false se a idade é maior que 29 anos', () => {
    const temMenosDe29Anos = helpers.temMenosDe29Anos('08/07/1981');
    expect(temMenosDe29Anos).toBe(false);
  });

  it('deve retornar 10 porcentagem de mulheres vitimas', () => {
    const total = 100;
    const mulheres = 10;
    const porcentagem = helpers.obtemPorcentagemDeMulheres(total, mulheres);
    expect(porcentagem).toBe(10);
  });

  it('deve retornar porcentagem de mulheres vitimas', () => {
    const total = 100;
    const mulheres = 50;
    const porcentagem = helpers.obtemPorcentagemDeMulheres(total, mulheres);
    expect(porcentagem).toBe(50);
  });

  it('deve retornar zero se o total de mulheres for zero', () => {
    const total = 0;
    const mulheres = 0;
    const porcentagem = helpers.obtemPorcentagemDeMulheres(total, mulheres);
    expect(porcentagem).toBe(0);
  });
});
