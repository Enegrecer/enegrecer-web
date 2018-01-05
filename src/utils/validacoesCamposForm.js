export function campoVazio(valor) {
  const novoValor = (valor === undefined) ? '' : valor
  return novoValor.trim() === '';
}

function temCaractereEspecial(valor) {
  const format = /[!@#$%^&*()_+-=[\]{};':"\\|,.<>/?]+/;
  return format.test(valor);
}

function temNumero(valor) {
  const format = /\d/;
  return format.test(valor);
}

function nomeDaVitimaInvalido(valor) {
  return temNumero(valor) || temCaractereEspecial(valor);
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
  alert('Atenção! Para completar o envio da denúncia, precisamos do preenchimento do seguinte campo: "Por favor, descreva aqui as características da vítima:"')
  focoNoCampo('caracteristicasVitima-vitima');
  return false
}

export function verificarCamposObrigatoriosVazios(campos, obrigatorios = []) {
  return campos === null ||
    (obrigatorios.length > 0 &&
      obrigatorios.every(attr => campoVazio(campos[attr])))
}

export function verificarCamposVaziosdaVitima(campos) {
  const getCamposValidos = attr => typeof campos[attr] === 'string' && attr !== 'caracteristicasVitima';

  const attrs = Object.keys(campos).filter(getCamposValidos)

  return campos != null && attrs.every(attr => campoVazio(campos[attr]));
}

function validarInputsDaVitima(campos) {
  return !nomeDaVitimaInvalido(campos.nome) &&
  validarDataDeNascimento(campos.dataNascimento) &&
  validarTelefone(campos.telefone) &&
  validarEmail(campos.email);
}

function alertaCamposNaoPreenchidosCorretamente() {
  alert('Existem campos que foram preenchidos de forma incorreta. \n ' +
  'Favor verificar os seguintes campos: Data de nascimento da vítima, Telefone da vítima e/ou E-mail da vítima.')
  return false
}

export function validaTamanhoDeCampoString(string, tamanho) {
  if (string.length === tamanho) {
    return true;
  }
  return false;
}

export function validaCamposForm(campos, obrigatorios = []) {
  if (verificarCamposObrigatoriosVazios(campos, obrigatorios)) {
    return alertaDeCamposObrigatorios();
  } else if (verificarCamposVaziosdaVitima(campos)) {
    return alertaDeCamposNaoPreenchidos();
  } else if (!validarInputsDaVitima(campos)) {
    return alertaCamposNaoPreenchidosCorretamente();
  }

  return true;
}
