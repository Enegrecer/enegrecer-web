import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { criarDenunciaRequisicao } from '../../actions';
import NovaDenunciaForm from '../../components/denuncias/NovaDenunciaForm';
import { validaCamposForm } from '../../utils/validacoesCamposForm';

export class NovaDenunciaContainer extends Component {
  constructor(props) {
    super(props);
    this.onPressSaveButton = this.onPressSaveButton.bind(this);
    this.state = {
      vitima: null,
      denunciante: this.props.currentUserUID,
    };
  }

  onPressSaveButton() {

    if(validaCamposForm(this.state.vitima)){
      this.props.criarDenunciaRequisicao({
        ...this.state,
        denunciante: this.props.denunciante,
        onSuccess: push('/painel'),
      });
    } else {
      alert('Favor preencher todos os campos corretamente.');
    }

  }

  render() {
    return <NovaDenunciaForm salvarDenuncia={this.onPressSaveButton} />;
  }
}

NovaDenunciaContainer.propTypes = {
  currentUserUID: PropTypes.string.isRequired,
  criarDenunciaRequisicao: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//   denunciante: state.auth.user.uid,
// });

const mapDispatchToProps = dispatch => bindActionCreators({
  criarDenunciaRequisicao,
}, dispatch);

const reduxNovaDenuncia = connect(
  // mapStateToProps,
  mapDispatchToProps,
)(NovaDenunciaContainer);

export default reduxNovaDenuncia;
