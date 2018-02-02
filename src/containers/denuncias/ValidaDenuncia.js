import { focoNoCampo, desfocaCampo } from '../../FocusUtil'


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

function validaCamposVaziosOrNulos(campos) {
  if (!campos) {
    return 'Por favor, preencha a denúncia.';
  }
  return undefined;
}

function caracteristicasVitimaEhVazia(caracteristicasDaVitima) {
  if (!caracteristicasDaVitima) {
    focoNoCampo();
    return 'Por favor, descreva as características da vítima.';
  }
  return undefined;
}

function validaCaracteriscaVitima(caracteristicasDaVitima) {
  return (caracteristicasVitimaEhVazia(caracteristicasDaVitima) ||
         temTamanhoDeCaracteresMaiorQue('caracteristicas da vitima', caracteristicasDaVitima, 255));
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

function ehDataIgualOuMaiorQueAtual(data) {
  const dataHojeFormatada = new Date().toJSON().slice(0, 10);
  return data >= dataHojeFormatada;
}

function ehDataAntes1900(data) {
  const primeiraDataValida = new Date('01/01/1900').toJSON().slice(0, 10);
  return data < primeiraDataValida;
}

function validaDataDeNascimento(dataNascimento) {
  if (dataNascimento && dataNascimento.trim() !== '') {
    const dataNascimentoFormatada = new Date(dataNascimento).toJSON().slice(0, 10);
    if (ehDataIgualOuMaiorQueAtual(dataNascimentoFormatada) ||
               ehDataAntes1900(dataNascimentoFormatada)) {
      return 'Por favor, preencha o campo data de nascimento com uma data válida.'
    }
  }
  return undefined;
}

function validaEndereco(endereco) {
  return temTamanhoDeCaracteresMaiorQue('Endereço', endereco, 255);
}

function ehTelefoneValido(telefone) {
  let telefoneValido = false;
  if (!telefone) {
    telefoneValido = true
  } else {
    telefoneValido = new RegExp('^[0-9]{10,11}$').test(telefone);
  }
  return telefoneValido;
}

function validaTelefone(telefone) {
  if (!ehTelefoneValido(telefone)) {
    return 'Por favor, preencha o campo telefone com um número válido.';
  }
  return undefined;
}

function ehEmailValido(email) {
  let emailValido = false;
  if (!email) {
    emailValido = true;
  } else {
    emailValido = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
  }
  return emailValido;
}

function validaEmail(email) {
  if (!ehEmailValido(email)) {
    return 'Por favor, preencha com um email válido.';
  }
  return undefined;
}

function validaNaturalidade(naturalidade) {
  return temTamanhoDeCaracteresMaiorQue('Naturalidade', naturalidade, 40);
}

export function validaDenuncia(campos) {
  desfocaCampo();
  return validaCamposVaziosOrNulos(campos) ||
         validaCaracteriscaVitima(campos.caracteristicasDaVitima) ||
         validaNome(campos.nome) ||
         validaGenero(campos.genero) ||
         validaDataDeNascimento(campos.dataNascimento) ||
         validaEndereco(campos.endereco) ||
         validaTelefone(campos.telefone) ||
         validaEmail(campos.email) ||
         validaNaturalidade(campos.naturalidade);
}
