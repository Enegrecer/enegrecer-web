import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';
import * as Tela from '../../../utils/materializeCSS';

class Data extends Component {
  componentDidMount() {
    Tela.iniciaCampoData(this.props.id, this.props.onChange);
    const campoData = Tela.getElementoPorId(this.props.id);
    campoData.on('change', (e) => {
      this.props.onChange(e.target.value, this.props.estado);
    });
  }

  render() {
    return (
      <CampoTexto
        id={this.props.id}
        label={this.props.label}
        inputClasse={'datepicker'}
        divClasse={this.props.divClasse}
        maxLen={0}
        type={'text'}
        placeholder="Data"
        onChange={this.props.onChange}
      />
    );
  }
}

Data.propTypes = {
  id: PropTypes.string,
  divClasse: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  estado: PropTypes.string
};

Data.defaultProps = {
  id: '',
  divClasse: '',
  onChange: () => {},
  label: '',
  estado: ''
};


export default Data;

