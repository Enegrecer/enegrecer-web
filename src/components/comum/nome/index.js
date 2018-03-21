import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';
import { nomeObrigatorio } from './validacoes';

const nome = ({ id, state, onChange }) => (<CampoTexto
  id={id}
  label={'Nome (máximo de 40 caracteres)'}
  maxLen={40}
  placeholder={'Nome (máximo de 40 caracteres)'}
  type={'text'}
  divClasse={'input-field col s12'}
  onChange={onChange}
  state={state}
  validacoes={[nomeObrigatorio]}
/>)

nome.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  state: PropTypes.string
};

nome.defaultProps = {
  id: '',
  onChange: () => {},
  state: ''
};

export default nome;

