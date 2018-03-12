import React from 'react';
import Logo from './../Logo';
import Nav from './../Nav';
import Topbar from './../Topbar';
import './menu.css';

const Menu = props => (
    <Topbar
        leftComponent={<Logo />}
        rightComponent={<Nav history={props.history} />} // eslint-disable-line react/prop-types
    />
);

export default Menu;
