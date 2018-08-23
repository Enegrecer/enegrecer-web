import React from 'react';
import CampoTexto from '../../comum/campoTexto';
import * as ConstantesCSS from '../ConstantesCss';

const FormInformacoesLegais = () => (
  <div>
    <div className="row">
      <CampoTexto
        state="numeroBoletim"
        id="numero-boletim"
        label="Número do boletim de ocorrência"
        maxLen={40}
        type="text"
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
      />

      <CampoTexto
        state="categoriaCrime"
        id="categoria-crime-boletim"
        label="Categoria do crime no BO"
        type="text"
        maxLen={40}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
      />
    </div>

    <div className="row">
      <CampoTexto
        state="numeroProcesso"
        id="numero-processo"
        label="Número do processo"
        type="text"
        maxLen={40}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
      />

      <CampoTexto
        state="orgao"
        id="orgao"
        label="Órgão"
        type="text"
        maxLen={40}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12 m6 l6`}
      />
    </div>
  </div>
);

export default FormInformacoesLegais;

