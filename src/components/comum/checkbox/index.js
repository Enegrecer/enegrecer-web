import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const checkBox = ({ id, label, state, divClasse }) => (
  <div className={divClasse}>
    <Field id={id} name={state} component="input" type="checkbox" />
    <label htmlFor={id}>{label}</label>
  </div>
);

checkBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.string,
  divClasse: PropTypes.string,
};

checkBox.defaultProps = {
  id: '',
  label: '',
  state: '',
  divClasse: ''
};

export default checkBox;

