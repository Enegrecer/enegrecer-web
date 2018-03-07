import React from 'react'
import PropTypes from 'prop-types'


export default function CheckBox(props) {
  return (
    <p>
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>{props.label}</label>
    </p>
  );
}

CheckBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
};

CheckBox.defaultProps = {
  id: '',
  label: ''
}
