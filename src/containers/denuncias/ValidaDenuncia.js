
function validaCaracteriscaVitima(caracteristicasVitima){
    if(caracteristicasVitima == null){
      return 'Preencha com a descrição da vítima.';
    }

    if(caracteristicasVitima.length > 255){
      return 'Preencha o campo caracteristicasVitima com no máximo 255 caracteres.';
    }
}

function temNumero(valor) {
  const format = /\d/;
  if(format.test(valor)){
    return 'Preencha o campo nome sem números.'
  }
}

function temCaractereEspecial(valor) {
  const format = /[!@#$%^&*()_+-=[\]{};':"\\|,.<>/?]+/;
  if(format.test(valor)){
    return 'Preencha o campo nome sem caractere especial.'
  }
}

function temTamanhoDeCaracteresMaiorQue40(nome) {
  if(nome.length > 40) {
    return 'Preencha o campo nome com menos de 40 caracteres.';
  }
}

function validaNome(nome){
  return temNumero(nome) ||
         temCaractereEspecial(nome) ||
         temTamanhoDeCaracteresMaiorQue40(nome);
}

function validaGenero(genero) {
  if(genero.length > 15) {
    return 'Preencha o campo genero com no máximo 15 caracteres.';
  }
}

function validaDataDeNascimento(dataNascimento){
  if (dataNascimento.trim() !== '') {
    const dataNascimentoFormatada = new Date(dataNascimento).toJSON().slice(0, 10);
    const dataHojeFormatada = new Date().toJSON().slice(0, 10);
    const primeiraDataValida = new Date('01/01/1900').toJSON().slice(0, 10);

    if ((dataNascimentoFormatada >= dataHojeFormatada || dataNascimentoFormatada < primeiraDataValida)){
        return 'Preencha o campo data de nascimento com uma data válida.'
    }
  }
}

function validaEndereco(endereco) {
  if(endereco.length > 255) {
    return 'Preencha o campo endereço com no máximo 255 caracteres.';
  }
}

function telefoneValido(telefone) {
  const reg = new RegExp('^[0-9]{10,11}$');
  return (reg.test(telefone));
}

function validaTelefone(telefone) {
  if(telefone != '' && !telefoneValido(telefone)) {
    return 'Preencha o campo telefone com um número válido.';
  }
}

function ehEmailValido(valor) {
  return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valor));
}

function validaEmail(email){
  if(email != '' && !ehEmailValido(email)){
    return 'Preencha com um email válido.';
  }
}

function validaNaturalidade(naturalidade) {
  if(naturalidade.length > 40) {
    return 'Preencha o campo naturalidade com no máximo 40 caracteres.';
  }
}

export function validaDenuncia(campos){
  return validaCaracteriscaVitima(campos.caracteristicasVitima) ||
         validaNome(campos.nome) ||
         validaGenero(campos.genero) ||
         validaDataDeNascimento(campos.dataNascimento) ||
         validaEndereco(campos.endereco) ||
         validaTelefone(campos.telefone) ||
         validaEmail(campos.email) ||
         validaNaturalidade(campos.naturalidade);
}

export function mostraAlerta(mensagem){
  alert(mensagem);
}
