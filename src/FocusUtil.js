
const CAMPO_CARACTERISTICA_DA_VITIMA = 'caracteristicaDaVitima-vitima';

export function focoNoCampo() {
  const campoHtml = document.getElementById(CAMPO_CARACTERISTICA_DA_VITIMA);
  if (campoHtml) {
    campoHtml.focus();
    campoHtml.errorText = 'Campo obrigatório';
  }
}

export function desfocaCampo() {
  const campoHtml = document.getElementById(CAMPO_CARACTERISTICA_DA_VITIMA);
  if (campoHtml) {
    campoHtml.style.borderColor = null;
  }
}
