import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './painel-moderador.css';

class DenunciaRow extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  mudaEstado = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { expanded } = this.state;
    const { denuncia } = this.props;
    return (
      <Fragment>
        <tr className="table-row">
          <td>{denuncia.agressao.status}</td>
          <td>{denuncia.agressao.data}</td>
          <td>{denuncia.vitima.genero}</td>
          <td>{denuncia.agressao.estado}</td>
          <td>{denuncia.agressao.cidade}</td>
          <td>{denuncia.agressao.bairro}</td>
          <td>
            <input type="button" value="mais detalhes" onClick={this.mudaEstado} />
          </td>
        </tr>
        {expanded && (
          <tr>
            <td>EXPANDED</td>
          </tr>
        )}
      </Fragment>
    );
  }
}

DenunciaRow.propTypes = {
  denuncia: PropTypes.shape({
    agressao: PropTypes.shape({
      status: PropTypes.string,
      data: PropTypes.string,
      estado: PropTypes.string,
      cidade: PropTypes.string,
      bairro: PropTypes.string
    }),
    vitima: PropTypes.shape({
      genero: PropTypes.string
    })
  }).isRequired
};

export default DenunciaRow;
