import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CampoTexto from '../../comum/campoTexto';
import { cortarPalavra } from '../../../utils/helpers';
import * as ConstantesCSS from '../ConstantesCss';
import ComboEstado from '../../comum/comboboxEstado';
import * as Tela from '../../../utils/materializeCSS';
import Nome from '../../comum/nome';
import Genero from '../../comum/genero';
import Telefone from '../../comum/telefone';
import ComboboxRaca from './../../comum/comboboxRaca';
import Data from '../../comum/data';

export default class DenuncianteForm extends Component {
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
        <br />
        <h4>Você poderia nos passar algumas informações suas?</h4>
        <br />
        <p> Não se preocupe sua identidade será mantida em sigilo.
           Essas informações são importantes para
          futuramente darmos um retorno das medidas que estão sendo tomadas
          contra esse agressor. </p>
        <div className="row">
          <Nome id={'nome-vitima'} onChange={e => this.handleChange(cortarPalavra(e.target.value, 40), 'nome')} />

          <CampoTexto
            id={'email-vitima'}
            label={'Email'}
            maxLen={40}
            type={'text'}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 40), 'email')}
          />
        </div>

        <div className="row">

          <Telefone
            id="telefone"
            value={this.state.telefone}
            handleChange={this.handleChange}
            label={'Telefone'}
          />

          <ComboEstado id={'estadoVitima'} handleChange={this.handleChange} classes={'col s6'} />

        </div>

        <div className="row">
          <Genero
            id={'vitima-genero'}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 15), 'genero')}
          />

          <Data
            id={'dataNascimento'}
            label={'Data de Nascimento'}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            onChange={e => this.handleChange(e.target.value, 'dataNascimento')}
          />
        </div>

        <div className="row">

          <ComboboxRaca
            id={'raca'}
            classes={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            somenteRacasVitima
            onChange={this.handleChange}
          />
        </div>
      </div>);
  }
}

DenuncianteForm.defaultProps = { handleChange: () => {} };

DenuncianteForm.propTypes = {
  handleChange: PropTypes.func,
};
