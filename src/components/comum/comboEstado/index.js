import React from 'react';
import PropTypes from 'prop-types'
import Combobox from '../combo'
import estados from './estados';


const comboEstado = ({ id, onChange }) => (
  <Combobox
    id={id}
    onChange={onChange}
    itens={estados}
    divClasse={'input-field col s12'}
    label={'Selecione o Estado:'}
    valorPadrao={'Selecione'}
  />
);

comboEstado.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func
};

comboEstado.defaultProps = {
  id: '',
  onChange: () => {}
};

export default comboEstado;

