import React from 'react';
import PropTypes from 'prop-types'
import Combobox from '../combo'
import estados from './estados';


const comboEstado = ({ id, onChange }) => (
   <Combobox id={id} itens={estados} onChange={onChange} />
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
  

