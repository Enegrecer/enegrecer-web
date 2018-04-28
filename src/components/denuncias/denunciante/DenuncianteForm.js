import React from 'react';
import CampoTexto from '../../comum/campoTexto';
import * as ConstantesCSS from '../ConstantesCss';
import Nome from '../../comum/nome';
import Genero from '../../comum/genero';
import Telefone from '../../comum/telefone';
import ComboboxRaca from './../../comum/comboboxRaca';
import Data from '../../comum/data';
import { campoObrigatorio, emailInvalido } from '../../comum/validacoes';
import Endereco from '../../comum/endereco';

const DenuncianteForm = () => (
  <div>
    <div className="row">
      <Nome
        id={'nome-vitima'}
        state={'nomeDenunciante'}
        validacoes={[campoObrigatorio]}
      />
      <CampoTexto
        state={'emailDenunciante'}
        id={'email-denunciante'}
        label={'Email'}
        maxLen={40}
        type={'text'}
        placeholder={'E-mail'}
        validacoes={[campoObrigatorio, emailInvalido]}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
      />
    </div>

    <div className="row">
      <Data
        id={'data-nascimento-denunciante'}
        label={'Data de Nascimento'}
        state={'dataNascimentoDenunciante'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
      />
      <Telefone
        state={'telefoneDenunciante'}
        id="telefone-denunciante"
        label={'Telefone'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
      />
    </div>

    <Endereco estadoState={'estadoDenunciante'} cidadeState={'cidadeDenunciante'} />

    <div className="row">
      <ComboboxRaca
        state={'racaDenunciante'}
        id={'raca-denunciante'}
        divClasse={'col s12 m6 l6'}
        somenteRacasVitima
      />
      <Genero
        id={'genero-denunciante'}
        state={'generoDenunciante'}
        divClasse={'col s12 m6 l6'}
      />
    </div>
  </div>
);

export default DenuncianteForm;
