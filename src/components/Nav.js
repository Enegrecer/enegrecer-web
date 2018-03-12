import React from 'react';
import { withHistoryPropTypes } from './sharedPropTypes';

const Nav = () => (
    <ul className='right hide-on-med-and-down'>
      <li><a name="sobre" href="/sobre">Sobre</a></li>
    </ul>
);

Nav.propTypes = withHistoryPropTypes();

export default Nav;
