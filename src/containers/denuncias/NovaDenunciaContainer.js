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
      <div className="row">
        <div className="col s2 colspan-ignore-padding">
          <div className="left-menu">
            <div className="page-bar">
              <h5>Formulário de Denúncia</h5>
            </div>
            <div className="menu-items">
              <ul>
                <li>Dados do Denunciante</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col s10 colspan-ignore-padding">
          <NovaDenunciaForm
            onSubmit={this.onPressSaveButton}
            alterarDenunciaForm={this.adicionarDenunciaNoForm}
          />
        </div>
      </div>
    );
  }
}

NovaDenunciaContainer.propTypes = {
  criarDenunciaRequisicao: PropTypes.func.isRequired,
  limpaEstadoUltimaDencunciaCadastrada: PropTypes.func.isRequired,
  denunciaCadastradaComSucesso: PropTypes.bool.isRequired,
  formDenuncia: PropTypes.string
};

NovaDenunciaContainer.defaultProps = {
  criarDenunciaRequisicao: () => {},
  denunciaCadastradaComSucesso: false,
  limpaEstadoUltimaDencunciaCadastrada: () => {},
  formDenuncia: ''
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
