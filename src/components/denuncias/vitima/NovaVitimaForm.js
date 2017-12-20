import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { EstadoFormGroup, TelefoneFormGroup } from '../../FormGroups';

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

  alterarCampo(valor, property, maxLength) {
    const inputLen = window.parseInt(maxLength);

    this.setState({ [property]: isNaN(inputLen) ? valor : valor.slice(0, inputLen) },
      () => this.props.handleChange({ vitima: this.state })
    );
  }

  alterarCheckbox(event, property) {
    this.setState({ [property]: event.target.checked },
      () => this.props.handleChange({ vitima: this.state })
    );
  }

  renderCampo(name, maxLength, placeholder = '', type = '', mascara = '') {
    return (
      <Input
        id={name}
        type={type}
        value={this.state[name]}
        maxLength={maxLength}
        onChange={event => this.alterarCampo(event.target.value, name, maxLength)}
        placeholder={placeholder}
        autoComplete="off"
        pattern={mascara}
      />
    );
  }

  renderCheckbox(name, label) {
    return (
      <FormGroup check>
        <Label for={name} check>
          <Input
            id={name}
            name={name}
            type="checkbox"
            onChange={event => this.alterarCampo(event.target.checked, name)}
          /> {` ${label}`}
        </Label>
      </FormGroup>
    )
  }


  render() {
    return (
      <div>
        <h3>Informacões da Vítima</h3>
        <br />

        { this.renderCheckbox('conhecoAVitima', 'Conheço a Vítima') }

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
            onChange={event => this.alterarCampo(event.target.value, 'raca')}
            value={this.state.raca}
          >
            <option value={''}>Escolha uma opção</option>
            <option value={'preta'}>Preta</option>
            <option value={'parda'}>Parda</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="dataNascimento">Data de Nascimento</Label>
          {this.renderCampo('dataNascimento', '', 'date placeholder', 'date')}
        </FormGroup>

        <FormGroup>
          <Label for="endereco">Endereço</Label>
          {this.renderCampo('endereco', '255', '', 'textarea')}
        </FormGroup>

        <FormGroup>
          <Label for="naturalidade" >Naturalidade</Label>
          {this.renderCampo('naturalidade', '40')}
        </FormGroup>

        <EstadoFormGroup
          id="estadoVitima"
          estado={this.state.estado}
          handleChange={event => this.alterarCampo(event.target.value, 'estado')}
        />
        <TelefoneFormGroup
          id="telefone"
          value={this.state.telefone}
          handleChange={event => this.alterarCampo(event.target.value, 'telefone')}
        />
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
NovaVitimaForm.defaultProps = { handleChange: () => {} }
NovaVitimaForm.propTypes = {
  handleChange: PropTypes.func,
};

