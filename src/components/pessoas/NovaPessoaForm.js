import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';

export default class NovaPessoaForm extends Component {
  constructor(props) {
    super(props);

    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSelectFieldGeneroChange = this.handleSelectFieldGeneroChange.bind(this);
    this.handleSelectFieldRacaChange = this.handleSelectFieldRacaChange.bind(this);

    this.state = {
      pessoaIdentificada: false,
      nome: '',
      genero: '',
      raca: '',
      tipo: '',
      informacoesComplementares: '',
      dataNascimento: '',
      descricao: '',
    };
  }

  handleTextFieldChange(event, property) {
    this.setState({
      ...this.state,
      [property]: event.target.value });
    this.props.alterarPessoaForm(this.state);
  }

  handleOptionChange(changeEvent, isInputChecked) {
    this.setState({
      ...this.state,
      pessoaIdentificada: isInputChecked,
    });
    this.props.alterarPessoaForm(this.state);
  }

  handleSelectFieldGeneroChange(event, index, value) {
    this.setState({
      ...this.state,
      genero: value,
    });
  }

  handleSelectFieldRacaChange(event, index, value) {
    this.setState({
      ...this.state,
      raca: value,
    });
  }

  renderTextField(name) {
    return (
      <TextField
        id={name}
        value={this.state[name]}
        onChange={event => this.handleTextFieldChange(event, name)}
      />
    );
  }

  render() {
    return (
      <div>
        <Checkbox
          label="Conheço a vítima"
          checked={this.state.pessoaIdentificada}
          onCheck={this.handleOptionChange}
        />

        <label htmlFor="nome">Nome:</label>
        {this.renderTextField('nome')}
        <br />
        <SelectField
          name="genero"
          floatingLabelText="Gênero"
          value={this.state.genero}
          onChange={this.handleSelectFieldGeneroChange}
        >
          <MenuItem value={'feminino'} primaryText="Feminino" />
          <MenuItem value={'masculino'} primaryText="Masculino" />
          <MenuItem value={'não-binario'} primaryText="Não-Binário" />
          <MenuItem value={'agênero'} primaryText="Agênero" />
        </SelectField>

        <SelectField
          id="raca"
          floatingLabelText="Cor ou raça"
          value={this.state.raca}
          onChange={this.handleSelectFieldRacaChange}
        >
          <MenuItem value={'preta'} primaryText="Preta" />
          <MenuItem value={'parda'} primaryText="Parda" />
          <MenuItem value={'indígena'} primaryText="Indígena" />
          <MenuItem value={'amarela'} primaryText="Amarela" />
          <MenuItem value={'branca'} primaryText="Branca" />
        </SelectField>
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
