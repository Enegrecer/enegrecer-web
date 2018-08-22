import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const renderCampoTexto = ({
  input,
  label,
  type,
  meta: { touched, error },
  divClasse, id, inputClasse, maxLen, placeholder
}) => {
  const existeErroDeValidacao = touched && error;
  return (
    <div className={divClasse}>
      <input
        id={id}
        {...input}
        type={type}
        className={!existeErroDeValidacao ? inputClasse : `${inputClasse} invalid`}
        maxLength={maxLen}
        placeholder={placeholder || undefined}
      />
      <label className="active" data-error={error} data-success="right" htmlFor={id}>{label}</label>
    </div>
  );
};

const campoTexto = ({
  divClasse, id, type, onChange,
  inputClasse, maxLen, placeholder, label, state, validacoes, normalize
} = this) => {
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
      normalize={normalize}
    />);
  }
  return renderCampoTexto({
    divClasse, id, type, onChange, inputClasse, maxLen, placeholder, label, state, meta: {},
  });
};

renderCampoTexto.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  maxLen: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  divClasse: PropTypes.string,
  inputClasse: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  })
};

renderCampoTexto.defaultProps = {
  id: '',
  type: '',
  maxLen: '',
  placeholder: '',
  label: '',
  onChange: () => {},
  divClasse: '',
  inputClasse: '',
  meta: {}
};

export default campoTexto;
