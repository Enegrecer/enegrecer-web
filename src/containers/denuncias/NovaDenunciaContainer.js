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
      <div className="container">
        <NovaDenunciaForm
          onSubmit={this.onPressSaveButton}
          alterarDenunciaForm={this.adicionarDenunciaNoForm}
        />
      </div>
    );
  }
}

NovaDenunciaContainer.propTypes = {
  criarDenunciaRequisicao: PropTypes.func.isRequired,
  limpaEstadoUltimaDencunciaCadastrada: PropTypes.func.isRequired,
  denunciaCadastradaComSucesso: PropTypes.bool.isRequired
};

NovaDenunciaContainer.defaultProps = {
  criarDenunciaRequisicao: () => {},
  denunciaCadastradaComSucesso: false,
  limpaEstadoUltimaDencunciaCadastrada: () => {},
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
