import React from 'react';
import PropTypes from 'prop-types';

import Botao from './Botao';

const Nav = props => (
  <nav className="en-nav">
    <a className="en-extra-margin-right" href="/sobre">Sobre</a>
    <Botao outline primary onClick={() => props.history.push('/registrar')}>Registrar / Entrar</Botao>
  </nav>
);

Nav.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Nav;
