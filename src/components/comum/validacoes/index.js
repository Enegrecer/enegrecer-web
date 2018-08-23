export const campoObrigatorio = campo => (campo ? undefined : 'Campo obrigatório.');

export const campoMaiorQue255Caracteres = (campo) => {
  if (campo && campo.length > 255) {
    return 'O limite deste campo é 255 caracteres.';
  }
  return undefined;
};

export const emailInvalido = campo =>
  (campo && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(campo)
    ? 'Formato de e-mail inválido' : undefined);

