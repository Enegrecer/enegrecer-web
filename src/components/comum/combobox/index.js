import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const combobox = ({ divClasse, id, state, valorPadrao, itens, label }) => (
  <div className={divClasse}>
    <label htmlFor={id}>{label}</label>
    <Field id={id} name={state} component="select">
      <option value="">{valorPadrao}</option>
      {
        itens.map(
          val => <option key={val} value={val}> {val} </option>
        )
      }
    </Field>
  </div>)

combobox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  divClasse: PropTypes.string,
  itens: PropTypes.arrayOf(PropTypes.string),
  valorPadrao: PropTypes.string,
  state: PropTypes.string,
};

combobox.defaultProps = {
  id: '',
  label: '',
  divClasse: '',
  itens: [],
  valorPadrao: '',
  state: '',
};

export default combobox;

