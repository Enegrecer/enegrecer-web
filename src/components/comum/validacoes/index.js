
export const campoObrigatorio = (campo) => (campo ? undefined : 'Campo Obrigatório');

export const campoMaiorQue255Caracteres = (campo) => {
  if (campo && campo.length > 255) {
    return 'O limite deste campo é 255 caracteres.';
  }
  return undefined;
  }

  export const temNumeroNoNome =  nome => {
    const format = /\d/;
    return format.test(nome);
  }
