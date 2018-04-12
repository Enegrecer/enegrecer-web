import React from 'react';
import CheckBox from '../../comum/checkbox';
import * as ConstantesCSS from '../ConstantesCss';
import Nome from '../../comum/nome';
import Genero from '../../comum/genero';
import Telefone from '../../comum/telefone';
import ComboboxRaca from './../../comum/comboboxRaca';
import Data from '../../comum/data';
import Endereco from '../../comum/endereco';

const NovaVitimaForm = () => (
  <div>
    <div className="row">
      <CheckBox
        state={'souAVitima'}
        divClasse={'col s12 m6 l6'}
        id={'souAVitima'}
        label={'Marque se você é a vítima'}
      />
    </div>
    <div className="row">
      <Nome id={'nome-vitima'} state={'nomeVitima'} />
      <Data
        state={'dataNascimentoVitima'}
        id={'dataNascimento'}
        label={'Data de Nascimento'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
      />
    </div>

    <Endereco estadoState={'estadoVitima'} cidadeState={'cidadeVitima'} />

    <div className="row">
      <Telefone
        divClasse={'input-field col s12 m6 l6'}
        id="telefone"
        state={'telefoneVitima'}
        label={'Telefone'}
      />
    </div>

    <div className="row">
      <Genero
        state={'generoVitima'}
        id={'vitima-genero'}
        divClasse={'col s12 m6 l6'}
      />

      <ComboboxRaca
        state={'racaVitima'}
        id={'raca'}
        divClasse={'col s12 m6 l6'}
        somenteRacasVitima
      />
    </div>
  </div>
);

export default NovaVitimaForm;
