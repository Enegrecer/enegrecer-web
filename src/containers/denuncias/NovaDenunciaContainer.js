import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  criarDenunciaRequisicao, limpaEstadoUltimaDencunciaCadastrada
} from '../../actions/criarDenunciaActions';
import NovaDenunciaForm from '../../components/denuncias/NovaDenunciaForm';

class NovaDenunciaContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onPressSaveButton = this.onPressSaveButton.bind(this);
  }
  componentWillUnmount() {
    if (this.props.denunciaCadastradaComSucesso) {
      this.props.limpaEstadoUltimaDencunciaCadastrada();
    }
  }

  onPressSaveButton() {
    this.props.criarDenunciaRequisicao(
      this.props.formDenuncia.values
    );
  }

  render() {
    if (this.props.denunciaCadastradaComSucesso) {
      return <Redirect to="/painel/proximosPassos" />;
    }
    return (
      <div className="row form-denuncia-container">
        <div className="col s2 no-padding side-menu-container">
          <div className="form-title-bar side-menu">
            <span>Formulário de</span>
            <div>
              <span>denúncia</span>
              <span className="red-bar" />
            </div>
          </div>
          <div className="menu-items">
            <ul>
              <li>Dados do <br /> denunciante</li>
              <li>Dados da <br /> vítima</li>
              <li>Informações <br /> Legais</li>
              <li>Dados do <br /> agressor</li>
              <li>Descrição da <br />agressão</li>
            </ul>
          </div>
        </div>

        <div className="column col s10 no-padding">
          <div className="form-title-bar" />
          <div className="form-sections-container">
            <NovaDenunciaForm />
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
  formDenuncia: PropTypes.string.isRequired
};

NovaDenunciaContainer.defaultProps = {
  criarDenunciaRequisicao: () => {},
  denunciaCadastradaComSucesso: false,
  limpaEstadoUltimaDencunciaCadastrada: () => {},
  formDenuncia: {}
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
