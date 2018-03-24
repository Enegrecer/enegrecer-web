import React from 'react';
import Nome from '../../comum/nome';
import CampoTexto from '../../comum/campoTexto';
import Genero from '../../comum/genero';
import Data from '../../comum/data';
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
      <Nome id={'nome-agressor'} />
      <CampoTexto
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
        id={'genero-agressor'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />

      <Data
        id={'data-nascimento-agressor'}
        label={'Data de Nascimento'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />
    </div>

    <div className="row">
      <Raca id={'raca-agressor'} somenteRacasVitima={false} />
    </div>

    <div className="row">
      <CampoTexto
        id={'descricao-agressor'}
        label={'Descrição do agressor'}
        maxLen={100}
        placeholder={''}
        type={'text'}
        divClasse={'input-field col s12'}
      />
    </div>
  </div>
);

export default AgressorForm;
