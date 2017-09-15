import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

export default class NovaPessoaForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

    this.state = {
      pessoaIdentificada: 'nao',
      nome: '',
      genero: '',
      raca: '',
      tipo: '',
      informacoesComplementares: '',
      dataNascimento: '',
      descricao: '',
    };
  }

  handleChange(event, property) {
    this.setState({
      ...this.state,
      [property]: event.target.value });
    this.props.alterarPessoaForm(this.state);
  }

  handleOptionChange(changeEvent) {
    this.setState({
      ...this.state,
      pessoaIdentificada: changeEvent.target.value,
    });
    this.props.alterarPessoaForm(this.state);
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
        checked={this.state.pessoaIdentificada === { name }}
        onChange={this.handleOptionChange}
      />
    );
  }
  render() {
    return (
      <div>
        <label htmlFor="vitimaIdentificada">Vitima Identificada:</label>
        <RadioButtonGroup name="identificacaoVitima" defaultSelected="nao">
          {this.renderRadioButton('sim')}
          {this.renderRadioButton('nao')}
        </RadioButtonGroup>
        <label htmlFor="nome">Nome:</label>
        {this.renderTextField('nome')}

        <label htmlFor="genero">Gênero</label>
        {this.renderTextField('genero')}

        <label htmlFor="raca">Raça:</label>
        {this.renderTextField('raca')}
        <br />

        <label htmlFor="tipo">Tipo:</label>
        {this.renderTextField('tipo')}
        <br />

        <label htmlFor="informacoesComplementares">Informacoes Complementares:</label>
        {this.renderTextField('informacoesComplementares')}
        <br />

        <label htmlFor="dataNascimento">Data de Nascimento:</label>
        {this.renderTextField('dataNascimento')}
        <br />

        <label htmlFor="descricao">Descrição:</label>
        {this.renderTextField('descricao')}
        <br />
      </div>);
  }
}

NovaPessoaForm.propTypes = {
  alterarPessoaForm: PropTypes.func.isRequired,
};
