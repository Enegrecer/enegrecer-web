import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';
import { temNumeroNoNome, nomeMaiorQue40Caracteres, nomeNaoPodeTerCaracterEspecial } from './validacoes';

const nome = ({
  id, state, onChange, validacoes, divClasse
}) => (<CampoTexto
  id={id}
  label="Nome"
  maxLen={40}
  placeholder=" "
  type="text"
  divClasse={`input-field ${divClasse}`}
  onChange={onChange}
  state={state}
  validacoes={[
    temNumeroNoNome,
    nomeMaiorQue40Caracteres,
    nomeNaoPodeTerCaracterEspecial].concat(validacoes)}
/>);

nome.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  state: PropTypes.string,
  validacoes: PropTypes.arrayOf(PropTypes.func),
  divClasse: PropTypes.string
};

nome.defaultProps = {
  id: '',
  state: '',
  validacoes: [],
  divClasse: 'col s12 m6 l6'
};

export default nome;

