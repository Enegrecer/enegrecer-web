import React from 'react';
import NovaVitimaForm from './vitima/NovaVitimaForm';
import FormInformacoesLegais from './informacoesLegais/FormInformacoesLegais';
import { adicionaFormAoRedux } from './../comum/formControle';
import Denunciante from './denunciante/DenuncianteForm';
import Descricao from './descricao/FormDescricao';
import AgressorForm from './agressor/AgressorForm';
import './denuncia.css';

const FormDenuncia = (props) => {
  const { handleSubmit } = props;
  return (
    <form id="form-nova-denuncia" onSubmit={handleSubmit}>
      <Denunciante />
      <NovaVitimaForm />
      <FormInformacoesLegais />
      <AgressorForm />
      <Descricao />
      <br />
      <button className="btn waves-effect waves-light" type="submit" name="action">
          Enviar Denúncia
      </button>
    </form>
  )
}
export default adicionaFormAoRedux(FormDenuncia, 'formDenuncia');

