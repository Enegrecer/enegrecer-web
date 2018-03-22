import React from 'react';
import PropTypes from 'prop-types';

const Topbar = props => (
  <div className="en-topbar">
    <div className="en-topbar__left">
      {props.leftComponent}
    </div>

    <div className="en-topbar__right">
      {props.rightComponent}
    </div>
  </div>
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
