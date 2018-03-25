import React from 'react';
import CheckBox from '../../comum/checkbox';
import * as ConstantesCSS from '../ConstantesCss';
import Nome from '../../comum/nome';
import Genero from '../../comum/genero';
import Telefone from '../../comum/telefone';
import ComboboxRaca from './../../comum/comboboxRaca';
import Combobox from '../../comum/combobox';
import Data from '../../comum/data';

const NovaVitimaForm = () => (
  <div>
    <h3>Me conte um pouco sobre a vítima</h3>
    <br />
    <CheckBox state={'souAVitima'} id={'souAVitima'} label={'Marque se você é a vítima'} />

    <div className="row">
      <Nome id={'nome-vitima'} state={'nomeVitima'} />
      <Data
        state={'dataNascimentoVitima'}
        id={'dataNascimento'}
        label={'Data de Nascimento'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />
    </div>

    <div className="row">
      <Telefone
        divClasse={'input-field col s6'}
        id="telefone"
        state={'telefoneVitima'}
        label={'Telefone'}
      />
      <Combobox
        id={'cidade-vitima'}
        state={'cidadeVitima'}
        itens={['Belo Horizonte']}
        divClasse={'col s6'}
        label={'Cidade *'}
      />
    </div>

    <div className="row">
      <Genero
        state={'generoVitima'}
        id={'vitima-genero'}
        divClasse={'col s6'}
      />

      <ComboboxRaca
        state={'racaVitima'}
        id={'raca'}
        divClasse={'col s6'}
        somenteRacasVitima
      />
    </div>
  </div>
);

export default NovaVitimaForm;
