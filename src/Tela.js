import Hammer from 'hammerjs/hammer'
import Materialize from 'materialize-css';
import $ from 'jquery';


export const iniciaCamposMaterialize = () => {
  $(document).ready(() => {
    $('select').material_select();
    Materialize.updateTextFields();
  });
}

export const getElementoPorId = elementoId => $(`#${elementoId}`)


export const initHummer = (elementId) => {
  const element = document.getElementById(elementId);
  Hammer(element);
}
