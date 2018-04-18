import estados from './estados';

describe('Verifica se a lista de estados está completa', () => {
  it('Deve retornar true se a lista de estados é igual a 27', () => {
    expect(estados.length).toEqual(27);
  });
});
