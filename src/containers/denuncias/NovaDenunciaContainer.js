import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { criarDenunciaRequisicao } from '../../actions/criarDenunciaActions';
import NovaDenunciaForm from '../../components/denuncias/NovaDenunciaForm';
import { validaDenuncia } from './validaDenuncia';


export class NovaDenunciaContainer extends Component {
  constructor(props) {
    super(props);
    this.onPressSaveButton = this.onPressSaveButton.bind(this);
    this.adicionarDenunciaNoForm = this.adicionarDenunciaNoForm.bind(this);
    this.state = {
      vitima: null,
      denunciante: null,
      testemunha: null
    };
  }
  
  componentDidMount() {
    Tela.iniciaCamposMaterialize();
  }
  onPressSaveButton() {
    const mensagemError = validaDenuncia(this.state.vitima);
    if (mensagemError === undefined) {
      this.props.criarDenunciaRequisicao({
        ...this.state,
        onSuccess: push('/'),
      });
    } else {
      alert(mensagemError);
    }
  }


  adicionarDenunciaNoForm(denuncia) {
    this.setState({
      ...denuncia,
    })
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
  criarDenunciaRequisicao: PropTypes.func.isRequired,
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
