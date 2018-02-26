import Hammer from 'hammerjs/hammer'
import Materialize from 'materialize-css';
import $ from 'jquery';


export const iniciaCamposMaterialize = () => {
  $(document).ready(() => {
    $('select').material_select();
    Materialize.updateTextFields();
  });
}

export const initHummer = (elementId) => {
  var element = document.getElementById(elementId);
  new Hammer(element);
}