import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import Combobox from '../comum/combobox';
import './painel-moderador.css';
import { detalhesDenuncia } from '../../actions/visualizarDenunciaActions';

class DenunciaRow extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  componentDidMount() {
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
  }

  cliqueDetalhesDenuncia = () => {
    this.props.dispatch(detalhesDenuncia({ denuncia: this.props.denuncia }));
  };

  mudaEstado = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  versaoMobile = (agressao, denuncia) => (
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-image">{this.renderizaIconeDoCard(agressao.status)}</div>
        <div className="card-stacked">
          <div className="card-content conteudo-card">
            <div className="data-da-agressao">
              Data da agressão:
              <span> {agressao.data}</span>
            </div>
            <div className="descricao-agrecao">
              Descrição:
              <span> {agressao.descricao}</span>
            </div>
          </div>
          <div className="card-action">
            <Link
              to={`/moderador/visualizar-denuncia/${denuncia.id}`}
              className="mais-detalhes waves-effect waves-light btn"
              onClick={this.cliqueDetalhesDenuncia}
            >
              {' '}
              detalhes
            </Link>
            {agressao.status.toLowerCase() === 'classificada' ? null : (
              <button
                className="remover-denuncia btn-flat modal-trigger"
                href="#remove-denuncia-modal"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  versaoDesktop = (agressao, vitima, denuncia, expanded) => (
    <tr className="table-row">
      <td>{agressao.status}</td>
      <td>{agressao.data}</td>
      <td>{vitima.genero}</td>
      <td>{agressao.estado}</td>
      <td>{agressao.cidade}</td>
      <td>{agressao.bairro}</td>
      <td>
        <Link
          to={`/moderador/visualizar-denuncia/${denuncia.id}`}
          className="mais-detalhes"
          onClick={this.cliqueDetalhesDenuncia}
        >
          {' '}
          mais detalhes
        </Link>
      </td>
      <td>
        <input
          type="button"
          className={`botao-expandir-retrair ${expanded ? 'botao-retrair' : 'botao-expandir'}`}
          onClick={this.mudaEstado}
        />
      </td>
    </tr>
  );

  renderizaIconeDoCard = (statusDaAgressao) => {
    if (statusDaAgressao.toLowerCase() === 'classificada') {
      return (
        <div className="icone-denuncia classificada">
          <i className="medium material-icons">check</i>
        </div>
      );
    }

    return (
      <div className="icone-denuncia nao-classificada">
        <i className="medium material-icons">warning</i>
      </div>
    );
  };

  renderizaVersaoCorreta = (agressao, vitima, denuncia, expanded) => {
    if (window.innerWidth < 994) {
      return this.versaoMobile(agressao, vitima, denuncia);
    }

    return this.versaoDesktop(agressao, vitima, denuncia, expanded);
  };

  render() {
    const { expanded } = this.state;
    const { denuncia } = this.props;
    const { agressao } = denuncia;
    const { vitima, denunciante } = denuncia.pessoasEnvolvidas;

    return (
      <Fragment>
        {this.renderizaVersaoCorreta(agressao, vitima, denuncia, expanded)}
        <div id="remove-denuncia-modal" className="modal">
          <div className="modal-content">
            <h4>Gostaria de deletar a denúncia?</h4>
            <div className="texto-modal-deletar">Ao deletar a denúncia ela não fará mais parte das estatísticas.</div>
            <div className="alerta-modal-deletar">ATENÇÃO: essa ação não pode ser desfeita!</div>
          </div>
          <div className="modal-footer">
            <button className="waves-effect waves-green btn-flat">
              SIM
            </button>
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              NÃO
            </a>
          </div>
        </div>

        {expanded && (
          <Fragment>
            <tr className="descricao-denuncia-row">
              <td colSpan="2">
                <label htmlFor="nome_denunciante">Nome do Denunciante</label>
                <p id="nome_denunciante">{denunciante.nome}</p>
              </td>
              <td colSpan="1">
                <label htmlFor="email_denunciante">E-mail</label>
                <p id="email_denunciante">{denunciante.email}</p>
              </td>

              <td colSpan="1">
                <label htmlFor="telefone_denunciante">Telefone</label>
                <p id="telefone_denunciante">{denunciante.telefone}</p>
              </td>

              <td colSpan="4">
                <label htmlFor="genero_denunciante">Gênero</label>
                <p id="genero_denunciante">{denunciante.genero}</p>
              </td>
            </tr>

            <tr className="descricao-denuncia-row">
              <td colSpan="8">
                <label htmlFor="descricao_agressao">Descrição Denúncia</label>
                <p id="descricao_agressao">{agressao.descricao}</p>
              </td>
            </tr>

            <tr className="row-acoes-denuncia">
              <td colSpan="5">
                <Combobox label="Classifique a denúncia" itens={['Injúria Racial', 'Racismo']} />
              </td>
              <td style={{ textAlign: 'right' }}>
                <a className="remover-denuncia modal-trigger" href="#remove-denuncia-modal">
                  Deletar
                </a>
              </td>

              <td colSpan="2" style={{ textAlign: 'center' }}>
                <div className="waves-effect waves-light btn botao-aceitar-denuncia">
                  <input
                    type="button"
                    className="aceitar-denuncia"
                    value="aceitar denúncia"
                    onClick={() => null}
                  />
                </div>
              </td>
            </tr>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

DenunciaRow.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
  }).isRequired,
};

export default DenunciaRow;
