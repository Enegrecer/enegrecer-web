import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { criarDenunciaRequisicao } from '../../actions';
import NovaDenunciaForm from '../../components/denuncias/NovaDenunciaForm';
import { validaCamposForm, verificarCamposObrigatoriosVazios } from '../../utils/validacoesCamposForm';

export class NovaDenunciaContainer extends Component {
  constructor(props) {
    super(props);
    this.onPressSaveButton = this.onPressSaveButton.bind(this);
    this.adicionarDenunciaNoForm = this.adicionarDenunciaNoForm.bind(this);
    this.state = {
      vitima: null,
      denunciante: null,
      testemunha: null,
      userId: this.props.currentUserUID,
    };
  }

  onPressSaveButton() {
    if (validaCamposForm(this.state.vitima, ['caracteristicasVitima']) &&
      verificarCamposObrigatoriosVazios(this.state.testemunha, ['caracteristicasTestemunha'])) {
      this.props.criarDenunciaRequisicao({
        ...this.state,
        onSuccess: () => { this.props.history.push('/') },
      });
    }
  }

  adicionarDenunciaNoForm(denuncia) {
    this.setState({
      ...denuncia,
    }, () => {
      // console.clear()
      console.log(this.state)
    });
  }

  render() {
    return (
      <NovaDenunciaForm
        salvarDenuncia={this.onPressSaveButton}
        alterarDenunciaForm={this.adicionarDenunciaNoForm}
      />
    );
  }
}

NovaDenunciaContainer.propTypes = {
  currentUserUID: PropTypes.string.isRequired,
  criarDenunciaRequisicao: PropTypes.func.isRequired,
  history: PropTypes.node,
};

const mapStateToProps = state => ({
  denunciante: state.auth ? state.auth.user.uid : undefined,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  criarDenunciaRequisicao,
}, dispatch);

const reduxNovaDenuncia = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NovaDenunciaContainer);

export default reduxNovaDenuncia;
