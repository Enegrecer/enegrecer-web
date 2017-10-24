import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class NovaDenunciaForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      detalhamento: '',
      dataHoraOcorrencia: '',
      idCategoria: '',
      endereco: '',
      latitude: '',
      longitude: '',
    };
  }

  handleChange(event, property) {
    this.setState({ [property]: event.target.value });
  }

  handleSubmit() {
    this.props.salvarDenuncia(this.state);
  }

  renderTextField(name) {
    return (
      <TextField
        id={name}
        value={this.state[name]}
        onChange={event => this.handleChange(event, name)}
      />
    );
  }

  render() {
    return (
      <form name="form-denuncia" id="form-nova-denuncia" onSubmit={this.handleSubmit}>
        <h1>Nova Denúncia</h1>
        <label htmlFor="detalhamento">Detalhamento:</label>
        {this.renderTextField('detalhamento')}

        <label htmlFor="dataHoraOcorrencia">Data e Hora do ocorrido:</label>
        {this.renderTextField('dataHoraOcorrencia')}

        <label htmlFor="idCategoria">Categoria (injuria ou racismo)</label>
        {this.renderTextField('idCategoria')}

        <h3>Local do crime</h3>
        <br />

        <label htmlFor="endereco">Endereço:</label>
        {this.renderTextField('endereco')}
        <br />

        <label htmlFor="latitude">Latitude:</label>
        {this.renderTextField('latitude')}
        <br />

        <label htmlFor="longitude">Longitude:</label>
        {this.renderTextField('longitude')}
        <br />

        <button name="salvarDenuncia" type="submit" id="btn-salvar-denuncia">
              Salvar
        </button>
      </form>);
  }
}

NovaDenunciaForm.propTypes = {
  salvarDenuncia: PropTypes.func.isRequired,
};
