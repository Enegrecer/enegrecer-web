import React from 'react';
import PropTypes from 'prop-types';
import * as ConstantesCSS from './ConstantesCss';

const FormSection = ({ title, subtitle, text, children }) => (
  <div className={ConstantesCSS.FORM_SECTION}>
    <div className="title-body">
      <h3>{title}</h3>
    </div>
    <div className="form-body">
      <h6>{subtitle}</h6>
      <p>{text}</p>
      { children }
    </div>
  </div>
);

FormSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FormSection;
