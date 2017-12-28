import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import { cortarPalavra } from '../../../helpers';

import { RacaFormGroup, TelefoneFormGroup } from '../../FormGroups'

export default class NovaTestemunhaForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      nome: '',
      genero: '',
      raca: '',
      dataNascimento: '',
      telefone: '',
      caracteristicas: '',
    }
  }

  handleChange(value, property) {
    this.setState({ [property]: value },
      () => this.props.handleChange({ testemunha: this.state }));
  }


  renderTextField(id, label, maxLen = '', placeholder = '', type = '') {
    return (
      <TextField
        id={`${id}-testemunha`}
        value={this.state[id]}
        type={type}
        maxLength={maxLen}
        hintText={placeholder}
        floatingLabelText={label}
        floatingLabelFixed
        autoComplete="off"
        fullWidth
        multiLine={type === 'textarea'}
        onChange={(e) => {
          this.handleChange(cortarPalavra(e.target.value, maxLen), id)
        }}
      />
    )
  }

  render() {
    return (
      <div>
        <h3>Informacões da Testemunha</h3>
        <br />

        { this.renderTextField('nome', 'Nome (máximo de 40 caracteres)', '40') }

        { this.renderTextField('genero', 'Gênero (máximo de 15 caracteres)', '15', 'Ex.: Feminino, Masculino, Não Binário...') }

        <RacaFormGroup
          id={'raca'}
          value={this.state.raca}
          handleChange={this.handleChange}
        />

        <TelefoneFormGroup
          id={'telefone'}
          value={this.state.telefone}
          handleChange={this.handleChange}
        />

        { this.renderTextField('telefone', 'Telefone (máximo de 10 caracteres)', '10', '', '') }

        { this.renderTextField('dataNascimento', 'Data de Nascimento', '', '', 'date') }

        { this.renderTextField(
          'caracteristicas',
          '* Por favor, descreva aqui as características da testemunha',
          '255',
          'Era uma mulher negra, com aproximadamente 40 anos, magra, alta com cabelo curto...',
          'textarea')
        }
      </div>
    );
  }
}

NovaTestemunhaForm.defaultProps = { handleChange: () => {} }
NovaTestemunhaForm.propTypes = {
  handleChange: PropTypes.func,
};
