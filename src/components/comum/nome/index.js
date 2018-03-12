import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';

const nome = ({ id, onChange }) => (<CampoTexto
  id={id}
  label={'Nome (máximo de 40 caracteres)'}
  maxLen={40}
  placeholder={''}
  type={'text'}
  divClasse={'input-field col s12'}
  onChange={onChange}
/>)

nome.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func
};

nome.defaultProps = {
  id: '',
  onChange: () => {}
};

export default nome;

