
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const combobox = ({ divClasse, id, state, valorPadrao, itens, label }) => (
  <div className={divClasse}>
    <Field id={id} name={state} component="select">
      <option value="">{valorPadrao}</option>
      {
        itens.map(
          val => <option key={val} value={val}> {val} </option>
        )
      }
    </Field>
    <label htmlFor={id}>{label}</label>
  </div>
);

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

