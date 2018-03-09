import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

const telefone = ({ handleChange, id, value, label }) => (
  <div className="input-field col s6">
    <InputMask
      type="text"
      name={id}
      id={id}
      onChange={e => handleChange(e.target.value, id)}
      value={value}
      mask="(99) 99999-9999"
      maskChar=" "
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

telefone.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string
};

telefone.defaultProps = {
  id: '',
  label: '',
  handleChange: () => {},
  value: PropTypes.string
};

export default telefone;
