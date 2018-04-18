import { listaCidades } from './cidades';
import cidadesDoAM from './cidadesMocadasAM.json';

describe('Verifica se a lista de cidades está correta', () => {
  it('Deve retornar as cidades de acordo com o estado passado', () => {
    // expect(cidades.length).toEqual(27);
    const cidades = listaCidades('AM');
    expect(cidades.length).toEqual(cidadesDoAM.length);
  });
});
