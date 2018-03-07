import React from 'react'
import PropTypes from 'prop-types'

export default function BotoesRadio(props) {
  return (
    <div className={props.classes}>
      { props.botoes.map(
        botaoRadio =>
          (<p key={botaoRadio.id}>
            <input name={props.id} type="radio" id={botaoRadio.id} />
            <label htmlFor={botaoRadio.id}>{botaoRadio.valor}</label>
          </p>
          )
      )
      }
    </div>
  )
}

BotoesRadio.propTypes = {
  classes: PropTypes.string,
  id: PropTypes.string,
  botoes: PropTypes.arrayOf(PropTypes.object)
};

BotoesRadio.defaultProps = {
  classes: '',
  id: '',
  botoes: []
};
