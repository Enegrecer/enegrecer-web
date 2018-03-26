import React from 'react';
import PropTypes from 'prop-types';
import NovaVitimaForm from './vitima/NovaVitimaForm';
import FormInformacoesLegais from './informacoesLegais/FormInformacoesLegais';
import { adicionaFormAoRedux } from './../comum/formControle';
import Denunciante from './denunciante/DenuncianteForm';
import Descricao from './descricao/FormDescricao';
import AgressorForm from './agressor/AgressorForm';
import './denuncia.css';
import SecaoForm from './SecaoForm';

const secoesForm = [
  {
    titulo: 'Dados do denunciante',
    subtitulo: 'Você poderia nos passar algumas informações suas?',
    texto: `Não se preocupe sua identidade será mantida em sigilo.
    Essas informações são importantes para futuramente darmos um retorno das
    medidas que estão sendo tomadas contra esse agressor.`,
    formulario: <Denunciante />
  },
  {
    titulo: 'Dados da vítima',
    subtitulo: 'Me conte um pouco sobre a vítima',
    texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl mi, egestas
    ac ipsum sit amet, blandit posuere metus. Donec imperdiet ut mi sed posuere. Pellentesque
    et varius sapien.`,
    formulario: <NovaVitimaForm />
  },
  {
    titulo: 'Informações Legais',
    subtitulo: `Você conseguiu realizar um boletim de ocorrência? Ou tem informações caso
    você não seja a vítima?`,
    texto: `Essas informações são importantes para conseguirmos identificar a quantidade de
    vítimas que conseguem reportar esse crime.`,
    formulario: <FormInformacoesLegais />
  },
  {
    titulo: 'Dados do Agressor',
    subtitulo: 'Você se sente confortável em dividir conosco informações sobre o agressor?',
    texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl mi, egestas
    ac ipsum sit amet, blandit posuere metus. Donec imperdiet ut mi sed posuere.
    Pellentesque et varius sapien.`,
    formulario: <AgressorForm />
  },
  {
    titulo: 'Descrição da agressão',
    subtitulo: 'Compreendemos o quanto é difícil externalizar a agressão em palavras.',
    texto: `Mas, é importante para que futuramente consigamos trabalhar para que essas agressões
    tenham um fim.`,
    formulario: <Descricao />
  }
];

const FormDenuncia = props => (
  <form id="form-nova-denuncia" onSubmit={props.submeteFormulario}>
    {secoesForm.map(formSection => (
      <SecaoForm
        key={formSection.titulo}
        titulo={formSection.titulo}
        subtitulo={formSection.subtitulo}
        texto={formSection.texto}
      >
        {formSection.formulario}
      </SecaoForm>
    ))}

    <br />
    <button className="btn waves-effect waves-light" type="submit" name="action">
          Enviar Denúncia
    </button>
  </form>
);

FormDenuncia.propTypes = {
  submeteFormulario: PropTypes.func.isRequired,
};

export default adicionaFormAoRedux(FormDenuncia, 'formDenuncia');

