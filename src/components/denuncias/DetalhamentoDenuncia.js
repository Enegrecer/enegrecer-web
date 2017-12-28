import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import TextField from 'material-ui/TextField'
import * as helpers from '../../helpers';
import { EstadoFormGroup } from '../FormGroups';

export default class DetalhamentoDenuncia extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      detalhamento: '',
      dataOcorrencia: '',
      horaOcorrencia: '',
      idCategoria: '',
      endereco: '',
      estado: ''
    };
  }

  handleChange(value, property) {
    this.setState(
      { [property]: value },
      () => this.props.handleChange(this.state)
    );
  }

  renderTextField(id, label, maxLen = '', placeholder = '', type = 'text') {
    return (
      <TextField
        id={`${id}`}
        value={this.state[id]}
        type={type}
        maxLength={maxLen}
        hintText={placeholder}
        floatingLabelText={label}
        floatingLabelFixed
        autoComplete="off"
        fullWidth
        multiLine={type === 'textarea'}
        onChange={(e) => {
          const value = helpers.cortarPalavra(e.target.value, maxLen);
          this.handleChange(value, id)
        }}
      />
    )
  }

  render() {
    return (
      <div>
        <br />
        <h1>Nova Denúncia</h1>
        <br />

        { this.renderTextField('detalhamento', '* Detalhamento', '255', '', 'textarea')}

        { this.renderTextField('dataOcorrencia', 'Data do ocorrido', '', '', 'date') }

        { this.renderTextField('horaOcorrencia', 'Hora do ocorrido', '', '', 'time') }
        <br />

        <RadioButtonGroup
          name={'idCategoria'}
          onChange={e => this.handleChange(e.target.checked, 'idCategoria')}
          defaultSelected={this.state.idCategoria}
        >
          <RadioButton className="inch-button" value="injuria" label="Injúria" />
          <RadioButton className="half-button" value="racismo" label="Racismo" />
        </RadioButtonGroup>
        <br />

        <h3>Local do crime</h3>
        <br />

        { this.renderTextField('endereco', 'Endereço', '255', 'Endereco', '', 'textarea')}

        <EstadoFormGroup
          id="estado"
          value={this.state.estado}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

DetalhamentoDenuncia.defaultProps = { handleChange: () => {} };

DetalhamentoDenuncia.propTypes = {
  handleChange: PropTypes.func
};

