import React from 'react';
import PropTypes from 'prop-types';

const botoesRadio = ({ classes, botoes, id }) => (
  <div className={classes}>
    { botoes.map(
      botaoRadio =>
        (<p key={botaoRadio.id}>
          <input name={id} type="radio" id={botaoRadio.id} />
          <label htmlFor={botaoRadio.id}>{botaoRadio.valor}</label>
        </p>
        )
    )
    }
  </div>
);

botoesRadio.propTypes = {
  classes: PropTypes.string,
  id: PropTypes.string,
  botoes: PropTypes.arrayOf(PropTypes.object)
};

botoesRadio.defaultProps = {
  classes: '',
  id: '',
  botoes: []
};

export default botoesRadio;
