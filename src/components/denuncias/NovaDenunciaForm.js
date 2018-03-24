import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NovaVitimaForm from './vitima/NovaVitimaForm';
import NovaTestemunhaForm from './testemunha/NovaTestemunhaForm';
import DetalhamentoDenuncia from './DetalhamentoDenuncia';
import { adicionaFormAoRedux } from './../comum/formControle';
import Denunciante from './denunciante/DenuncianteForm';
import Descricao  from './descricao/FormDescricao';
import AgressorForm   from  './agressor/AgressorForm';
import './denuncia.css';

const FormDenuncia = (props) => {
  const { handleSubmit } = props;
  return (
    <form id="form-nova-denuncia" onSubmit={handleSubmit}>
      <Denunciante   />
      <DetalhamentoDenuncia  />

      <NovaVitimaForm  />

      <NovaTestemunhaForm />

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

