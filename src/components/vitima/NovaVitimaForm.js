import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';


export default class NovaVitimaForm extends Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.alterarCampoTexto = this.alterarCampoTexto.bind(this);
    this.alterarGenero = this.alterarGenero.bind(this);
    this.alterarRaca = this.alterarRaca.bind(this);
    this.alterarDataNascimento = this.alterarDataNascimento.bind(this);
    this.alterarEstado = this.alterarEstado.bind(this);

    this.state = {
      pessoaIdentificada: false,
      nome: '',
      genero: '',
      raca: '',
      informacoesComplementares: '',
      dataNascimento: '',
      endereco: '',
      estado: '',
      telefone: '',
      email: '',
    };
  }

  alterarCampoTexto(event, property) {
    const valor = event.target.value;

    this.setState({ [property]: valor },
      function() {
          this.alteraState();
      });
  }

  handleOptionChange(event) {
      this.setState({
      pessoaIdentificada: event.target.checked,
    }, function() {
        this.alteraState();
    });
  }

  alterarGenero(event) {
    this.setState({
      genero: event.target.value,
    }, function() {
        this.alteraState();
    });
  }

  alterarRaca(event) {
    this.setState({
      raca: event.target.value,
    }, function() {
        this.alteraState();
    });
  }

  alterarDataNascimento(event) {
    this.setState({
      dataNascimento: event.target.value,
    }, function() {
        this.alteraState();
    });
  }

  alterarEstado(event) {
    this.setState({
      estado: event.target.value,
    }, function() {
        this.alteraState();
    });
  }

  alteraState () {
    this.props.alterarVitimaForm(this.state);
  }

  renderCampoTexto(name) {
    return (
      <Input
        id={name}
        value={this.state[name]}
        onChange={event => this.alterarCampoTexto(event, name)}
        autoComplete="off"
      />
    );
  }

  renderCampo40Caracteres(name) {
    return (
      <Input
        id={name}
        value={this.state[name]}
        onChange={event => this.alterarCampoTexto(event, name)}
        autoComplete="off"
        maxLength="40"
      />
    );
  }

    renderCampo255Caracteres(name) {
    return (
      <Input
        id={name}
        value={this.state[name]}
        onChange={event => this.alterarCampoTexto(event, name)}
        autoComplete="off"
        maxLength="255"
      />
    );
  }

  render() {
    return (
      <div>
        <h3>Informacões da Vítima</h3>
        <br/>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" onChange={this.handleOptionChange} />{' '}
            Conheço a Vítima
          </Label>

        </FormGroup>


        <FormGroup>
          <Label for="nome">Nome</Label>
          {this.renderCampo40Caracteres('nome')}
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
          {this.renderCampo255Caracteres('endereco')}
        </FormGroup>
        <FormGroup>
          <Label for="estado">Estado</Label>
          <Input type="select" name="estado" id="estado" onChange={this.alterarEstado} value={this.state.estado}>
            <option value={''}>Escolha uma opção</option>
            <option value={'AC'}>AC</option>
            <option value={'AL'}>AL</option>
            <option value={'AM'}>AM</option>
            <option value={'AP'}>AP</option>
            <option value={'BA'}>BA</option>
            <option value={'CE'}>CE</option>
            <option value={'DF'}>DF</option>
            <option value={'ES'}>ES</option>
            <option value={'GO'}>GO</option>
            <option value={'MA'}>MA</option>
            <option value={'MG'}>MG</option>
            <option value={'MS'}>MS</option>
            <option value={'MT'}>MT</option>
            <option value={'PA'}>PA</option>
            <option value={'PB'}>PB</option>
            <option value={'PE'}>PE</option>
            <option value={'PI'}>PI</option>
            <option value={'PR'}>PR</option>
            <option value={'RJ'}>RJ</option>
            <option value={'PI'}>RN</option>
            <option value={'PR'}>RS</option>
            <option value={'RJ'}>RO</option>
            <option value={'RR'}>RR</option>
            <option value={'SC'}>SC</option>
            <option value={'SE'}>SE</option>
            <option value={'SP'}>SP</option>
            <option value={'TO'}>TO</option>
          </Input>
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

NovaVitimaForm.propTypes = {
  alterarVitimaForm: PropTypes.func.isRequired,
};

