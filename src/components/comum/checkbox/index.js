import React from 'react';
import PropTypes from 'prop-types';

const checkBox = ({ id, label }) => (
  <p>
    <input type="checkbox" id={id} />
    <label htmlFor={id}>{label}</label>
  </p>
);

checkBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
};

checkBox.defaultProps = {
  id: '',
  label: ''
}
export default checkBox;
