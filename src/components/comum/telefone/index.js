import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';
/**
 * Adaptado da documentação oficial
 * @param {value} currentValue
 * @param {previousValue} previousValue
 */
const normalizePhone = (value, previousValue) => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 2) {
      return `${onlyNums} -`;
    }
    if (onlyNums.length === 7) {
      return `${onlyNums.slice(0, 2)} - ${onlyNums.slice(2)} -`;
    }
  }
  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  if (onlyNums.length <= 7) {
    return `${onlyNums.slice(0, 2)} - ${onlyNums.slice(2)}`;
  }
  return `${onlyNums.slice(0, 2)} - ${onlyNums.slice(2, 7)} - ${onlyNums.slice(7, 11)}`;
};

const telefone = ({
  divClasse, id, state, label
}) => (
  <CampoTexto
    divClasse={divClasse}
    type="text"
    state={state}
    id={id}
    label={label}
    placeholder="__ - ____ - ____"
    normalize={normalizePhone}
    maxLen={17}
  />
);

telefone.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  divClasse: PropTypes.string,
  state: PropTypes.string,
};

telefone.defaultProps = {
  id: '',
  label: '',
  divClasse: '',
  state: '',
};

export default telefone;

