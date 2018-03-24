import React from 'react';
import CampoTexto from '../../comum/campoTexto';
import * as ConstantesCSS from '../ConstantesCss';

const FormInformacoesLegais = () => (
  <div>
    <br />
    <p>Informaçoes Legais</p>
    <br />
    <h4> Você conseguiu realizar um boletim de ocorrência? Ou tem informações caso
    você não seja a vítima? </h4>

    <p>Essas informações são importantes para conseguirmos identificar a quantidade de vítimas que
    conseguem reportar esse crime. </p>

    <div className="row">
      <CampoTexto
        id={'numero-boletim'}
        label={'Número do Boletim de ocorrência'}
        maxLen={40}
        type={'text'}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />

      <CampoTexto
        id={'categoria-crime-boletim'}
        label={'Categoria do crime no BO'}
        type={'text'}
        maxLen={40}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />
    </div>

    <div className="row">
      <CampoTexto
        id={'numero-processo'}
        label={'Número do Processo'}
        type={'text'}
        maxLen={40}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />

      <CampoTexto
        id={'orgao'}
        label={'Órgão'}
        type={'text'}
        maxLen={40}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
      />
    </div>
  </div>
);

export default FormInformacoesLegais;

