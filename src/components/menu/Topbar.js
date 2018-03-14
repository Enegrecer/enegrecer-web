import React from 'react';
import PropTypes from 'prop-types';

const Topbar = props => (

    <nav className="black">
      <div className="nav-wrapper">
        {props.leftComponent}
        {props.rightComponent}
      </div>
    </nav>

);

Topbar.defaultProps = {
  leftComponent: undefined,
  rightComponent: undefined,
};

Topbar.propTypes = {
  leftComponent: PropTypes.element,
  rightComponent: PropTypes.element,
};

export default Topbar;
