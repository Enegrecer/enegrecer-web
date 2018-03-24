import Hammer from 'hammerjs/hammer';
import Materialize from 'materialize-css';
import $ from 'jquery';

export const iniciaCampoData = (id) => {
  $(`#${id}`).pickadate({
    closeOnSelect: true,
    selectMonths: true,
    selectYears: 80,
    labelMonthNext: 'Proximo Mês',
    labelMonthPrev: 'Mês Anterior',
    labelMonthSelect: 'Selecionar Mês',
    labelYearSelect: 'Selecionar Ano',
    monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Fechar',
    format: 'dd/mm/yyyy'
  });
};

export const iniciaCamposMaterialize = () => {
  $(document).ready(() => {
    // $('select').material_select();
    // Materialize.updateTextFields();
  });
};

export const getElementoPorId = elementoId => $(`#${elementoId}`);

export const initHummer = (elementId) => {
  const element = document.getElementById(elementId);
  Hammer(element);
};
