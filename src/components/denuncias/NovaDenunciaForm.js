import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NovaVitimaForm from './vitima/NovaVitimaForm';
import NovaTestemunhaForm from './testemunha/NovaTestemunhaForm';
import DetalhamentoDenuncia from './DetalhamentoDenuncia';
import { adicionaFormAoRedux } from './../comum/formControle';
import './denuncia.css';

const FormDenuncia = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <DetalhamentoDenuncia />
      <NovaVitimaForm />
      <NovaTestemunhaForm />
      <br />
      <button className="btn waves-effect waves-light" type="submit" name="action">
          Enviar Denúncia
      </button>
    </form>
  )
}
export default adicionaFormAoRedux(FormDenuncia, 'formDenuncia');


/*
class NovaDenunciaForm extends Component {

  handleChange(dados) {
    this.setState({
      ...dados,
    }, () => {
      this.props.alterarDenunciaForm(this.state)
    });
  }

  handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    this.props.salvarDenuncia();
  }

  render() {
    return (

      <form
        name="form-denuncia"
        id="form-nova-denuncia"
        onSubmit={event => this.handleSubmit(event)}
      >

      <div className="row">
        <CampoTexto
          id={'detalhamento'}
          label={'* Detalhamento'}
          maxLen={255}
          type={'text'}
          inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
          divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
          state={'detalhamento'}
          validacoes={[required]}
        />
      </div>

        <br />
        <button className="btn waves-effect waves-light" type="submit" name="action">
            Enviar Denúncia
        </button>
      </form>
    );
  }
}

NovaDenunciaForm.defaultProps = {
  alterarDenunciaForm: () => {}
};

NovaDenunciaForm.propTypes = {
  salvarDenuncia: PropTypes.func.isRequired,
  alterarDenunciaForm: PropTypes.func
};
*/

