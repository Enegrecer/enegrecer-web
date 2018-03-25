import React from 'react';
import CampoTexto from '../../comum/campoTexto';
import * as ConstantesCSS from '../ConstantesCss';
import Data from '../../comum/data';
import Combobox from '../../comum/combobox';
import ComboboxEstado from '../../comum/comboboxEstado';

const descricao = () => (
  <div>
    <br />
    <p>Descrição da agressão</p>
    <br />
    <h4> Compreendemos o quanto é difícil externalizar a agressão em palavras.</h4>

    <p>Mas, é importante para que futuramente consigamos trabalhar para que essas agressões
    tenham um fim. </p>

    <div className="row">

      <Combobox
        state={'periodoAgressao'}
        id={'periodo'}
        itens={[' ', 'Manhã', 'Tarde', 'Noite']}
        divClasse={'col s6'}
        label={'Período*'}
      />

      <Data
        state={'dataAgressao'}
        id={'data-agressao'}
        label={'Data de Agressão'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />
    </div>

    <div className="row">
      <ComboboxEstado
        state={'estadoAgressao'}
        id={'descricao-estado'}
        classes={' col s6'}
      />

      <CampoTexto
        state={'cidadeAgressao'}
        id={'cidade-descricao'}
        label={'Cidade*'}
        maxLen={40}
        placeholder={''}
        type={'text'}
        divClasse={'input-field col s6'}
      />
    </div>

    <div className="row">
      <CampoTexto
        state={'bairroAgressao'}
        id={'bairro-descricao'}
        label={'Bairro*'}
        maxLen={40}
        placeholder={''}
        type={'text'}
        divClasse={'input-field col s6'}
      />

      <CampoTexto
        state={'enderecoAgressao'}
        id={'endereco-descricao'}
        label={'Endereço'}
        maxLen={40}
        placeholder={''}
        type={'text'}
        divClasse={'input-field col s6'}
      />
    </div>

    <div className="row">
      <CampoTexto
        state={'descricaoAgressao'}
        id={'descricao-denuncia'}
        label={'Descrição da denúncia'}
        maxLen={255}
        type={'text'}
        inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
      />
    </div>
  </div>
);

export default descricao;

