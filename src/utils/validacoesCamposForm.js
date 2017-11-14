export function campoObrigatorio(valor) {
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
  return ehEmailValido(valor);
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

export function validaCamposForm(campos) {
  return campos !== null && campoObrigatorio(campos.nome) &&
      validarDataDeNascimento(campos.dataNascimento) &&
      campoObrigatorio(campos.estado) &&
      validarTelefone(campos.telefone) &&
      validarEmail(campos.email);
}