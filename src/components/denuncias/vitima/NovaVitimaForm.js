import React from 'react';
import CheckBox from '../../comum/checkbox';
import CampoTexto from '../../comum/campoTexto';
import * as ConstantesCSS from '../ConstantesCss';
import ComboEstado from '../../comum/comboboxEstado';
import Nome from '../../comum/nome';
import Genero from '../../comum/genero';
import Telefone from '../../comum/telefone';
import ComboboxRaca from './../../comum/comboboxRaca';
import Caracteristica from '../../comum/caracteristica';
import Data from '../../comum/data';
import { campoObrigatorio } from '../../comum/validacoes';

const NovaVitimaForm = () => (
  <div>
    <h3>Informacões da Vítima</h3>
    <br />
    <CheckBox state={'conhecoAVitima'} id={'conhecoAVitima'} label={'Conheço a Vítima'} />
    <CheckBox state={'souAVitima'} id={'souAVitima'} label={'Sou a Vítima'} />

    <div className="row">
      <Nome id={'nome-vitima'} state={'nomeVitima'} />
    </div>

    <div className="row">
      <Genero
        state={'vitimaGenero'}
        id={'vitima-genero'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s4`}
      />

      <ComboboxRaca
        state={'raca'}
        id={'raca'}
        classes="col s4"
        somenteRacasVitima
      />

      <Data
        state={'dataNascimento'}
        id={'dataNascimento'}
        label={'Data de Nascimento'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s4`}
      />

    </div>

    <div className="row">
      <CampoTexto
        state={'enderecoVitima'}
        id={'endereco-vitima'}
        label={'Endereço (máximo de 255 caracteres)'}
        maxLen={255}
        inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
        type={'text'}
      />
    </div>

    <div className="row">
      <CampoTexto
        state={'naturalidadeVitima'}
        id={'naturalidade-vitima'}
        label={'Naturalidade (máximo de 40 caracteres)'}
        maxLen={40}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
        type={'text'}
      />
      <ComboEstado state={'estadoVitima'} id={'estadoVitima'} classes={'col s6'} />
    </div>

    <div className="row">
      <CampoTexto
        state={'emailVitima'}
        id={'email-vitima'}
        label={'Email'}
        maxLen={40}
        type={'text'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />

      <Telefone
        divClasse={'input-field col s6'}
        id="telefone"
        state={'telefone'}
        label={'Telefone'}
      />

    </div>

    <div className="row">
      <Caracteristica
        id={'caracteristicasDaVitima'}
        label={'* Por favor, descreva aqui as características da vítima (máximo de 255 caracteres)'}
        validacoes={[campoObrigatorio]}
        state={'caracteristicasDaVitima'}
      />
    </div>
  </div>
)

export default NovaVitimaForm;
