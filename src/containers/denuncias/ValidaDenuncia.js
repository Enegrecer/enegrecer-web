function temNumero(campo) {
  const format = /\d/;
  return format.test(campo);
}

function temCaractereEspecial(campo) {
  const format = /[!@#$%^&*()_+-=[\]{};':"\\|,.<>/?]+/;
  return format.test(campo);
}

function temTamanhoDeCaracteresMaiorQue(nomeDoCampo, campo, tamanho) {
  if (campo.length > tamanho) {
    return `A descrição do campo ${nomeDoCampo} está muito grande. Deve ter menos de ${tamanho} caracteres.`;
  }
  return undefined;
}

function caracteristicasVitimaEhVazia(caracteristicasVitima) {
  if (caracteristicasVitima === '') {
    return 'Por favor, descreva as características da vítima.';
  }
  return undefined;
}

function validaCaracteriscaVitima(caracteristicasVitima) {
  return caracteristicasVitimaEhVazia(caracteristicasVitima) ||
         temTamanhoDeCaracteresMaiorQue('caracteristicas da vitima', caracteristicasVitima, 255);
}

function temNumeroNoNome(nome) {
  if (temNumero(nome)) {
    return 'Por favor, preencha o campo nome sem números.'
  }
  return undefined;
}

function temCaractereEspecialNoNome(nome) {
  if (temCaractereEspecial(nome)) {
    return 'Por favor, preencha o campo nome sem caractere especial.'
  }
  return undefined;
}

function validaNome(nome) {
  return temNumeroNoNome(nome) ||
         temCaractereEspecialNoNome(nome) ||
         temTamanhoDeCaracteresMaiorQue('Nome', nome, 40);
}

function validaGenero(genero) {
  return temTamanhoDeCaracteresMaiorQue('Gênero', genero, 15);
}

function ehDataAtual(data) {
  const dataHojeFormatada = new Date().toJSON().slice(0, 10);
  return data >= dataHojeFormatada;
}

function ehDataAntes1900(data) {
  const primeiraDataValida = new Date('01/01/1900').toJSON().slice(0, 10);
  return data < primeiraDataValida;
}

function validaDataDeNascimento(dataNascimento) {
  if (dataNascimento.trim() !== '') {
    const dataNascimentoFormatada = new Date(dataNascimento).toJSON().slice(0, 10);
    if (ehDataAtual(dataNascimentoFormatada) || ehDataAntes1900(dataNascimentoFormatada)) {
      return 'Por favor, preencha o campo data de nascimento com uma data válida.'
    }
  }
  return undefined;
}

function validaEndereco(endereco) {
  return temTamanhoDeCaracteresMaiorQue('Endereço', endereco, 255);
}

function ehTelefoneValido(telefone) {
  return (new RegExp('^[0-9]{10,11}$').test(telefone));
}

function validaTelefone(telefone) {
  if (telefone !== '' && !ehTelefoneValido(telefone)) {
    return 'Por favor, preencha o campo telefone com um número válido.';
  }
  return undefined;
}

function ehEmailValido(valor) {
  return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valor));
}

function validaEmail(email) {
  if (email !== '' && !ehEmailValido(email)) {
    return 'Por favor, preencha com um email válido.';
  }
  return undefined;
}

function validaNaturalidade(naturalidade) {
  return temTamanhoDeCaracteresMaiorQue('Naturalidade', naturalidade, 40);
}

export function validaDenuncia(campos) {
  return validaCaracteriscaVitima(campos.caracteristicaDaVitima) ||
         validaNome(campos.nome) ||
         validaGenero(campos.genero) ||
         validaDataDeNascimento(campos.dataNascimento) ||
         validaEndereco(campos.endereco) ||
         validaTelefone(campos.telefone) ||
         validaEmail(campos.email) ||
         validaNaturalidade(campos.naturalidade);
}
