
import React from 'react';
import PropTypes from 'prop-types'


export default function Combobox(props) {
  return (
    <div className={props.divClasse}>
      <select id={props.id} onChange={props.onChange} >
        <option value="" >{props.valorPadrao}</option>
        {
          props.itens.map(
            val => <option key={val} value={val}> {val} </option>
          )
        }
      </select>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

Combobox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  divClasse: PropTypes.string,
  itens: PropTypes.arrayOf(PropTypes.string),
  valorPadrao: PropTypes.string
};

Combobox.defaultProps = {
  id: '',
  label: '',
  onChange: () => {},
  divClasse: '',
  itens: [],
  valorPadrao: ''
};

