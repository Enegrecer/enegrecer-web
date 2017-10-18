export function validarCampo(idCampo, valorCampo){
    if(idCampo === 'email'){
         return validarEmail(valorCampo);
    }
    else if(idCampo === 'telefone'){
        return validarTelefone(valorCampo);
    }
}


function validarTelefone(valor){
     return !isNaN(valor) && ehNumeroValido(valor) && tamanhoTelefoneValido(valor);
}

function validarEmail(valor){
    return ehEmailValido(valor) && valor.trim() != "";
}

export function campoObrigatorio(valor){
    //console.log("aaaaaa");
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


