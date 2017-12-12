import PropTypes from 'prop-types'
import { FormGroup, Label, Input } from 'reactstrap';
import React, { Component } from 'react';
import { EstadoFormGroup } from '../FormGroups';

export default class DetalhamentoDenuncia extends Component {
  constructor(props) {
    super(props);
    this.alterarCampo = this.alterarCampo.bind(this);

    this.state = {
      detalhamento: '',
      dataOcorrencia: '',
      horaOcorrencia: '',
      idCategoria: '',
      endereco: '',
      estado: ''
    };
  }

  alterarCampo(event, property) {
    this.setState(
      { [property]: event.target.value },
      () => this.props.handleChange(this.state)
    );
  }

  renderCampoTexto(name) {
    return (
      <Input
        type="textarea"
        id={name}
        name={name}
        value={this.state[name]}
        onChange={event => this.alterarCampo(event, name)}
      />
    );
  }

  render() {
    return (
      <div>
        <h1>Nova Denúncia</h1>

        <FormGroup>
          <Label for="detalhamento">Detalhamento*</Label>
          {this.renderCampoTexto('detalhamento')}
        </FormGroup>

        <FormGroup>
          <Label for="dataOcorrencia">Data do ocorrido</Label>
          <Input
            type="date"
            name="dataOcorrencia"
            id="dataOcorrencia"
            placeholder="date placeholder"
            onChange={event => this.alterarCampo(event, 'dataOcorrencia')}
          />
        </FormGroup>


        <FormGroup>
          <Label for="horaOcorrencia">Hora do ocorrido</Label>
          <Input
            type="time"
            name="horaOcorrencia"
            id="horaOcorrencia"
            placeholder="time placeholder"
            onChange={event => this.alterarCampo(event, 'horaOcorrencia')}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="idCategoria"
              value="injuria"
              onChange={event => this.alterarCampo(event, 'idCategoria')}
            /> {' Injúria'}

          </Label>
          <Label check>
            <Input
              type="radio"
              name="idCategoria"
              value="racismo"
              onChange={event => this.alterarCampo(event, 'idCategoria')}
            /> {' Racismo'}
          </Label>
        </FormGroup>

        <h3>Local do crime</h3>
        <br />

        <FormGroup>
          <Label for="endereco">Endereço</Label>
          {this.renderCampoTexto('endereco')}
        </FormGroup>

        <EstadoFormGroup
          id="estado"
          estado={this.state.estado}
          handleChange={this.alterarCampo}
        />
      </div>
    )
  }
}

DetalhamentoDenuncia.defaultProps = { handleChange: () => {} };

DetalhamentoDenuncia.propTypes = {
  handleChange: PropTypes.func
}

