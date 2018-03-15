import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';


export const renderCampoTexto = ({ input, divClasse, id, type, onChange, inputClasse, maxLen, placeholder, label, state, meta: { touched, error } }) => (
  <div className={divClasse}>
    <input
      id={id}
      {...input}
      type={type}
      className={inputClasse}
      maxLength={maxLen}
      placeholder={placeholder || undefined}
    />
    <label className="active" htmlFor={id}>{label}</label>
    {state && touched && error && <span>{error}</span>}
  </div>
)

const campoTexto = ({ divClasse, id, type, onChange, inputClasse, maxLen, placeholder, label, state, validacoes }) => {
  if (state) {
    return (<Field
      name={state}
      state={state}
      divClasse={divClasse}
      id={id}
      type={type}
      onChange={onChange}
      inputClasse={inputClasse}
      maxLen={maxLen}
      placeholder={placeholder}
      label={label}
      component={renderCampoTexto}
      validate={validacoes}
    />)
  }
  return renderCampoTexto({ divClasse, id, type, onChange, inputClasse, maxLen, placeholder, label, state, meta: {}, });
};

renderCampoTexto.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  maxLen: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  divClasse: PropTypes.string,
  inputClasse: PropTypes.string
};

renderCampoTexto.defaultProps = {
  id: '',
  type: '',
  maxLen: '',
  placeholder: '',
  label: '',
  onChange: () => {},
  divClasse: '',
  inputClasse: ''
};

export default campoTexto;

