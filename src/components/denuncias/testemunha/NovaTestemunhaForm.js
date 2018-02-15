import PropTypes from 'prop-types';
import React from 'react';
import { cortarPalavra } from '../../../helpers';
import { RacaFormGroup, TelefoneFormGroup, CampoTexto } from '../../FormGroups'

export default class NovaTestemunhaForm extends React.Component {
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

  componentDidMount() {
    this.props.handleChange({ testemunha: this.state })
  }

  handleChange(value, property) {
    this.setState({ [property]: value },
      () => this.props.handleChange({ testemunha: this.state }));
  }

  render() {
    return (
      <div>
        <h3>Informacões da Testemunha</h3>
        <CampoTexto
          id={'nome-testemunha'}
          label={'Nome (máximo de 40 caracteres)'}
          maxLen={40}
          onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 40), 'nome') }}
          type={'text'}
        />

        <CampoTexto
          id={'genero-testemunha'}
          label={'Gênero (máximo de 15 caracteres)'}
          maxLen={15}
          onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 15), 'genero') }}
          placeholder={'Ex.: Feminino, Masculino, Não Binário...'}
          type={'text'}
        />

        <RacaFormGroup
          id={'raca'}
          value={this.state.raca}
          handleChange={this.handleChange}
        />

        <CampoTexto
          id={'dataNascimento-testemunha'}
          label={'Data de Nascimento'}
          maxLen={0}
          onChange={(e) => { this.handleChange(e.target.value, 'dataNascimento') }}
          type={'date'}
        />

        <TelefoneFormGroup
          id={'telefone'}
          value={this.state.telefone}
          handleChange={this.handleChange}
        />

        <CampoTexto
          id={'caracteristicas-testemunha'}
          label={'* Por favor, descreva aqui as características da testemunha (máximo de 255 caracteres)'}
          maxLen={255}
          onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 255), 'caracteristicas') }}
          type={'text'}
        />

      </div>
    );
  }
}

NovaTestemunhaForm.defaultProps = { handleChange: () => {} }
NovaTestemunhaForm.propTypes = {
  handleChange: PropTypes.func,
};
