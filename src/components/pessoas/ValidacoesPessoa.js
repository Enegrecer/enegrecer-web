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

function validarTelefone(valor) {
  return !isNaN(valor) && ehNumeroValido(valor) && tamanhoTelefoneValido(valor);
}

function ehEmailValido(valor) {
  return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valor));
}

function validarEmail(valor) {
  return ehEmailValido(valor) && valor.trim() !== '';
}

export function validarCampo(idCampo, valorCampo) {
  if (idCampo === 'email') {
    return validarEmail(valorCampo);
  } else if (idCampo === 'telefone') {
    return validarTelefone(valorCampo);
  }
  return null;
}

