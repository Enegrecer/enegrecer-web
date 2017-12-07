import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { EstadoFormGroup } from '../FormGroups'


export default class NovaVitimaForm extends Component {
  constructor(props) {
    super(props);

    this.alterarCheckbox = this.alterarCheckbox.bind(this);
    this.alterarCampo = this.alterarCampo.bind(this);

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

  alterarCampo(event, property, maxLength) {
    const valor = event.target.value;
    this.setState({ [property]: valor.slice(0, maxLength) },
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

  renderCampo(name, maxLength, placeholder = '', type = '') {
    return (
      <Input
        id={name}
        type={type}
        value={this.state[name]}
        maxLength={maxLength}
        onChange={event => this.alterarCampo(event, name, maxLength)}
        placeholder={placeholder}
        autoComplete="off"
      />
    );
  }

  renderCheckbox(name, label) {
    return <FormGroup check>
      <Label for="souAVitima" check>
        <Input id={name} name={name} type="checkbox" onChange={this.alterarCheckbox} />
        {label}
      </Label>
    </FormGroup>
  }


  render() {
    return (
      <div>
        <h3>Informacões da Vítima</h3>
        <br />

        { this.renderCheckbox('conhecoAVitma', 'Conheço a Vítima') }

        { this.renderCheckbox('souAVitima', 'Sou a Vítima') }

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
          {this.renderCampo('dataNascimento', '', 'date placeholder', 'date')}
        </FormGroup>

        <FormGroup>
          <Label for="endereco">Endereço</Label>
          {this.renderCampo('endereco', '255')}
        </FormGroup>

        <FormGroup>
          <Label for="naturalidade" >Naturalidade</Label>
          {this.renderCampo('naturalidade', '40')}
        </FormGroup>

        <EstadoFormGroup
          id="estadoVitima"
          estado={this.state.estado}
          handleChange={this.alterarCampo}
        />

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
          { this.renderCampo(
            'caracteristicasVitima',
            '255',
            'Era uma mulher negra, com aproximadamente 40 anos, magra, alta com cabelo curto...',
            'textarea')}
        </FormGroup>
        <br />
      </div>);
  }
}

NovaVitimaForm.propTypes = {
  alterarVitimaForm: PropTypes.func.isRequired,
};

