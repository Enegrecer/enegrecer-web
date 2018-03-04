import React from 'react';
import { withHistoryPropTypes } from './sharedPropTypes';

const Nav = () => (
    <ul className='right hide-on-med-and-down'>
      <li><a name="sobre" href="/sobre">Sobre</a></li>
      <li><a name="bla" href="/bla">Bla</a></li>
      <li><a name="ta" href="/ta">Ta</a></li>
      <li><a name="kl" href="/kl">Kl</a></li>
    </ul>
);

Nav.propTypes = withHistoryPropTypes();

export default Nav;
