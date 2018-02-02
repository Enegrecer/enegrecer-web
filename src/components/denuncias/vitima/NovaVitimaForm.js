import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'
import * as helpers from '../../../helpers';
import { EstadoFormGroup, RacaFormGroup, TelefoneFormGroup } from '../../FormGroups'

export default class NovaVitimaForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.renderTextField = this.renderTextField.bind(this);

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
      caracteristicasDaVitima: '',
    };
  }

  componentDidMount() {
    this.props.handleChange({ vitima: this.state })
  }

  handleChange(value, property) {
    this.setState({ [property]: value },
      () => this.props.handleChange({ vitima: this.state })
    );
  }

  renderTextField(id, label, maxLen = '', placeholder = '', type = '') {
    return (
      <TextField
        id={`${id}-vitima`}
        value={this.state[id]}
        type={type || 'text'}
        maxLength={maxLen}
        hintText={placeholder}
        floatingLabelText={label}
        floatingLabelFixed
        autoComplete="off"
        fullWidth
        multiLine={type === 'textarea'}
        onChange={(e) => {
          const value = helpers.cortarPalavra(e.target.value, maxLen);
          this.handleChange(value, id)
        }}
      />
    )
  }

  renderCheckbox(id, label) {
    return (
      <Checkbox
        id={id}
        name={id}
        checked={this.state[id]}
        label={label}
        onClick={e => this.handleChange(e.target.checked, id)}
      />
    )
  }

  render() {
    return (
      <div>
        <h3>Informacões da Vítima</h3>
        <br />

        { this.renderCheckbox('conhecoAVitima', 'Conheço a Vítima') }

        { this.renderCheckbox('souAVitima', 'Sou a Vítima') }

        { this.renderTextField('nome', 'Nome (máximo de 40 caracteres)', '40') }

        { this.renderTextField('genero', 'Gênero (máximo de 15 caracteres)', '15', 'Ex.: Feminino, Masculino, Não Binário...') }


        <RacaFormGroup
          id={'raca'}
          value={this.state.raca}
          handleChange={this.handleChange}
        />

        { this.renderTextField('dataNascimento', 'Data de Nascimento', '', '', 'date') }

        { this.renderTextField('endereco', 'Endereço (máximo de 255 caracteres)', '255', '')}

        { this.renderTextField('naturalidade', 'Naturalidade (máximo de 40 caracteres)', '40')}

        <EstadoFormGroup
          id={'estadoVitima'}
          value={this.state.estado}
          handleChange={this.handleChange}
        />

        <TelefoneFormGroup
          id="telefone"
          value={this.state.telefone}
          handleChange={this.handleChange}
        />

        { this.renderTextField('email', 'Email', '') }

        { this.renderTextField(
          'caracteristicasDaVitima',
          '* Por favor, descreva aqui as características da vítima (máximo de 255 caracteres)',
          '255',
          'Ex.: Era uma mulher negra, com aproximadamente 40 anos, magra, alta com cabelo curto...',
          'textarea')
        }

        <br />
      </div>);
  }
}

NovaVitimaForm.defaultProps = { handleChange: () => {} };

NovaVitimaForm.propTypes = {
  handleChange: PropTypes.func,
};
