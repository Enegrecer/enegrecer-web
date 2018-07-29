import React from 'react';
import PropTypes from 'prop-types';
import * as ConstantesCSS from './ConstantesCss';

const SecaoForm = ({
  titulo, subtitulo, texto, children
}) => (
  <div className={ConstantesCSS.FORM_SECTION}>
    <div className="title-body">
      <a name={titulo} href={`#${titulo}`}><h3>{titulo}</h3></a>
    </div>
    <div className="form-body">
      <h6>{subtitulo}</h6>
      <p>{texto}</p>
      { children }
    </div>
  </div>
);

SecaoForm.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  children: PropTypes.node
};

SecaoForm.defaultProps = {
  children: {}
};

export default SecaoForm;
