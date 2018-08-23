import React from 'react';
import PropTypes from 'prop-types';
import Combobox from '../combobox';
import estados from './estados';

const comboEstado = ({
  id, divClasse, state, onChange
}) => (
  <Combobox
    state={state}
    id={id}
    itens={estados}
    divClasse={divClasse}
    label="Estado"
    valorPadrao="Selecione"
    onChange={onChange}
  />
);

comboEstado.propTypes = {
  id: PropTypes.string,
  state: PropTypes.string,
  divClasse: PropTypes.string,
  onChange: PropTypes.func
};

comboEstado.defaultProps = {
  id: '',
  state: '',
  divClasse: '',
  onChange: () => {}
};

export default comboEstado;

