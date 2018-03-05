import React from 'react';
import PropTypes from 'prop-types'
import CampoTexto from '../CampoTexto'


const Nome = ({id, onChange}) =>  <CampoTexto
    id={id}
    label={'Nome (máximo de 40 caracteres)'}
    maxLen={40}
    placeholder={''}
    type={'text'}
    divClasse={'input-field col s12'}
    onChange={onChange}
/>

  Nome.propTypes = {
    id: PropTypes.string,
    onChange: PropTypes.func  
  };
  
  Nome.defaultProps = {
    id: '',
    onChange: () => {}
  };
  


export default Nome;