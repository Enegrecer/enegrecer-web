export function campoDesejadoEhVazio(valor) {
  return valor.trim() !== '';
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

  export function verificarCamposDaVitima(campos){
    var dialog = false;
    if(verificarCamposVazios(campos)){
      dialog =  window.confirm('Notamos que nenhuma informação sobre a vítima foi inserida, é algo importante, deseja voltar e complementar a denúncia?');
    }
    return dialog;
  }

  function verificarCamposVazios(campos){
    for (var key in campos){
      if(!campoDesejadoEhVazio(key)){
        return false;
      }
    }
    return true; 
  }


export function validaCamposForm(campos) {
  return campos !== null && 
      validarDataDeNascimento(campos.dataNascimento) &&
      validarTelefone(campos.telefone) &&
      validarEmail(campos.email); 
}
