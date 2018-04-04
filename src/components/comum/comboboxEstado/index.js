import React from 'react';
import PropTypes from 'prop-types';
import Combobox from '../combobox';
import estados from './estados';

const comboEstado = ({ id, divClasse, state }) => (
  <Combobox
    state={state}
    id={id}
    itens={estados}
    divClasse={divClasse}
    label={'Selecione o Estado:'}
    valorPadrao={'Selecione'}
  />
);

comboEstado.propTypes = {
  id: PropTypes.string,
  state: PropTypes.string,
  divClasse: PropTypes.string
};

comboEstado.defaultProps = {
  id: '',
  state: '',
  divClasse: ''
};

export default comboEstado;

