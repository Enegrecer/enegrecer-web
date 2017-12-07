import PropTypes from 'prop-types';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import React, { Component } from 'react';
import NovaVitimaForm from '../vitima/NovaVitimaForm';
import { EstadoFormGroup } from '../FormGroups';


export default class NovaDenunciaForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.alterarCampo = this.alterarCampo.bind(this);
    this.adicionarVitimaEmForm = this.adicionarVitimaEmForm.bind(this);

    this.state = {
      detalhamento: '',
      dataOcorrencia: '',
      horaOcorrencia: '',
      idCategoria: '',
      endereco: '',
      estado: '',
    };
  }

  alterarCampo(event, property) {
    this.setState({ [property]: event.target.value });
  }

  handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    this.props.salvarDenuncia(this.state);
  }

  adicionarVitimaEmForm(vitima) {
    this.setState({
      vitima,
    }, () => {
      this.props.alterarDenunciaForm(this.state)
    });
  }

  renderCampoTexto(name) {
    return (
      <Input
        type="textarea"
        id={name}
        value={this.state[name]}
        onChange={event => this.alterarCampo(event, name)}
      />
    );
  }

  renderRadioButtonGroup(name, inputs) {
    return (<FormGroup check>
      { inputs.map(input =>
        <Label key={input.value} check>
          <Input
            type="radio"
            name={name}
            value={input.value}
            onChange={event => this.alterarCampo(event, name)}
          />
          {` ${input.label}`}
          <br />
        </Label>)
      }
    </FormGroup>)
  }

  detalhamentoDenunciaForm() {
    return <div>
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

      { this.renderRadioButtonGroup(
        'idCategoria',
        [{ label: 'Injúria', value: 'injuria' }, { label: 'Racismo', value: 'racismo' }]
      )}

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
  }

  render() {
    return (
      <form name="form-denuncia" id="form-nova-denuncia" onSubmit={this.handleSubmit}>
        {
          this.detalhamentoDenunciaForm()
        }

        <NovaVitimaForm alterarVitimaForm={this.adicionarVitimaEmForm} />

        <Button name="salvarDenuncia" type="submit" id="btn-salvar-denuncia" >
          Salvar
        </Button>
      </form>);
  }
}

NovaDenunciaForm.propTypes = {
  salvarDenuncia: PropTypes.func.isRequired,
  alterarDenunciaForm: PropTypes.func
};
