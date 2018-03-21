import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const checkBox = ({ id, label, state }) => (
  <div>
    <Field id={id} name={state} component="input" type="checkbox" />
    <label htmlFor={id}>{label}</label>
  </div>
);

checkBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.string,
};

checkBox.defaultProps = {
  id: '',
  label: '',
  state: ''
}

export default checkBox;

