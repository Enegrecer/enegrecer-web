import React from 'react';
import PropTypes from 'prop-types';

const Botao = (props) => {
  function getClassName() {
    return `
      en-btn
      ${props.outline && 'en-btn--outline'}
      ${props.primary && 'en-btn--primary'}
      ${props.colored && 'en-btn--colored'}
    `;
  }

  return (
    <a
      onClick={props.onClick}
      className={getClassName(props)}
      role="button"
      tabIndex="0"
    >
      {props.children}
    </a>
  );
};

Botao.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  outline: PropTypes.bool,
  primary: PropTypes.bool,
  colored: PropTypes.bool,
};

Botao.defaultProps = {
  outline: false,
  primary: false,
  colored: false,
};

export default Botao;
