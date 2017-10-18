export function validaCamposForm(state){

    return validarTelefone(state.vitima.pessoa.telefone) &&
            validarEmail(state.vitima.pessoa.email) &&
            campoObrigatorio(state.vitima.pessoa.genero) &&
            campoObrigatorio(state.vitima.pessoa.raca) &&
            campoObrigatorio(state.vitima.pessoa.estado);
}

function validarTelefone(valor){
     return (!isNaN(valor) && ehNumeroValido(valor) && tamanhoTelefoneValido(valor)) || (valor === "");
}

function validarEmail(valor){
    return ehEmailValido(valor);
}

export function campoObrigatorio(valor){
    return valor.trim() != "";
}

function tamanhoTelefoneValido(valor){
    return valor.length == 10 || valor.length == 11;
}

function ehNumeroValido(valor){
    var reg = new RegExp('^[0-9]+$');
    return (reg.test(valor));
}

function ehEmailValido(valor){
    return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valor));
}