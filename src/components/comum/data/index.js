import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';

const Data = ({ id, divClasse, label, onChange }) => (
  <CampoTexto
    id={id}
    label={label}
    maxLen={0}
    inputClasse={'datepicker'}
    divClasse={divClasse}
    type={'date'}
    placeholder="Data"
    onChange={onChange}
  />
)

Data.propTypes = {
  id: PropTypes.string,
  divClasse: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Data.defaultProps = {
  id: '',
  divClasse: '',
  label: '',
  state: '',
  onChange: () => {}
};

export default Data;

