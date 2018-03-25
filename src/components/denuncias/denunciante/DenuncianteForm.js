import React from 'react';
import CampoTexto from '../../comum/campoTexto';
import * as ConstantesCSS from '../ConstantesCss';
import Nome from '../../comum/nome';
import Genero from '../../comum/genero';
import Telefone from '../../comum/telefone';
import ComboboxRaca from './../../comum/comboboxRaca';
import Combobox from './../../comum/combobox';
import Data from '../../comum/data';

const DenuncianteForm = () => (
  <div className={ConstantesCSS.FORM_SECTION}>
    <div className="title-body">
      <h3>Dados do denunciante</h3>
    </div>

    <div className="form-body">
      <h6>Você poderia nos passar algumas informações suas?</h6>
      <p> Não se preocupe sua identidade será mantida em sigilo.
        Essas informações são importantes para
      futuramente darmos um retorno das medidas que estão sendo tomadas
      contra esse agressor. </p>

      <div className="row">
        <Nome id={'nome-vitima'} state={'nomeDenunciante'} />
        <CampoTexto
          state={'emailDenunciante'}
          id={'email-denunciante'}
          label={'Email'}
          maxLen={40}
          type={'text'}
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
        <Combobox
          id={'cidade-denunciante'}
          state={'cidadeDenunciante'}
          itens={['Belo Horizonte']}
          divClasse={'col s6'}
          label={'Cidade *'}
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
          classes={'col s6'}
          somenteRacasVitima
        />
      </div>
    </div>
  </div>
);

export default DenuncianteForm;
