import React from 'react';
import { withHistoryPropTypes } from './sharedPropTypes';


const Nav = () => (
  <nav className="en-nav">
    <a className="en-extra-margin-right" name="sobre" href="/sobre">Sobre</a>
  </nav>
);

Nav.propTypes = withHistoryPropTypes();

export default Nav;
