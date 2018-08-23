import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const combobox = ({
  divClasse, id, state, valorPadrao, itens, label, onChange
}) => (
  state ? (
    <div className={divClasse}>
      <label htmlFor={id}>{label}</label>
      <Field id={id} name={state} component="select" onChange={e => onChange(e.target.value)}>
        <option value="">{valorPadrao}</option>
        {
          itens.map(val => <option key={val} value={val}> {val} </option>)
        }
      </Field>
    </div>
  ) : (
    <div>
      <select name="select">
        <option key={label} value={label} disabled selected>{label}</option>
        {itens.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  )
);

combobox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  divClasse: PropTypes.string,
  itens: PropTypes.arrayOf(PropTypes.string),
  valorPadrao: PropTypes.string,
  state: PropTypes.string,
  onChange: PropTypes.func
};

combobox.defaultProps = {
  id: '',
  label: '',
  divClasse: '',
  itens: [],
  valorPadrao: '',
  state: '',
  onChange: () => {}
};

export default combobox;

