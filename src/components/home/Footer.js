import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <div className="en-footer">
    <div className="container">
      {props.children}
    </div>
  </div>
);

Footer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Footer;
