import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Field } from 'redux-form';
import { cortarPalavra } from '../../utils/helpers';
import ComboEstado from './../comum/comboboxEstado';
import CampoTexto from './../comum/campoTexto';
import BotoesRadio from './../comum/botoesRadio';
import Data from './../comum/data';
import * as ConstantesCSS from './ConstantesCss';
import Nome from '../comum/nome';

const DetalhamentoDenuncia = () => (
  <div>
    <h1>Nova Denúncia</h1>

    <div className="row">
      <Nome id={'detalhamento'} state={'detalhamento'} />
    </div>

    <div className="row">
      <BotoesRadio
        classes={'col s3'}
        state={'idCategoria'}
        botoes={[{ id: 'radioInjuria', valor: 'injuria', label: 'Injúria' },
          { id: 'radioRacismo', valor: 'racismo', label: 'Racismo' }]}
      />

      <Data
        id={'dataOcorrencia'}
        label={'Data do ocorrido'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s4`}
        state={'dataOcorrencia'}
      />

      <CampoTexto
        id={'horaOcorrencia'}
        label={'Hora do ocorrido'}
        maxLen={0}
        type={'time'}
        inputClasse={ConstantesCSS.CLASSES_INPUT}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s5`}
        onChange={(e) => { this.handleChange(e.target.value, 'horaOcorrencia') }}
      />
    </div>

    {/* <h4>Local do crime</h4> */}
    {/* <div className="row">
      <CampoTexto
        id={'endereco'}
        label={'Endereço'}
        maxLen={255}
        type={'text'}
        inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
        onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 255), 'endereco') }}
      />
    </div> */}
    {/* <div className="row">
      <ComboEstado id={'estado'} onChange={this.handleChange} classes="col s12" />
    </div> */}
  </div>
)
export default DetalhamentoDenuncia;
