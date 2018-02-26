import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NovaVitimaForm from './vitima/NovaVitimaForm';
import NovaTestemunhaForm from './testemunha/NovaTestemunhaForm';
import DetalhamentoDenuncia from './DetalhamentoDenuncia';

export default class NovaDenunciaForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      detalhamento: '',
      dataOcorrencia: '',
      horaOcorrencia: '',
      idCategoria: '',
      endereco: '',
      estado: '',
      vitima: {},
      testemunha: {}
    }
  }

  handleChange(dados) {
    this.setState({
      ...dados,
    }, () => {
      this.props.alterarDenunciaForm(this.state)
    });
  }

  handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    this.props.salvarDenuncia();
  }

  render() {
    return (
      <form
        name="form-denuncia"
        id="form-nova-denuncia"
        onSubmit={event => this.handleSubmit(event)}
      >
        <DetalhamentoDenuncia handleChange={this.handleChange} />

        <NovaVitimaForm handleChange={this.handleChange} />

        <NovaTestemunhaForm handleChange={this.handleChange} />

        <br />
        <button className="btn waves-effect waves-light" type="submit" name="action">
            Enviar Denúncia
        </button>
      </form>);
  }
}

NovaDenunciaForm.defaultProps = {
  alterarDenunciaForm: () => {}
};

NovaDenunciaForm.propTypes = {
  salvarDenuncia: PropTypes.func.isRequired,
  alterarDenunciaForm: PropTypes.func
};
