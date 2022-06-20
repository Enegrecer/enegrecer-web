import React from 'react';
import CampoTexto from '../../comum/campoTexto';
import * as ConstantesCSS from '../ConstantesCss';
import Data from '../../comum/data';
import Combobox from '../../comum/combobox';
import Endereco from '../../comum/endereco';

const descricao = () => (
  <div>
    <div className="row">
      <Combobox
        state="periodoAgressao"
        id="periodo"
        itens={['Manhã', 'Tarde', 'Noite']}
        divClasse="col s12 m6 l6"
        label="Período"
      />

      <Data
        state="dataAgressao"
        id="data-agressao"
        label="Data de Agressão"
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
      />
    </div>

    <Endereco estadoState="estadoAgressao" cidadeState="cidadeAgressao" />

    <div className="row">
      <CampoTexto
        state="bairroAgressao"
        id="bairro-descricao"
        label="Bairro"
        maxLen={40}
        placeholder=""
        type="text"
        divClasse="input-field col s12 m6 l6"
      />

      <CampoTexto
        state="enderecoAgressao"
        id="endereco-descricao"
        label="Endereço"
        maxLen={40}
        placeholder=""
        type="text"
        divClasse="input-field col s12 m6 l6"
      />
    </div>

    <div className="row">
      <CampoTexto
        state="descricaoAgressao"
        id="descricao-denuncia"
        label="Descrição da denúncia"
        maxLen={255}
        type="text"
        inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
      />
    </div>
  </div>
);

export default descricao;

