import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { criarDenunciaRequisicao } from '../../actions';
import NovaDenunciaForm from '../../components/denuncias/NovaDenunciaForm';

export class NovaDenunciaContainer extends Component {
  constructor(props) {
    super(props);
    this.onPressSaveButton = this.onPressSaveButton.bind(this);
    this.state = {
      denunciante: this.props.currentUserUID,
    };
  }

  onPressSaveButton(state) {
    this.props.criarDenunciaRequisicao({
      ...state,
      denunciante: this.state.denunciante,
      onSuccess: push('/painel'),
    });
    console.log(state);
  }

  render() {
    return <NovaDenunciaForm salvarDenuncia={this.onPressSaveButton} />;
  }
}

NovaDenunciaContainer.propTypes = {
  currentUserUID: PropTypes.string.isRequired,
  criarDenunciaRequisicao: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  criarDenunciaRequisicao,
}, dispatch);

const reduxNovaDenuncia = connect(
  mapDispatchToProps,
)(NovaDenunciaContainer);

export default reduxNovaDenuncia;
