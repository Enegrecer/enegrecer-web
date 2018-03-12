
import React from 'react';
import PropTypes from 'prop-types';

const combobox = ({ divClasse, id, onChange, valorPadrao, itens, label }) => (
  <div className={divClasse}>
    <select id={id} onChange={onChange} >
      <option value="" >{valorPadrao}</option>
      {
        itens.map(
          val => <option key={val} value={val}> {val} </option>
        )
      }
    </select>
    <label htmlFor={id}>{label}</label>
  </div>
);

combobox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  divClasse: PropTypes.string,
  itens: PropTypes.arrayOf(PropTypes.string),
  valorPadrao: PropTypes.string
};

combobox.defaultProps = {
  id: '',
  label: '',
  onChange: () => {},
  divClasse: '',
  itens: [],
  valorPadrao: ''
};

export default combobox;
