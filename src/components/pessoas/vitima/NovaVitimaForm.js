import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
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
        <Checkbox
          label="Sou a vítima desta denúncia"
          checked={this.state.souVitima}
          onCheck={this.handleOptionChange}
        />

        <NovaPessoaForm alterarPessoaForm={this.adicionarPessoaEmVitimaForm} />
      </div>);
  }
}

NovaVitimaForm.propTypes = {
  alterarVitimaForm: PropTypes.func.isRequired,
};
