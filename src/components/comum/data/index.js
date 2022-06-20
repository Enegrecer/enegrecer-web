// import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';

const Data = ({
  id, state, divClasse, label
}) => (
  <CampoTexto
    id={id}
    label={label}
    maxLen={0}
    inputClasse="datepicker"
    divClasse={divClasse}
    type="date"
    placeholder="Data"
    state={state}
  />
);

Data.propTypes = {
  id: PropTypes.string,
  divClasse: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.string,
};

Data.defaultProps = {
  id: '',
  divClasse: '',
  label: '',
  state: ''
};

export default Data;

