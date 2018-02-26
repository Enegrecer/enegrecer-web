import PropTypes from 'prop-types';
import $ from 'jquery';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Materialize from 'materialize-css';
import { criarDenunciaRequisicao } from '../../actions/criarDenunciaActions';
import NovaDenunciaForm from '../../components/denuncias/NovaDenunciaForm';
import { validaDenuncia } from './validaDenuncia';

export class NovaDenunciaContainer extends Component {
  constructor(props) {
    super(props);
    this.onPressSaveButton = this.onPressSaveButton.bind(this);
    this.adicionarDenunciaNoForm = this.adicionarDenunciaNoForm.bind(this);
    this.state = {
      vitima: null,
      denunciante: null,
      testemunha: null
    };
  }

  componentDidMount() {
    $(document).ready(() => {
      $('select').material_select();
      Materialize.updateTextFields();
      $('.datepicker').pickadate({
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
  onPressSaveButton() {
    const mensagemError = validaDenuncia(this.state.vitima);
    if (mensagemError === undefined) {
      this.props.criarDenunciaRequisicao({
        ...this.state,
        onSuccess: push('/'),
      });
    } else {
      alert(mensagemError);
    }
  }


  adicionarDenunciaNoForm(denuncia) {
    this.setState({
      ...denuncia,
    })
  }

  render() {
    return (
      <NovaDenunciaForm
        salvarDenuncia={this.onPressSaveButton}
        alterarDenunciaForm={this.adicionarDenunciaNoForm}
      />
    );
  }
}

NovaDenunciaContainer.propTypes = {
  criarDenunciaRequisicao: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  denunciante: state.auth ? state.auth.user.uid : undefined,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  criarDenunciaRequisicao,
}, dispatch);

const reduxNovaDenuncia = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NovaDenunciaContainer);

export default reduxNovaDenuncia;
