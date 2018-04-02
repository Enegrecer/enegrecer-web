import React from 'react';
import Nome from '../../comum/nome';
import CampoTexto from '../../comum/campoTexto';
import Genero from '../../comum/genero';
import Data from '../../comum/data';
import ComboboxEstado from '../../comum/comboboxEstado';
import Combobox from '../../comum/combobox';
import * as ConstantesCSS from '../ConstantesCss';
import Raca from '../../comum/comboboxRaca';
import { campoObrigatorio } from '../../comum/validacoes';

const AgressorForm = () => (
  <div>
    <div className="row">
      <Nome state={'nomeAgressor'} id={'nome-agressor'} />
      <Genero
        state={'generoAgressor'}
        id={'genero-agressor'}
        divClasse={'col s6'}
      />
    </div>

    <div className="row">
      <ComboboxEstado
        state={'estadoAgressor'}
        id={'estado-agressor'}
        divClasse={'col s6'}
      />
      <Combobox
        id={'cidade-agressor'}
        state={'cidadeAgressor'}
        itens={['Belo Horizonte']}
        divClasse={'col s6'}
        label={'Cidade *'}
      />
    </div>

    <div className="row">
      <Data
        state={'dataNascimentoAgressor'}
        id={'data-nascimento-agressor'}
        label={'Data de Nascimento'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />
      <Raca id={'raca-agressor'} state={'racaAgressor'} divClasse={'col s6'} somenteRacasVitima={false} />

    </div>

    <div className="row">
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
        validacoes={[campoObrigatorio]}
      />

    </div>
  </div>
);

export default AgressorForm;
