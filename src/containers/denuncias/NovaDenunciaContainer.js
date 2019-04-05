import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { criarDenunciaRequisicao, limpaEstadoUltimaDencunciaCadastrada } from '../../actions/criarDenunciaActions';
import NovaDenunciaForm from '../../components/denuncias/NovaDenunciaForm';

class NovaDenunciaContainer extends React.Component {
  constructor(props) {
    super(props);
    this.submeteFormulario = this.submeteFormulario.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    if (this.props.denunciaCadastradaComSucesso) {
      this.props.limpaEstadoUltimaDencunciaCadastrada();
    }
  }

  submeteFormulario() {
    this.props.criarDenunciaRequisicao(this.props.formDenuncia.values);
  }

  render() {
    if (this.props.denunciaCadastradaComSucesso) {
      return <Redirect to="/depois-denuncia" />;
    }
    return (
      <div className="row form-denuncia-container">
        <div className="col l2 no-padding side-menu-container">
          <div className="form-title-bar side-menu">
            <span>Formulário de</span>
            <div>
              <span>Denúncia</span>
              <span className="red-bar" />
            </div>
          </div>
          <div className="menu-items">
            <ul>
              <li>
                <a href="#Dados do Denunciante"> Dados do <br /> Denunciante</a>
              </li>
              <li>
                <a href="#Dados da Vítima">Dados da <br /> Vítima</a>
              </li>
              <li>
                <a href="#Informações Legais"> Informações <br /> Legais</a>
              </li>
              <li>
                <a href="#Dados do Agressor">Dados do <br /> Agressor</a>
              </li>
              <li>
                <a href="#Descrição da Agressão">Descrição da <br />Agressão</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col s12 m12 l10 no-padding">
          <div className="form-title-bar" />
          <div className="form-sections-container">
            <NovaDenunciaForm onSubmit={this.submeteFormulario} />
          </div>
        </div>
      </div>
    );
  }
}

NovaDenunciaContainer.propTypes = {
  criarDenunciaRequisicao: PropTypes.func.isRequired,
  limpaEstadoUltimaDencunciaCadastrada: PropTypes.func.isRequired,
  denunciaCadastradaComSucesso: PropTypes.bool.isRequired,
  formDenuncia: PropTypes.shape({
    registeredFields: PropTypes.object,
    fields: PropTypes.object,
    values: PropTypes.object,
    anyTouched: PropTypes.bool
  })
};

NovaDenunciaContainer.defaultProps = {
  // criarDenunciaRequisicao: () => {},
  // denunciaCadastradaComSucesso: false,
  // limpaEstadoUltimaDencunciaCadastrada: () => {},
  formDenuncia: {},
};

const mapStateToProps = state => ({
  denunciante: state.auth ? state.auth.user.uid : undefined,
  denunciaCadastradaComSucesso: state.denunciaComSucessoReducer.denunciaCadastradaComSucesso,
  formDenuncia: state.form.formDenuncia,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  criarDenunciaRequisicao,
  limpaEstadoUltimaDencunciaCadastrada
}, dispatch);

const reduxNovaDenuncia = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NovaDenunciaContainer);

export default reduxNovaDenuncia;
