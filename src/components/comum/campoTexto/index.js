import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const renderCampoTexto = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  divClasse, id, onChange, inputClasse, maxLen, placeholder
}) => (
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
  {touched && error && <span>{error}</span>}
  </div>
)



/*
export const renderCampoTexto = ({ input, divClasse, id, type, onChange, inputClasse, maxLen,
  placeholder, label, state, meta: { touched, error, warning } }) => (
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
*/
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
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

