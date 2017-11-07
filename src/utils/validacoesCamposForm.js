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
    data.setHours(0,0,0,0);
    var dataDeHoje = new Date();
    dataDeHoje.setHours(0,0,0,0);
    var primeiraDataValida = new Date('01/01/1900');
    primeiraDataValida.setHours(0,0,0,0);
    return (data > primeiraDataValida) && (data < dataDeHoje);

}

export function validaCamposForm(vitima) {
  return vitima !== null && campoObrigatorio(vitima.pessoa.nome) &&
      campoObrigatorio(vitima.pessoa.genero) &&
      campoObrigatorio(vitima.pessoa.raca) &&
      validarDataDeNascimento(vitima.pessoa.dataNascimento) &&
      campoObrigatorio(vitima.pessoa.estado) &&
      validarTelefone(vitima.pessoa.telefone) &&
      validarEmail(vitima.pessoa.email);
}