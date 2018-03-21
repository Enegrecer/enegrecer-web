
export const generoNaoPodeSerQue15Caracteres = (genero) => {
  if (genero && genero.length > 15) {
    return 'Näo pode ser maior que 15 caracteres';
  }
  return undefined;
}
