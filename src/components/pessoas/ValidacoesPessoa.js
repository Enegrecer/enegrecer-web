export function validarTelefone(valor){
     return !isNaN(valor) && ehNumeroValido(valor) && tamanhoTelefoneValido(valor);
}

function tamanhoTelefoneValido(valor){
    return valor.length == 10 || valor.length == 11;
}

function ehNumeroValido(valor){
    var reg = new RegExp('^[0-9]+$');
    return (reg.test(valor));
}

export function validarEmail(valor){
    return ehEmailValido(valor) && valor.trim() != "";
}

function ehEmailValido(valor){
    return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valor));
}

