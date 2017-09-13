import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import NovaTestemunha from './NovaTestemunha';

export default class TestemunhaBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: true,
    };
  }

  render() {
    return (
      <div>
        <h3>Testemunhas</h3>

        <NovaTestemunha />
      </div>);
  }
}
