import React from 'react';
import PropTypes from 'prop-types';
import * as ConstantesCSS from './ConstantesCss';

const SecaoForm = ({ titulo, subtitulo, texto, formulario }) => (
  <div className={ConstantesCSS.FORM_SECTION}>
    <div className="title-body">
      <h3>{titulo}</h3>
    </div>
    <div className="form-body">
      <h6>{subtitulo}</h6>
      <p>{texto}</p>
      { formulario }
    </div>
  </div>
);

SecaoForm.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  formulario: PropTypes.node
};

export default SecaoForm;
