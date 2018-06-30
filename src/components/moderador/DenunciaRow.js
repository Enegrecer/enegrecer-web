import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Combobox from '../comum/combobox';

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
    const { agressao } = denuncia;
    const { denunciante } = denuncia;

    return (
      <Fragment>
        <tr className="table-row">
          <td>{agressao.status}</td>
          <td>{agressao.data}</td>
          <td>{denuncia.vitima.genero}</td>
          <td>{agressao.estado}</td>
          <td>{agressao.cidade}</td>
          <td>{agressao.bairro}</td>
          <td>
            <input type="button" value="mais detalhes" />
            <input type="button" value={expanded ? 'menos' : 'mais'} onClick={this.mudaEstado} />
          </td>
        </tr>
        {expanded && (
          <Fragment>
            <tr>
              <td>
                <label>Nome do Denunciante</label>
                <p>{denunciante.nome}</p>
              </td>
              <td>
                <label>E-mail</label>
                <p>{denunciante.email}</p>
              </td>

              <td>
                <label>Telefone</label>
                <p>{denunciante.telefone}</p>
              </td>

              <td>
                <label>Gênero</label>
                <p>{denunciante.genero}</p>
              </td>
            </tr>

            <tr>
              <td colSpan="7">
                <label>Descrição Denúncia</label>
                <p>{agressao.descricao}</p>
              </td>
            </tr>

            <tr>
              <td colSpan="7">
                <hr />
              </td>
            </tr>

            <tr>
              <td colSpan="5">
                <Combobox
                  itens={['Injúria Racial', 'Racismo']}
                />
              </td>
              <td>
                <input type="button" value="Deletar" />
              </td>

              <td>
                <input type="button" value="aceitar denúncia" onClick={this.aceitarDenuncia} />
              </td>
            </tr>

          </Fragment>
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
