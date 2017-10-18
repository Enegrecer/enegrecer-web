import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { criarDenunciaRequisicao } from '../../actions';
import NovaDenunciaForm from '../../components/denuncias/NovaDenunciaForm';
import {validaCamposForm} from '../denuncias/ValidacoesDenunciaForm';

export class NovaDenunciaContainer extends Component {
  constructor(props) {
    super(props);
    this.onPressSaveButton = this.onPressSaveButton.bind(this);
    this.state = {
      denunciante: this.props.currentUserUID,
    };
  }

  onPressSaveButton(state) {

  if(validaCamposForm(state)){
        this.props.criarDenunciaRequisicao({
          ...state,
          denunciante: this.props.denunciante,
          onSuccess: push('/painel'),
        });
  }else{
    alert("Favor preencher todos os campos corretamente.");
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

const mapDispatchToProps = dispatch => bindActionCreators({
  criarDenunciaRequisicao,
}, dispatch);

const reduxNovaDenuncia = connect(
  mapDispatchToProps,
)(NovaDenunciaContainer);

export default reduxNovaDenuncia;
