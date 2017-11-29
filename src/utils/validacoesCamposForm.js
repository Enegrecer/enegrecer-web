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

function validarDataDeNascimento(valor){
  if(valor.trim() === ''){
    return true;
  }
    var data = new Date(valor);
    var dataDeHoje = new Date();
    var primeiraDataValida = new Date('01/01/1900');

    data = data.toJSON().slice(0,10)
    dataDeHoje = dataDeHoje.toJSON().slice(0,10)
    primeiraDataValida = primeiraDataValida.toJSON().slice(0,10)
    
    return (data > primeiraDataValida) && (data < dataDeHoje);
}

  export function alertaDeCamposNaoPreenchidos(campos){
    var dialog = true;
    if(verificarCamposVaziosdaVitima(campos) || campos === null){
      dialog =  window.confirm('Notamos que ainda existe dados sobre a vítima que não foram informados, é algo importante, deseja continuar preenchendo a denúncia?');
    }
    return dialog;
  }

function verificarCamposVaziosdaVitima(campos){
  return  campoVazio(campos.nome) ||
          campoVazio(campos.genero) ||
          campoVazio(campos.raca) ||
          campoVazio(campos.informacoesComplementares) ||
          campoVazio(campos.dataNascimento) ||
          campoVazio(campos.endereco) ||
          campoVazio(campos.estado)||
          campoVazio(campos.telefone) ||
          campoVazio(campos.email) ||
          campoVazio(campos.naturalidade) ||
          campoVazio(campos.caracteristicaVitima);
}

export function validaCamposForm(campos) {
  
  return campos !== null && 
      validarDataDeNascimento(campos.dataNascimento) &&
      validarTelefone(campos.telefone) &&
      validarEmail(campos.email); 
}
