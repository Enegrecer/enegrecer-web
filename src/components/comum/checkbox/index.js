import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const checkBox = ({
  id, label, state, onChange
}) => (
  <p>
    <label htmlFor={id}>
      <Field id={id} name={state} component="input" type="checkbox" onChange={(_event, newValue) => onChange(newValue)} />
      <span>{label}</span>
    </label>
  </p>
);

checkBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.string,
  onChange: PropTypes.func
};

checkBox.defaultProps = {
  id: '',
  label: '',
  state: '',
};

export default checkBox;

