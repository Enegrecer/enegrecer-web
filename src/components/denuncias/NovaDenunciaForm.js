import React from 'react';
import PropTypes from 'prop-types';
import NovaVitimaForm from './vitima/NovaVitimaForm';
import FormInformacoesLegais from './informacoesLegais/FormInformacoesLegais';
import { adicionaFormAoRedux } from './../comum/formControle';
import Denunciante from './denunciante/DenuncianteForm';
import Descricao from './descricao/FormDescricao';
import AgressorForm from './agressor/AgressorForm';
import './denuncia.css';

const FormDenuncia = props => (
  <form id="form-nova-denuncia" onSubmit={props.handleSubmit}>
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
);

FormDenuncia.propTypes = {
  handleSubmit: PropTypes.func,
};

FormDenuncia.defaultProps = {
  handleSubmit: () => {}
};

export default adicionaFormAoRedux(FormDenuncia, 'formDenuncia');

