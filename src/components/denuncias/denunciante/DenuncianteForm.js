import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../../comum/campoTexto';
import * as ConstantesCSS from '../ConstantesCss';
import Nome from '../../comum/nome';
import Genero from '../../comum/genero';
import Telefone from '../../comum/telefone';
import ComboboxRaca from './../../comum/comboboxRaca';
import Data from '../../comum/data';
import { campoObrigatorio, emailInvalido } from '../../comum/validacoes';
import Endereco from '../../comum/endereco';

class DenuncianteForm extends Component {
  componentWillReceiveProps(nextProps) {
    const { values, active } = nextProps.formDenuncia;
    const mapDenuncianteParaVitima = {
      nomeDenunciante: 'nomeVitima',
      dataNascimentoDenunciante: 'dataNascimentoVitima',
      estadoDenunciante: 'estadoVitima',
      cidadeDenunciante: 'cidadeVitima',
      telefoneDenunciante: 'telefoneVitima',
      racaDenunciante: 'racaVitima',
      generoDenunciante: 'generoVitima'
    };

    const campoDaVitimaParaAtualizar = mapDenuncianteParaVitima[active];
    const valorDoCampoAtivo = values[active];
    const valorDoCampoDaVitima = values[campoDaVitimaParaAtualizar];

    if (values.souAVitima && campoDaVitimaParaAtualizar &&
      valorDoCampoAtivo && valorDoCampoAtivo !== valorDoCampoDaVitima) {
      this.props.changeFieldValue(campoDaVitimaParaAtualizar, valorDoCampoAtivo);
    }

    if (values.souAVitima && !valorDoCampoAtivo && campoDaVitimaParaAtualizar) {
      this.props.changeFieldValue(campoDaVitimaParaAtualizar, '');
    }
  }

  render() {
    const { estadoDenunciante } = this.props.formDenuncia.values;
    return (
      <div>
        <div className="row">
          <Nome
            id="nome-vitima"
            state="nomeDenunciante"
            validacoes={[campoObrigatorio]}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
          />
          <Data
            id="data-nascimento-denunciante"
            label="Data de Nascimento"
            state="dataNascimentoDenunciante"
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
          />
        </div>

        <Endereco estadoState="estadoDenunciante" estadoInicial={estadoDenunciante} cidadeState="cidadeDenunciante" />

        <div className="row">
          <Telefone
            state="telefoneDenunciante"
            id="telefone-denunciante"
            label="Telefone"
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
          />
          <CampoTexto
            state="emailDenunciante"
            id="email-denunciante"
            label="E-mail"
            maxLen={40}
            type="text"
            placeholder=" "
            validacoes={[campoObrigatorio, emailInvalido]}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
          />
        </div>

        <div className="row">
          <ComboboxRaca
            state="racaDenunciante"
            id="raca-denunciante"
            divClasse="col s12 m6 l6"
            somenteRacasVitima
          />
          <Genero
            id="genero-denunciante"
            state="generoDenunciante"
            divClasse="col s12 m6 l6"
          />
        </div>
      </div>
    );
  }
}

DenuncianteForm.propTypes = {
  formDenuncia: PropTypes.shape({
    values: PropTypes.shape({
      nomeDenunciante: PropTypes.string,
      telefoneDenunciante: PropTypes.string,
      estadoDenunciante: PropTypes.string,
      cidadeDenunciante: PropTypes.string,
      generoDenunciante: PropTypes.string,
      dataNascimentoDenunciante: PropTypes.string,
      racaDenunciante: PropTypes.string
    })
  }),
  changeFieldValue: PropTypes.func
};

DenuncianteForm.defaultProps = {
  formDenuncia: { values: {} },
  changeFieldValue: () => {}
};

export default DenuncianteForm;
