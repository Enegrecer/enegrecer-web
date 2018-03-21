import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CheckBox from '../../comum/checkbox';
import CampoTexto from '../../comum/campoTexto';
import { cortarPalavra } from '../../../utils/helpers';
import * as ConstantesCSS from '../ConstantesCss';
import ComboEstado from '../../comum/comboboxEstado';
import * as Tela from '../../../utils/materializeCSS';
import Nome from '../../comum/nome';
import Genero from '../../comum/genero';
import Telefone from '../../comum/telefone';
import ComboboxRaca from './../../comum/comboboxRaca';
import Caracteristica from '../../comum/caracteristica';
import Data from '../../comum/data';

export default class NovaVitimaForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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
    this.props.handleChange({ vitima: this.state });

    const raca = Tela.getElementoPorId('raca');
    raca.on('change', (e) => {
      this.handleChange(e.target.value, 'raca');
    });

    const comboEstado = Tela.getElementoPorId('estadoVitima');
    comboEstado.on('change', (e) => {
      this.handleChange(e.target.value, 'estado');
    });
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

        <div className="row">
          <Nome id={'nome-vitima'} onChange={e => this.handleChange(cortarPalavra(e.target.value, 40), 'nome')} />
        </div>

        <div className="row">
          <Genero
            id={'vitima-genero'}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s4`}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 15), 'genero')}
          />

          <ComboboxRaca
            id={'raca'}
            classes={`${ConstantesCSS.CLASSES_DIV_INPUT} col s4`}
            somenteRacasVitima
            onChange={this.handleChange}
          />

          <Data
            id={'dataNascimento'}
            label={'Data de Nascimento'}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s4`}
            onChange={this.handleChange}
            estado={'dataNascimento'}
          />

        </div>

        <div className="row">
          <CampoTexto
            id={'endereco-vitima'}
            label={'Endereço (máximo de 255 caracteres)'}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 255), 'endereco')}
            maxLen={255}
            inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
            type={'text'}
          />
        </div>

        <div className="row">
          <CampoTexto
            id={'naturalidade-vitima'}
            label={'Naturalidade (máximo de 40 caracteres)'}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 40), 'naturalidade')}
            maxLen={40}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            type={'text'}
          />

          <ComboEstado id={'estadoVitima'} handleChange={this.handleChange} classes={'col s6'} />
        </div>

        <div className="row">
          <CampoTexto
            id={'email-vitima'}
            label={'Email'}
            maxLen={40}
            type={'text'}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 40), 'email')}
          />

          <Telefone
            id="telefone"
            value={this.state.telefone}
            handleChange={this.handleChange}
            label={'Telefone'}
          />

        </div>

        <div className="row">
          <Caracteristica
            id={'caracteristicasDaVitima'}
            label={'* Por favor, descreva aqui as características da vítima (máximo de 255 caracteres)'}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 255), 'caracteristicasDaVitima')}
          />
        </div>
      </div>);
  }
}

NovaVitimaForm.defaultProps = { handleChange: () => {} };

NovaVitimaForm.propTypes = {
  handleChange: PropTypes.func,
};
