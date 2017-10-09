import React from 'react';

import Botao from './Botao';
import { withHistoryPropTypes } from './sharedPropTypes';


const Nav = props => (
  <nav className="en-nav">
    <a className="en-extra-margin-right" href="/sobre">Sobre</a>
    <Botao
      outline
      primary
      onClick={
        () => props.history.push('/painel/login') // eslint-disable-line react/prop-types
      }
    >Registrar / Entrar</Botao>
  </nav>
);

Nav.propTypes = withHistoryPropTypes();

export default Nav;
