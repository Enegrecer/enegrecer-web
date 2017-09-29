import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';


export default class NovaPessoaForm extends Component {
  constructor(props) {
    super(props);

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
      endereco: '',
      telefone: '',
      email: '',
    };
  }

  renderCampoTexto(name) {
      return (
        <Input
          type="textarea"
          id={name}
          value={this.state[name]}
          onChange={event => this.alterarCampoTexto(event, name)}
        />
      );
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

  alterarGenero(event) {
    this.setState({
      ...this.state,
      genero: event.target.value,
    });
    this.props.alterarPessoaForm(this.state);
  }

  alterarRaca(event) {
    this.setState({
      ...this.state,
      raca: event.target.value,
    });
    this.props.alterarPessoaForm(this.state);
  }

  alterarDataNascimento(event) {
    this.setState({
      ...this.state,
      dataNascimento: event.target.value,
    });
    this.props.alterarPessoaForm(this.state);
  }


  render() {
    return (
    <div>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" value={this.state.pessoaIdentificada} onChange={this.handleOptionChange}/>{' '}
          Conheço a vítima
        </Label>
      </FormGroup>


        <FormGroup>
          <Label for="nome">Nome</Label>
          {this.renderCampoTexto('nome')}
        </FormGroup>

        <FormGroup>
          <Label for="genero">Gênero</Label>
          <Input type="select" name="genero" id="genero" onChange={this.alterarGenero} value={this.state.genero}>
            <option value={''}>Escolha uma opção</option>
            <option value={'feminino'}>Feminino</option>
            <option value={'masculino'}>Masculino</option>
            <option value={'nao-binario'}>Não-Binário</option>
            <option value={'agenero'}>Agênero</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="raca">Cor ou raça</Label>
          <Input type="select" name="raca" id="raca" onChange={this.alterarRaca} value={this.state.raca}>
            <option value={''}>Escolha uma opção</option>
            <option value={'preta'}>Preta</option>
            <option value={'parda'}>Parda</option>
            <option value={'indigena'}>Indígena</option>
            <option value={'amarela'}>Amarela</option>
            <option value={'branca'}>Branca</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="dataNascimento">Data de Nascimento</Label>
          <Input type="date" name="dataNascimento" id="dataNascimento" placeholder="date placeholder" onChange={this.alterarDataNascimento}/>
        </FormGroup>
         <FormGroup>
          <Label for="informacoesComplementares">Você deseja fornecer maiores detalhes?</Label>
          {this.renderCampoTexto('informacoesComplementares')}
        </FormGroup>
        <FormGroup>
          <Label for="endereco">Endereço</Label>
          {this.renderCampoTexto('endereco')}
        </FormGroup>
         <FormGroup>
          <Label for="telefone">Telefone</Label>
          {this.renderCampoTexto('telefone')}
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          {this.renderCampoTexto('email')}
        </FormGroup>
        <br />
      </div>);
  }
}

NovaPessoaForm.propTypes = {
  alterarPessoaForm: PropTypes.func.isRequired,
};
