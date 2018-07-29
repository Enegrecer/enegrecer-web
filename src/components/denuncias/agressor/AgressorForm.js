import React from 'react';
import Nome from '../../comum/nome';
import CampoTexto from '../../comum/campoTexto';
import Genero from '../../comum/genero';
import Data from '../../comum/data';
import * as ConstantesCSS from '../ConstantesCss';
import Raca from '../../comum/comboboxRaca';
import { campoObrigatorio } from '../../comum/validacoes';
import Endereco from '../../comum/endereco';

const AgressorForm = () => (
  <div>
    <div className="row">
      <Nome state="nomeAgressor" id="nome-agressor" />
      <Genero
        state="generoAgressor"
        id="genero-agressor"
        divClasse="col s12 m6 l6"
      />
    </div>

    <Endereco estadoState="estadoAgressor" cidadeState="cidadeAgressor" />

    <div className="row">
      <Data
        state="dataNascimentoAgressor"
        id="data-nascimento-agressor"
        label="Data de Nascimento"
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
      />
      <Raca id="raca-agressor" state="racaAgressor" divClasse="col s12 m6 l6" somenteRacasVitima={false} />

    </div>

    <div className="row">
      <CampoTexto
        state="descricaoAgressor"
        id="descricao-agressor"
        label="Descrição do agressor"
        maxLen={100}
        placeholder=""
        type="text"
        divClasse="input-field col s12 m6 l6"
        validacoes={[campoObrigatorio]}
      />

    </div>
  </div>
);

export default AgressorForm;
