import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import * as helpers from '../../../helpers';
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
      caracteristicasTestemunha: '',
    }
  }

  handleChange(value, property) {
    this.setState({ [property]: value },
      () => this.props.handleChange({ testemunha: this.state }));
  }


  renderTextField(id, label, maxLen = '', placeholder = '', type = '') {
    return (
      <div>
        <label htmlFor={id}>{`${label}`}</label>
        <TextField
          id={id}
          value={this.state[id]}
          type={type || 'text'}
          maxLength={maxLen}
          placeholder={placeholder}
          autoComplete="off"
          fullWidth
          multiLine={type === 'textarea'}
          onChange={(e) => {
            const value = helpers.cortarPalavra(e.target.value, maxLen);
            this.handleChange(value, id)
          }}
        />
        <br />
      </div>
    )
  }

  render() {
    return (
      <div>
        <h3>Informacões da Testemunha</h3>
        <br />

        { this.renderTextField('nome', 'Nome') }

        { this.renderTextField('genero', 'Gênero') }

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

        { this.renderTextField('dataNascimento', 'Data de Nascimento', '', '', 'date') }

        { this.renderTextField(
          'caracteristicasTestemunha',
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
