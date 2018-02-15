import React from 'react';

import Botao from './Botao';
import { withHistoryPropTypes } from './sharedPropTypes';


const Nav = props => (
  <nav className="en-nav">
    <a className="en-extra-margin-right" name="sobre" href="/sobre">Sobre</a>
  </nav>
);

Nav.propTypes = withHistoryPropTypes();

export default Nav;
