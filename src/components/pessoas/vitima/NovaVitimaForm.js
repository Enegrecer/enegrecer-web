import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NovaPessoaForm from '../NovaPessoaForm';


export default class NovaVitimaForm extends Component {
  constructor(props) {
    super(props);

    this.adicionarPessoaEmVitimaForm = this.adicionarPessoaEmVitimaForm.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

    this.state = {
      souVitima: false,
    };
  }

  adicionarPessoaEmVitimaForm(state) {
    this.setState({
      ...this.state,
      pessoa: state });
    this.props.alterarVitimaForm(this.state);
  }

  handleOptionChange(changeEvent, isInputChecked) {
    this.setState({
      ...this.state,
      souVitima: isInputChecked,
    });
    this.props.alterarVitimaForm(this.state);
  }

  render() {
    return (
      <div>
        <NovaPessoaForm alterarPessoaForm={this.adicionarPessoaEmVitimaForm} />
      </div>);
  }
}

NovaVitimaForm.propTypes = {
  alterarVitimaForm: PropTypes.func.isRequired,
};
