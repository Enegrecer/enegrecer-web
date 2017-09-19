import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';

export default class NovaPessoaForm extends Component {
  constructor(props) {
    super(props);
    let formatoDataHora;

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.alterarCampoTexto = this.alterarCampoTexto.bind(this);
    this.alterarGenero = this.alterarGenero.bind(this);
    this.alterarRaca = this.alterarRaca.bind(this);
    this.alterarDataNascimento = this.alterarDataNascimento.bind(this);

    this.state = {
      pessoaIdentificada: false,
      nome: '',
      genero: '',
      raca: '',
      informacoesComplementares: '',
      dataNascimento: '',
      descricao: '',
    };
  }
  
  alterarCampoTexto(event, property) {
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

  alterarGenero(event, index, value) {
    this.setState({
      ...this.state,
      genero: value,
    });
  }

  alterarRaca(event, index, value) {
    this.setState({
      ...this.state,
      raca: value,
    });
  }

  alterarDataNascimento(event, date) {
    this.setState({
      ...this.state,
      dataNascimento: date,
    });
  }

  renderTextField(name) {
    return (
      <TextField
        id={name}
        value={this.state[name]}
        onChange={event => this.alterarCampoTexto(event, name)}
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
          onChange={this.alterarGenero}
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
          onChange={this.alterarRaca}
        >
          <MenuItem value={'preta'} primaryText="Preta" />
          <MenuItem value={'parda'} primaryText="Parda" />
          <MenuItem value={'indígena'} primaryText="Indígena" />
          <MenuItem value={'amarela'} primaryText="Amarela" />
          <MenuItem value={'branca'} primaryText="Branca" />
        </SelectField>
        <br />

        <label htmlFor="informacoesComplementares">Informacoes Complementares:</label>
        {this.renderTextField('informacoesComplementares')}
        <br />

        <label htmlFor="dataNascimento">Data de Nascimento:</label>
        <DatePicker
          id="dataNascimento"
          container="inline"
          value={this.state.dataNascimento}
          onChange={this.alterarDataNascimento}
        />
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
