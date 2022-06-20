export const temNumeroNoNome = (nome) => {
  const format = /\d/;
  if (format.test(nome)) {
    return 'Não pode haver números no nome';
  }
  return undefined;
};

export const nomeMaiorQue40Caracteres = (nome) => {
  if (nome && nome.length > 40) {
    return 'Nome não pode ser maior que 40 caracteres';
  }
  return undefined;
};

export const nomeNaoPodeTerCaracterEspecial = (nome) => {
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (format.test(nome)) {
    return 'Nome não pode ter caracteres especiais';
  }
  return undefined;
};
