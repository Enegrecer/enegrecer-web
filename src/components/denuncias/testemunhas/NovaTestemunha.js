import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class NovaTestemunha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: true,
    };
  }

  handleChange(event, property) {
    this.setState({ [property]: event.target.value });
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
      <div>
        <h4>Adicionar Testemunha</h4>

        <label htmlFor="nome">Nome:</label>
        {this.renderTextField('nome')}
        <br />

        <label htmlFor="genero">Gênero:</label>
        {this.renderTextField('genero')}
        <br />

        <label htmlFor="raca">Raça:</label>
        {this.renderTextField('raca')}
        <br />

        <label htmlFor="dataNascimento">Data de Nascimento:</label>
        {this.renderTextField('dataNascimento')}
        <br />

        <label htmlFor="informacoesComplementares">Informações Complementares:</label>
        {this.renderTextField('informacoesComplementares')}
        <br />

        <label htmlFor="email">E-mail:</label>
        {this.renderTextField('email')}
        <br />

        <label htmlFor="telefone">Telefone:</label>
        {this.renderTextField('telefone')}
        <br />

        <label htmlFor="endereco">Residência:</label>
        {this.renderTextField('endereco')}
        <br />
      </div>);
  }
}
