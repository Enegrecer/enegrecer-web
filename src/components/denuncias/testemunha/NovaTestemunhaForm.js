import React from 'react';
import Telefone from '../../comum/telefone';
import * as ConstantesCSS from '../ConstantesCss';
import Genero from '../../comum/genero';
import Nome from '../../comum/nome';
import ComboboxRaca from '../../comum/comboboxRaca';
import Caracteristica from '../../comum/caracteristica';
import Data from '../../comum/data';

const NovaTestemunhaForm = () => (
  <div>
    <h3>Informacões da Testemunha</h3>
    <br />

    <div className="row">
      <Nome id={'nome-testemunha'} />
    </div>

    <div className="row">
      <Genero
        state={'generoTestemunha'}
        id={'genero-testemunha'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />

      <ComboboxRaca
        state={'racaTestemunha'}
        id={'raca-testemunha'}
        classes="col s6"
        somenteRacasVitima={false}
      />
    </div>

    <div className="row">
      <Data
        id={'dataNascimento-testemunha'}
        label={'Data de Nascimento'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
        state={'dataNascimentoTestemunha'}
      />

      <Telefone
        id={'telefone-vitima'}
        state={'telefoneVitima'}
        label={'Telefone'}
      />
    </div>

    <div className="row">
      <Caracteristica
        state={'caracteristicasTestemunha'}
        id={'caracteristicas-testemunha'}
        label={'* Por favor, descreva aqui as características da testemunha (máximo de 255 caracteres)'}
        type={'text'}
        inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
      />
    </div>
  </div>
)

export default NovaTestemunhaForm
