import React from 'react';
import PropTypes from 'prop-types'

const campoTexto = ({ divClasse, id, type, onChange, inputClasse, maxLen, placeholder, label }) => (
  <div className={divClasse}>
    <input
      id={id}
      type={type}
      onChange={onChange}
      className={inputClasse}
      maxLength={maxLen}
      placeholder={placeholder || undefined}
    />
    <label className="active" htmlFor={id}>{label}</label>
  </div>
);

campoTexto.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  maxLen: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  divClasse: PropTypes.string,
  inputClasse: PropTypes.string

};

campoTexto.defaultProps = {
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
