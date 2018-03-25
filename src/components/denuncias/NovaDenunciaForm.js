import React from 'react';
import PropTypes from 'prop-types';
import NovaVitimaForm from './vitima/NovaVitimaForm';
import FormInformacoesLegais from './informacoesLegais/FormInformacoesLegais';
import { adicionaFormAoRedux } from './../comum/formControle';
import Denunciante from './denunciante/DenuncianteForm';
import Descricao from './descricao/FormDescricao';
import AgressorForm from './agressor/AgressorForm';
import FormSection from './FormSection';
import './denuncia.css';

const formSections = [
  {
    title: 'Dados do denunciante',
    subtitle: 'Você poderia nos passar algumas informações suas?',
    text: `Não se preocupe sua identidade será mantida em sigilo.
    Essas informações são importantes para futuramente darmos um retorno das
    medidas que estão sendo tomadas contra esse agressor.`,
    component: <Denunciante />
  },
  {
    title: 'Dados da vítima',
    subtitle: 'Me conte um pouco sobre a vítima',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl mi, egestas
    ac ipsum sit amet, blandit posuere metus. Donec imperdiet ut mi sed posuere. Pellentesque
    et varius sapien.`,
    component: <NovaVitimaForm />
  },
  {
    title: 'Informações Legais',
    subtitle: `Você conseguiu realizar um boletim de ocorrência? Ou tem informações caso
    você não seja a vítima?`,
    text: `Essas informações são importantes para conseguirmos identificar a quantidade de
    vítimas que conseguem reportar esse crime.`,
    component: <FormInformacoesLegais />
  },
  {
    title: 'Dados do Agressor',
    subtitle: 'Você se sente confortável em dividir conosco informações sobre o agressor?',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl mi, egestas
    ac ipsum sit amet, blandit posuere metus. Donec imperdiet ut mi sed posuere.
    Pellentesque et varius sapien.`,
    component: <AgressorForm />
  },
  {
    title: 'Descrição da agressão',
    subtitle: 'Compreendemos o quanto é difícil externalizar a agressão em palavras.',
    text: `Mas, é importante para que futuramente consigamos trabalhar para que essas agressões
    tenham um fim.`,
    component: <Descricao />
  }
];

const FormDenuncia = props => (
  <form id="form-nova-denuncia" onSubmit={props.handleSubmit}>
    {formSections.map(formSection => (
      <FormSection
        key={formSection.title}
        title={formSection.title}
        subtitle={formSection.subtitle}
        text={formSection.text}
      >
        {formSection.component}
      </FormSection>
    ))}

    <br />
    <button className="btn waves-effect waves-light" type="submit" name="action">
          Enviar Denúncia
    </button>
  </form>
);

FormDenuncia.propTypes = {
  handleSubmit: PropTypes.func,
};

FormDenuncia.defaultProps = {
  handleSubmit: () => {}
};

export default adicionaFormAoRedux(FormDenuncia, 'formDenuncia');

