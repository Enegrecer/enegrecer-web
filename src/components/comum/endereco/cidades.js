import cidadesJSON from './cidades.json';

export const listaCidades = siglaEstado => cidadesJSON
  .filter(cidade => cidade.microrregiao.mesorregiao.UF.sigla === siglaEstado)
  .map(cidade => cidade.nome)
  .sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // names must be equal
    return 0;
  });
