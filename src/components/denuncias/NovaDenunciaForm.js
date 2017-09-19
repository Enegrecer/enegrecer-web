import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import NovaVitimaForm from '../pessoas/vitima/NovaVitimaForm';

export default class NovaDenunciaForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.adicionarVitimaEmForm = this.adicionarVitimaEmForm.bind(this);

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

  handleOptionChange(changeEvent) {
    this.setState({
      idCategoria: changeEvent.target.value,
    });
  }

  adicionarVitimaEmForm(state) {
    this.setState({
      ...this.state,
      vitima: state,
    });
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

  renderRadioButton(name) {
    return (
      <RadioButton
        value={name}
        label={name}
        checked={this.state.idCategoria === { name }}
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

        <label htmlFor="idCategoria">Categoria:</label>
        <RadioButtonGroup name="idCategoria" onChange={this.handleOptionChange}>
          {this.renderRadioButton('injuria')}
          {this.renderRadioButton('racismo')}
        </RadioButtonGroup>

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

        <NovaVitimaForm alterarVitimaForm={this.adicionarVitimaEmForm} />

        <button name="salvarDenuncia" type="submit" id="btn-salvar-denuncia">
              Salvar
        </button>
      </form>);
  }
}

NovaDenunciaForm.propTypes = {
  salvarDenuncia: PropTypes.func.isRequired,
};
