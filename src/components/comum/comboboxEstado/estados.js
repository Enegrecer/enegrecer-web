import estadosJSON from './estados.json';

export default estadosJSON.map(estado => estado.sigla).sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // names must be equal
  return 0;
});
