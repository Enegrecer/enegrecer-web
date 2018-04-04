import React from 'react';
import CampoTexto from '../../comum/campoTexto';
import * as ConstantesCSS from '../ConstantesCss';
import Nome from '../../comum/nome';
import Genero from '../../comum/genero';
import Telefone from '../../comum/telefone';
import ComboboxRaca from './../../comum/comboboxRaca';
import Combobox from './../../comum/combobox';
import Data from '../../comum/data';
import { campoObrigatorio, emailInvalido } from '../../comum/validacoes';
import Estado from '../../comum/comboboxEstado';

const DenuncianteForm = () => (
  <div>
    <div className="row">
      <Nome id={'nome-vitima'} state={'nomeDenunciante'} validacoes={[campoObrigatorio]} />
      <CampoTexto
        state={'emailDenunciante'}
        id={'email-denunciante'}
        label={'Email'}
        maxLen={40}
        type={'text'}
        placeholder={'E-mail'}
        validacoes={[campoObrigatorio, emailInvalido]}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />
    </div>

    <div className="row">
      <Telefone
        state={'telefoneDenunciante'}
        id="telefone-denunciante"
        label={'Telefone'}
        divClasse={'col s6'}
      />
      <Genero
        id={'genero-denunciante'}
        state={'generoDenunciante'}
        divClasse={'col s6'}
      />
    </div>

    <div className="row">
      <Estado
        id={'estado-denunciante'}
        state={'estadoDenunciante'}
        divClasse={'col s6'}
      />
      <Combobox
        id={'cidade-denunciante'}
        state={'cidadeDenunciante'}
        itens={['Belo Horizonte']}
        divClasse={'col s6'}
        label={'Cidade'}
      />
    </div>

    <div className="row">
      <Genero
        id={'genero-denunciante'}
        state={'generoDenunciante'}
        divClasse={'col s6'}
      />
      <Data
        id={'data-nascimento-denunciante'}
        label={'Data de Nascimento'}
        state={'dataNascimentoDenunciante'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />
    </div>

    <div className="row">
      <ComboboxRaca
        state={'racaDenunciante'}
        id={'raca-denunciante'}
        divClasse={'col s6'}
        somenteRacasVitima
      />
    </div>
  </div>
);

export default DenuncianteForm;
