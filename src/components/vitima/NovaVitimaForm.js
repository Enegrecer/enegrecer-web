import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';


export default class NovaVitimaForm extends Component {
  constructor(props) {
    super(props);

    this.alterarCheckbox = this.alterarCheckbox.bind(this);
    this.alterarCampo = this.alterarCampo.bind(this);
    this.renderSeletorDeEstados = this.renderSeletorDeEstados.bind(this);

    this.state = {
      pessoaIdentificada: false,
      souAVitima: false,
      conhecoAVitima: false,
      nome: '',
      genero: '',
      raca: '',
      dataNascimento: '',
      endereco: '',
      estado: '',
      telefone: '',
      email: '',
      naturalidade: '',
      caracteristicaVitima: '',
      camposNaoPreenchidos: '',
    };
  }

  alteraState() {
    this.props.alterarVitimaForm(this.state);
  }

  alterarCampo(event, property) {
    const valor = event.target.value;

    this.setState({ [property]: valor },
      function() {
        this.alteraState();
      });
  }

  alterarCheckbox(event, property) {
    this.setState(
      { [property]: event.target.checked },
      () => this.alteraState()
    );
  }

  renderCampo(name, maxLength, placeholder = '', type = 'text') {
    return (
      <Input
        id={name}
        type={type}
        value={this.state[name]}
        maxLength={maxLength}
        onChange={event => this.alterarCampo(event, name)}
        placeholder={placeholder}
        autoComplete="off"
      />
    );
  }

  renderCheckbox(name) {
    return <Input id={name} name={name} type="checkbox" onChange={this.alterarCheckbox} />
  }

  renderSeletorDeEstados() {
    const stados = ['AC',
      'AL','AM','AP','BA','CE','DF','ES','GO','MA','MG','MS','MT','PA',
      'PB','PE','PI','PR','RJ','RN','PR','RJ','RR','SC','SE','SP','TO']

    return (
      <FormGroup>
        <Label for="estadoVitima">Estado</Label>
        <Input
          type="select"
          name="estadoVitima"
          id="estadoVitima"
          onChange={event => this.alterarCampo(event, 'estado')}
          value={this.state.estado}
        >
          <option value={''}>Escolha uma opção</option>
          {
            stados.map((estado,key) => <option key={key} value={estado}>{estado}</option>)
          }
        </Input>
      </FormGroup>
    )
  }


  render() {
    return (
      <div>
        <h3>Informacões da Vítima</h3>
        <br/>
        <FormGroup check>
          <Label for="conhecoAVitma" check>
            { this.renderCheckbox('conhecoAVitma', this.alterarCheckbox) }
            Conheço a Vítima
          </Label>
        </FormGroup>

        <FormGroup check>
          <Label for="souAVitima" check>
            { this.renderCheckbox('souAVitima', this.alterarCheckbox) }
            Sou a Vítima
          </Label>

        </FormGroup>

        <FormGroup>
          <Label for="nome">Nome</Label>
          {this.renderCampo('nome', '40')}
        </FormGroup>

        <FormGroup>
          <Label for="genero">Gênero</Label>
          {this.renderCampo('genero', '15', 'Ex.: Feminino, Masculino, Não Binário...')}
        </FormGroup>

        <FormGroup>
          <Label for="raca">Cor ou raça</Label>
          <Input
            type="select"
            name="raca"
            id="raca"
            onChange={event => this.alterarCampo(event, 'raca')}
            value={this.state.raca}>
            <option value={''}>Escolha uma opção</option>
            <option value={'preta'}>Preta</option>
            <option value={'parda'}>Parda</option>
            <option value={'indigena'}>Indígena</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="dataNascimento">Data de Nascimento</Label>

          <Input
            type="date"
            name="dataNascimento"
            id="dataNascimento"
            placeholder="date placeholder"
            onChange={event => this.alterarCampo(event, 'dataNascimento')}
          />
        </FormGroup>
        <FormGroup>
          <Label for="endereco">Endereço</Label>
          {this.renderCampo('endereco', '255')}
        </FormGroup>

        <FormGroup>
          <Label for="naturalidade" >Naturalidade</Label>
          {this.renderCampo('naturalidade', '40')}
        </FormGroup>

        { this.renderSeletorDeEstados() }

        <FormGroup>
          <Label for="telefone">Telefone</Label>
          {this.renderCampo('telefone')}
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          {this.renderCampo('email')}
        </FormGroup>
        <FormGroup>
          <Label for="caracteristicasVitima">
            Por favor, descreva aqui as características da vítima:*
          </Label>
          {this.renderCampo(
            'caracteristicasVitima',
            '255',
            'Era uma mulher negra, com aproximadamente 40 anos, magra, alta com cabelo curto...')}
        </FormGroup>
        <br />
      </div>);
  }
}

NovaVitimaForm.propTypes = {
  alterarVitimaForm: PropTypes.func.isRequired,
};

