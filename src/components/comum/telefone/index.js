import React from 'react';
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask';

export default function Telefone({ handleChange, ...props }) {
  return (
    <div className="input-field col s6">
      <InputMask
        {...props}
        type="text"
        name={props.id}
        id={props.id}
        onChange={e => handleChange(e.target.value, props.id)}
        value={props.value}
        mask="(99) 99999-9999"
        maskChar=" "
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

Telefone.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string
};

Telefone.defaultProps = {
  id: '',
  label: '',
  handleChange: () => {},
  value: PropTypes.string
};
