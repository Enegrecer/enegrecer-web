import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const checkBox = ({
  id, label, state, divClasse, onChange
}) => (
  <div className={divClasse}>
    <Field id={id} name={state} component="input" type="checkbox" onChange={(event, newValue) => onChange(newValue)} />
    <label htmlFor={id}>{label}</label>
  </div>
);

checkBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.string,
  divClasse: PropTypes.string,
  onChange: PropTypes.func
};

checkBox.defaultProps = {
  id: '',
  label: '',
  state: '',
  divClasse: '',
  onChange: () => {}
};

export default checkBox;

