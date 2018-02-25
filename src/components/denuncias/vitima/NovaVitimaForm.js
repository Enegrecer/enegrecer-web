import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { EstadoFormGroup, RacaFormGroup, TelefoneFormGroup, CampoTexto, CheckBox } from '../../FormGroups'
import { cortarPalavra } from '../../../helpers';


export default class NovaVitimaForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.renderTextField = this.renderTextField.bind(this);

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

  render() {
    return (
      <div>
        <h3>Informacões da Vítima</h3>
        <br />

        <CheckBox id={'conhecoAVitima'} label={'Conheço a Vítima'} onClick={e => this.handleChange(e.target.checked, 'conhecoAVitima')} />
        <CheckBox id={'souAVitima'} label={'Sou a Vítima'} onClick={e => this.handleChange(e.target.checked, 'souAVitima')} />
        <CampoTexto
          id={'nome-vitima'}
          label={'Nome (máximo de 40 caracteres)'}
          maxLen={40}
          placeholder={''}
          type={'text'}
          onChange={e => this.handleChange(cortarPalavra(e.target.value, 40), 'nome')}
        />

        <CampoTexto
          id={'vitima-genero'}
          label={'Gênero (máximo de 15 caracteres)'}
          maxLen={15}
          onChange={e => this.handleChange(cortarPalavra(e.target.value, 15), 'genero')}
          type={'text'}
        />

        <RacaFormGroup id={'raca'} value={this.state.raca} handleChange={this.handleChange} />

        <CampoTexto
          id={'dataNascimento-vitima'}
          label={'Data de Nascimento'}
          onChange={e => this.handleChange(e.target.value, 'dataNascimento')}
          maxLen={8}
          type={'date'}
        />

        <CampoTexto
          id={'endereco-vitima'}
          label={'Endereço (máximo de 255 caracteres)'}
          onChange={e => this.handleChange(cortarPalavra(e.target.value, 255), 'endereco')}
          maxLen={255}
          type={'textarea'}
        />

        <CampoTexto
          id={'naturalidade-vitima'}
          label={'Naturalidade (máximo de 40 caracteres)'}
          onChange={e => this.handleChange(cortarPalavra(e.target.value, 40), 'naturalidade')}
          maxLen={40}
          type={'text'}
        />

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

        <CampoTexto
          id={'email-vitima'}
          label={'Email'}
          maxLen={40}
          type={'text'}
          onChange={e => this.handleChange(cortarPalavra(e.target.value, 40), 'email')}
        />

        <CampoTexto
          id={'caracteristicasDaVitima'}
          label={'* Por favor, descreva aqui as características da vítima (máximo de 255 caracteres)'}
          maxLen={255}
          type={'textarea'}
          placeholder={'Ex.: Era uma mulher negra, com aproximadamente 40 anos, magra, alta com cabelo curto...'}
          onChange={e => this.handleChange(cortarPalavra(e.target.value, 255), 'caracteristicasDaVitima')}
        />
        <br />
      </div>);
  }
}

NovaVitimaForm.defaultProps = { handleChange: () => {} };

NovaVitimaForm.propTypes = {
  handleChange: PropTypes.func,
};
