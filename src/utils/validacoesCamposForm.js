export function campoVazio(valor) {
<<<<<<< HEAD
  return valor.trim() === '';
=======
  const novoValor = (valor === undefined) ? '' : valor
  return novoValor.trim() === '';
}

function temCaractereEspecial(valor) {
  const format = /[!@#$%^&*()_+-=[\]{};':"\\|,.<>/?]+/;
  return format.test(valor);
}

/*
function temAcentuacao(valor) {
  const format = /[\wÀ-ú]/;
  return format.test(valor)
}
*/
function temNumero(valor) {
  const format = /\d/;
  return format.test(valor);
}

function nomeDaVitimaInvalido(valor) {
  return temNumero(valor) || temCaractereEspecial(valor);
>>>>>>> 6bd157b2892750730c330a7c5acad72c27c08a22
}

function tamanhoTelefoneValido(valor) {
  return valor.length === 14 || valor.length === 15;
}

function formatoDeTelefoneValido(valor) {
  const reg = new RegExp(/^\([1-9]{2}\) [0-9][0-9]{3,4}-[0-9]{3,4}$/);
  return reg.test(valor);
}

function ehEmailValido(valor) {
  return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valor));
}

function validarEmail(valor) {
  return ehEmailValido(valor) || valor === '';
}

function validarTelefone(valor) {
  return (formatoDeTelefoneValido(valor) && tamanhoTelefoneValido(valor)) || (valor === '');
}

function validarDataDeNascimento(valor) {
  if (valor.trim() === '') {
    return true;
  }
  var data = new Date(valor);
  var dataDeHoje = new Date();
  var primeiraDataValida = new Date('01/01/1900');

  data = data.toJSON().slice(0,10);
  dataDeHoje = dataDeHoje.toJSON().slice(0,10);
  primeiraDataValida = primeiraDataValida.toJSON().slice(0,10);

  return (data > primeiraDataValida) && (data < dataDeHoje);
}

function alertaDeCamposNaoPreenchidos(campos) {
  var dialog  =  window.confirm('Você não inseriu alguma(s) informação(s) sobre a vítima? Isso é algo importante, você pode cancelar e complementar.');
  return dialog;
}

function alertaDeCamposObrigatorios() {
  alert('Você não inseriu informações sobre a vítima. Precisamos que você complemente inserindo ao menos uma descrição informal sobre a pessoa.');
  focoNoCampo('informacoesComplementares');
}

function focoNoCampo(idCampo) {
  const campoHtml = document.getElementById(idCampo);
  if (campoHtml) {
    campoHtml.focus();
    campoHtml.style.borderColor = 'red';
  }
}

<<<<<<< HEAD
function verificarCamposVaziosdaVitima(campos){
  return  campos != null &&
          campoVazio(campos.nome) &&
          campoVazio(campos.genero) &&
          campoVazio(campos.raca) &&
          campoVazio(campos.dataNascimento) &&
          campoVazio(campos.endereco) &&
          campoVazio(campos.estado) &&
          campoVazio(campos.telefone) &&
          campoVazio(campos.email) &&
          campoVazio(campos.naturalidade) &&
          campoVazio(campos.caracteristicaVitima);
}

function validarInputsDaVitima(campos){
  return validarDataDeNascimento(campos.dataNascimento) &&
=======
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
>>>>>>> 6bd157b2892750730c330a7c5acad72c27c08a22
  validarTelefone(campos.telefone) &&
  validarEmail(campos.email);
}

function alertaCamposNaoPreenchidosCorretamente() {
  alert('Existem campos que foram preenchidos de forma incorreta. \n Favor verificar os seguintes campos: Data de nascimento da vítima, Telefone da vítima e/ou E-mail da vítima.')
}

export function validaCamposForm(campos) {

<<<<<<< HEAD
  if (campos === null || campoVazio(campos.informacoesComplementares)) {
    alertaDeCamposObrigatorios();
    return false;
  }
  if (campos === null || verificarCamposVaziosdaVitima(campos)){
    return alertaDeCamposNaoPreenchidos(campos);
  } else {
    if (validarInputsDaVitima(campos)){
      return true;
    } else {
      alertaCamposNaoPreenchidosCorretamente();
      return false;
    }
=======
export function validaCamposForm(campos, obrigatorios = []) {
  if (verificarCamposObrigatoriosVazios(campos, obrigatorios)) {
    return alertaDeCamposObrigatorios();
  } else if (verificarCamposVaziosdaVitima(campos)) {
    return alertaDeCamposNaoPreenchidos();
  } else if (!validarInputsDaVitima(campos)) {
    return alertaCamposNaoPreenchidosCorretamente();
>>>>>>> 6bd157b2892750730c330a7c5acad72c27c08a22
  }
}
