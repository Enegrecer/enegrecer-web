export function campoVazio(valor) {
  return valor.trim() === '';
}

function tamanhoTelefoneValido(valor) {
  return valor.length === 10 || valor.length === 11;
}

function ehNumeroValido(valor) {
  const reg = new RegExp('^[0-9]+$');
  return (reg.test(valor));
}

function ehEmailValido(valor) {
  return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valor));
}

function validarEmail(valor) {
  return ehEmailValido(valor) || valor === '';
}

function validarTelefone(valor) {
  return (!isNaN(valor) && ehNumeroValido(valor) && tamanhoTelefoneValido(valor)) || (valor === '');
}

function validarDataDeNascimento(valor) {
  if (valor.trim() === '') {
    return true;
  }
  const data = new Date(valor).toJSON().slice(0, 10);
  const dataDeHoje = new Date().toJSON().slice(0, 10);
  const primeiraDataValida = new Date('01/01/1900').toJSON().slice(0, 10);

  return (data > primeiraDataValida) && (data < dataDeHoje);
}

function alertaDeCamposNaoPreenchidos() {
  return window.confirm('Você não inseriu alguma(s) informação(s) sobre a vítima? ' +
  'Isso é algo importante, você pode cancelar e complementar.');
}

function focoNoCampo(idCampo) {
  const campoHtml = document.getElementById(idCampo);
  if (campoHtml) {
    campoHtml.focus();
    campoHtml.style.borderColor = 'red';
  }
}

export function alertaDeCamposObrigatorios() {
  alert('Você não inseriu informações sobre a vítima. ' +
  'Precisamos que você complemente inserindo ao menos uma descrição informal sobre a pessoa.');
  focoNoCampo('caracteristicasVitima');
  return false
}

function verificarCamposVaziosdaVitima(campos) {
  return campos != null &&
        campoVazio(campos.nome) &&
        campoVazio(campos.genero) &&
        campoVazio(campos.raca) &&
        campoVazio(campos.dataNascimento) &&
        campoVazio(campos.endereco) &&
        campoVazio(campos.estado) &&
        campoVazio(campos.telefone) &&
        campoVazio(campos.email) &&
        campoVazio(campos.naturalidade);
}

function validarInputsDaVitima(campos) {
  return validarDataDeNascimento(campos.dataNascimento) &&
  validarTelefone(campos.telefone) &&
  validarEmail(campos.email);
}

function alertaCamposNaoPreenchidosCorretamente() {
  alert('Existem campos que foram preenchidos de forma incorreta. \n ' +
  'Favor verificar os seguintes campos: Data de nascimento da vítima, Telefone da vítima e/ou E-mail da vítima.')
  return false
}

export function validaCamposForm(campos) {
  if (campos === null || campoVazio(campos.caracteristicasVitima)) {
    return alertaDeCamposObrigatorios();
  } else if (verificarCamposVaziosdaVitima(campos)) {
    return alertaDeCamposNaoPreenchidos();
  } else if (!validarInputsDaVitima(campos)) {
    return alertaCamposNaoPreenchidosCorretamente();
  }

  return true;
}
