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
import Combobox from './../../comum/combobox';
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
          <Nome id={'nome-vitima'} state={'nomeDenunciante'} />
          <CampoTexto
            state={'emailDenunciante'}
            id={'email-denunciante'}
            label={'Email'}
            maxLen={40}
            type={'text'}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
          />
        </div>

        <div className="row">
          <Telefone
            state={'telefoneDenunciante'}
            id="telefone-denunciante"
            label={'Telefone'}
            divClasse={'col s6'}
          />
          <Combobox
            id={'cidade-denunciante'}
            state={'cidadeDenunciante'}
            itens={['Belo Horizonte']}
            divClasse={'col s6'}
            label={'Cidade *'}
          />
        </div>

        <div className="row">
          <Genero
            id={'genero-denunciante'}
            state={'generoDenunciante'}
            divClasse={'col s6'}
          />

          <Data
            id={'data-nascimento-denunciante'}
            label={'Data de Nascimento'}
            state={'dataNascimentoDenunciante'}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
          />
        </div>

        <div className="row">

          <ComboboxRaca
            state={'racaDenunciante'}
            id={'raca-denunciante'}
            classes={'col s6'}
            somenteRacasVitima
          />
        </div>
      </div>);
  }
}

DenuncianteForm.defaultProps = { handleChange: () => {} };

DenuncianteForm.propTypes = {
  handleChange: PropTypes.func,
};
