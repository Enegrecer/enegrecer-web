import React from 'react';
import PropTypes from 'prop-types'

function CampoTexto(props) {
  return (
    <div className={props.divClasse}>
      <input
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        className={props.inputClasse}
        maxLength={props.maxLen}
        placeholder={props.placeholder ? props.placeholder : undefined}
      />
      <label className="active" htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

CampoTexto.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  maxLen: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  divClasse: PropTypes.string,
  inputClasse: PropTypes.string

};

CampoTexto.defaultProps = {
  id: '',
  type: '',
  maxLen: '',
  placeholder: '',
  label: '',
  onChange: () => {},
  divClasse: '',
  inputClasse: ''
};

export default CampoTexto;
