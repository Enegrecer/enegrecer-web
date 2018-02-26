import Hammer from 'hammerjs/hammer'
import Materialize from 'materialize-css';
import $ from 'jquery';


export const iniciaCamposMaterialize = () => {
  $(document).ready(() => {
    $('select').material_select();
    Materialize.updateTextFields();
    $('#dataOcorrencia').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year
      // The title label to use for the month nav buttons
      labelMonthNext: 'Proximo Mês',
      labelMonthPrev: 'Mês Anterior',
      // The title label to use for the dropdown selectors
      labelMonthSelect: 'Selecionar Mês',
      labelYearSelect: 'Selecionar Ano',
      // Months and weekdays
      monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      // Materialize modified
      weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      // Today and clear
      today: 'Hoje',
      clear: 'Limpar',
      close: 'Fechar',
      // The format to show on the `input` element
      format: 'dd/mm/yyyy'
    });
  });
}
