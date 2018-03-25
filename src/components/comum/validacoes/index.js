export const campoObrigatorio = campo => (campo ? undefined : 'Campo Obrigatório');

export const campoMaiorQue255Caracteres = (campo) => {
  if (campo && campo.length > 255) {
    return 'O limite deste campo é 255 caracteres.';
  }
  return undefined;
};

