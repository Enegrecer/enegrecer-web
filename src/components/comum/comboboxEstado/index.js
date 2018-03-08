import React from 'react';
import PropTypes from 'prop-types'
import Combobox from '../combobox'
import estados from './estados';


const comboEstado = ({ id, onChange, classes }) => (
  <Combobox
    id={id}
    onChange={onChange}
    itens={estados}
    divClasse={`input-field ${classes}`}
    label={'Selecione o Estado:'}
    valorPadrao={'Selecione'}
  />
);

comboEstado.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  classes: PropTypes.string,
};

comboEstado.defaultProps = {
  id: '',
  onChange: () => {},
  classes: ''
};

export default comboEstado;

