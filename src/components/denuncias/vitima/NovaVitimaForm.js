import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../../comum/checkbox';
import * as ConstantesCSS from '../ConstantesCss';
import Nome from '../../comum/nome';
import Genero from '../../comum/genero';
import Telefone from '../../comum/telefone';
import ComboboxRaca from './../../comum/comboboxRaca';
import Data from '../../comum/data';
import Endereco from '../../comum/endereco';

class NovaVitimaForm extends Component {
  componentWillReceiveProps(nextProps) {
    const { values, active } = nextProps.formDenuncia;
    const mapVitimaParaDenunciante = {
      nomeVitima: 'nomeDenunciante',
      dataNascimentoVitima: 'dataNascimentoDenunciante',
      estadoVitima: 'estadoDenunciante',
      cidadeVitima: 'cidadeDenunciante',
      telefoneVitima: 'telefoneDenunciante',
      racaVitima: 'racaDenunciante',
      generoVitima: 'generoDenunciante'
    };

    const campoDoDenuncianteParaAtualizar = mapVitimaParaDenunciante[active];
    const valorDoCampoAtivo = values[active];
    const valorDoCampoDoDenunciante = values[campoDoDenuncianteParaAtualizar];

    if (values.souAVitima && campoDoDenuncianteParaAtualizar &&
      valorDoCampoAtivo && valorDoCampoAtivo !== valorDoCampoDoDenunciante) {
      this.props.changeFieldValue(campoDoDenuncianteParaAtualizar, valorDoCampoAtivo);
    }

    if (values.souAVitima && !valorDoCampoAtivo && campoDoDenuncianteParaAtualizar) {
      this.props.changeFieldValue(campoDoDenuncianteParaAtualizar, '');
    }
  }

  geraObjetosParaEspelhar = () => {
    const {
      nomeDenunciante,
      telefoneDenunciante,
      estadoDenunciante,
      cidadeDenunciante,
      generoDenunciante,
      dataNascimentoDenunciante,
      racaDenunciante
    } = this.props.formDenuncia.values;

    return [
      {
        campo: 'nomeVitima',
        valor: nomeDenunciante,
      },
      {
        campo: 'telefoneVitima',
        valor: telefoneDenunciante,
      },
      {
        campo: 'estadoVitima',
        valor: estadoDenunciante,
      },
      {
        campo: 'dataNascimentoVitima',
        valor: dataNascimentoDenunciante,
      },
      {
        campo: 'cidadeVitima',
        valor: cidadeDenunciante,
      },
      {
        campo: 'generoVitima',
        valor: generoDenunciante,
      },
      {
        campo: 'racaVitima',
        valor: racaDenunciante
      }
    ];
  }

  changeField = (foiVitima) => {
    const objetosEspelho = this.geraObjetosParaEspelhar();
    objetosEspelho.forEach((objeto) => {
      this.props.changeFieldValue(objeto.campo, foiVitima ? objeto.valor : '');
    });
  }

  render() {
    const { estadoDenunciante } = this.props.formDenuncia.values;
    return (
      <div>
        <div className="row">
          <CheckBox
            onChange={this.changeField}
            state="souAVitima"
            divClasse="col s12 m6 l6"
            id="souAVitima"
            label="Marque se você é a vítima"
          />
        </div>
        <div className="row">
          <Nome id="nome-vitima" state="nomeVitima" />
          <Data
            state="dataNascimentoVitima"
            id="dataNascimento"
            label="Data de Nascimento"
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
          />
        </div>

        <Endereco estadoState="estadoVitima" estadoInicial={estadoDenunciante} cidadeState="cidadeVitima" />

        <div className="row">
          <Telefone
            divClasse="input-field col s12 m6 l6"
            id="telefone"
            state="telefoneVitima"
            label="Telefone"
          />
        </div>

        <div className="row">
          <ComboboxRaca
            state="racaVitima"
            id="raca"
            divClasse="col s12 m6 l6"
            somenteRacasVitima
          />
          <Genero
            state="generoVitima"
            id="vitima-genero"
            divClasse="col s12 m6 l6"
          />
        </div>
      </div>
    );
  }
}

NovaVitimaForm.propTypes = {
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

NovaVitimaForm.defaultProps = {
  formDenuncia: { values: {} },
  changeFieldValue: () => {}
};

export default NovaVitimaForm;
