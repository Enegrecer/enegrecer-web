import React from 'react';
import PropTypes from 'prop-types';
import Combobox from '../combobox';
import estados from './estados';

const comboEstado = ({ id, classes, state }) => (
  <Combobox
    state={state}
    id={id}
    itens={estados}
    divClasse={classes}
    label={'Selecione o Estado:'}
    valorPadrao={'Selecione'}
  />
);

comboEstado.propTypes = {
  id: PropTypes.string,
  state: PropTypes.string,
  classes: PropTypes.string
};

comboEstado.defaultProps = {
  id: '',
  state: '',
  classes: ''
};

export default comboEstado;

