import React from 'react';
import Nome from '../../comum/nome';
import CampoTexto from '../../comum/campoTexto';
import Genero from '../../comum/genero';
import Data from '../../comum/data';
import ComboboxEstado from '../../comum/comboboxEstado';
import * as ConstantesCSS from '../ConstantesCss';
import Raca from '../../comum/comboboxRaca';

const AgressorForm = () => (
  <div>
    <h3>Você se sente confortável em dividir conosco informações sobre o agressor?</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nunc nisl mi, egestas ac ipsum sit amet,
      blandit posuere metus. Donec imperdiet ut mi sed posuere.
      Pellentesque et varius sapien.
    </p>

    <div className="row">
      <Nome state={'nomeAgressor'} id={'nome-agressor'} />
      <CampoTexto
        state={'cidadeAgressor'}
        id={'cidade-agressor'}
        label={'Cidade'}
        maxLen={40}
        placeholder={''}
        type={'text'}
        divClasse={'input-field col s6'}
      />
    </div>

    <div className="row">
      <Genero
        state={'generoAgressor'}
        id={'genero-agressor'}
        divClasse={'col s6'}
      />

      <Data
        state={'dataNascimentoAgressor'}
        id={'data-nascimento-agressor'}
        label={'Data de Nascimento'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />
    </div>

    <div className="row">
      <Raca id={'raca-agressor'} state={'racaAgressor'} divClasse={'col s6'} somenteRacasVitima={false} />
      <CampoTexto
        state={'bairroAgressor'}
        id={'bairro-agressor'}
        label={'Bairro'}
        maxLen={100}
        placeholder={''}
        type={'text'}
        divClasse={'input-field col s6'}
      />
    </div>

    <div className="row">
      <CampoTexto
        state={'descricaoAgressor'}
        id={'descricao-agressor'}
        label={'Descrição do agressor'}
        maxLen={100}
        placeholder={''}
        type={'text'}
        divClasse={'input-field col s12'}
      />
      <ComboboxEstado
        state={'estadoAgressor'}
        id={'estado-agressor'}
        classes={'col s6'}
      />
    </div>
  </div>
);

export default AgressorForm;
