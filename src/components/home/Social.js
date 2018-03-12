import React from 'react';
import PropTypes from 'prop-types';

const Social = props => (
  <div className="en-social">
    <span className="en-social__title">siga-nos</span>
    <div className="en-social__links">
      {props.networks.map(({ title, href, icon }) => (
        <a key={icon} title={title} href={href}><i className={`fa fa-${icon}`} /></a>
      ))}
    </div>
  </div>
);

Social.propTypes = {
  networks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
};

export default Social;
