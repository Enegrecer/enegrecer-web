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
  }

  onPressSaveButton(state) {
    this.props.criarDenunciaRequisicao({
      ...state,
      denunciante: this.props.denunciante,
      onSuccess: push('/painel'),
    });
  }

  render() {
    return <NovaDenunciaForm salvarDenuncia={this.onPressSaveButton} />;
  }
}

NovaDenunciaContainer.propTypes = {
  denunciante: PropTypes.string.isRequired,
  criarDenunciaRequisicao: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  denunciante: state.auth.user.uid,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  criarDenunciaRequisicao,
}, dispatch);

const reduxNewComplaint = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NovaDenunciaContainer);

export default reduxNewComplaint;
