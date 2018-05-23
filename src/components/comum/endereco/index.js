import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Combobox from '../combobox';
import { listaCidades } from './cidades';
import Estado from '../comboboxEstado';

class Endereco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cidades: []
    };
    this.listaCidades = this.listaCidades.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.estadoInicial !== this.props.estadoInicial) {
      this.listaCidades(nextProps.estadoInicial);
    }
  }

  listaCidades(estado) {
    const cidades = listaCidades(estado);
    this.setState({ cidades });
  }

  render() {
    const { estadoState, cidadeState } = this.props;
    return (
      <div className="row">
        <Estado
          onChange={this.listaCidades}
          id={estadoState}
          state={estadoState}
          divClasse="col s6"
        />
        <Combobox
          id={cidadeState}
          state={cidadeState}
          itens={this.state.cidades}
          divClasse="col s6"
          label="Cidade"
        />
      </div>
    );
  }
}

Endereco.propTypes = {
  estadoState: PropTypes.string.isRequired,
  cidadeState: PropTypes.string.isRequired,
  estadoInicial: PropTypes.string
};

Endereco.defaultProps = {
  estadoInicial: ''
};

export default Endereco;
