import PropTypes from 'prop-types';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import React, { Component } from 'react';
import NovaVitimaForm from '../vitima/NovaVitimaForm';


export default class NovaDenunciaForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.alterarCampo.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.adicionarVitimaEmForm = this.adicionarVitimaEmForm.bind(this);
    this.alterarDataOcorrencia = this.alterarDataOcorrencia.bind(this);
    this.alterarHoraOcorrencia = this.alterarHoraOcorrencia.bind(this);
    this.alterarEstado = this.alterarEstado.bind(this);

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

  alterarDataOcorrencia(event){
    this.setState({
      dataOcorrencia: event.target.value,
    });
  }

  alterarHoraOcorrencia(event){
    this.setState({
      horaOcorrencia: event.target.value,
    });
  }

  handleSubmit(event) {
    if(event){
      event.preventDefault();
    }
    this.props.salvarDenuncia(this.state);
  }

  handleOptionChange(changeEvent) {
    this.setState({
      idCategoria: changeEvent.target.value,
    });
  }

  alterarEstado(event) {
    this.setState({
      estado: event.target.value,
    });
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

  renderRadioButton(name, label) {
    return (
      <Input
        type="radio"
        value={name}
        label={label}
        checked={this.state.idCategoria === { name }}
      />
    );
  }

  renderEstadosSelection() {
    const stados = ['AC',
      'AL','AM','AP','BA','CE','DF','ES','GO','MA','MG','MS','MT','PA',
      'PB','PE','PI','PR','RJ','RN','PR','RJ','RR','SC','SE','SP','TO']

    return (
      <FormGroup>
        <Label for="estado">Estado</Label>
        <Input type="select"
          name="estado"
          id="estado"
          onChange={this.alterarEstado}
          value={this.state.estado}
        >
          <option value={''}>Escolha uma opção</option>
          {
            stados.map((estado, key) => <option key={key} value={estado}>{estado}</option>)
          }
        </Input>
      </FormGroup>
    )
  }

  novaDenunciaForm() {
    return <div>
      <h1>Nova Denúncia</h1>

      <FormGroup>
        <Label for="detalhamento">Detalhamento*</Label>
        {this.renderCampoTexto('detalhamento')}
      </FormGroup>

      <FormGroup>
        <Label for="dataOcorrencia">Data do ocorrido</Label>
        <Input type="date"
          name="dataOcorrencia"
          id="dataOcorrencia"
          placeholder="date placeholder"
          onChange={this.alterarDataOcorrencia}
        />
      </FormGroup>


      <FormGroup>
        <Label for="horaOcorrencia">Hora do ocorrido</Label>
        <Input type="time"
          name="horaOcorrencia"
          id="horaOcorrencia"
          placeholder="time placeholder"
          onChange={this.alterarHoraOcorrencia}
        />
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type="radio" name="idCategoria" value='injuria' onChange={this.handleOptionChange} />{' '}
          Injúria
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="idCategoria" value='racismo' onChange={this.handleOptionChange} />{' '}
          Racismo
        </Label>
      </FormGroup>

      <h3>Local do crime</h3>
      <br />

      <FormGroup>
        <Label for="endereco">Endereço</Label>
        {this.renderCampoTexto('endereco')}
      </FormGroup>

      { this.renderEstadosSelection() }
    </div>
  }

  render() {
    return (
      <form name="form-denuncia" id="form-nova-denuncia" onSubmit={this.handleSubmit}>
        {
          this.novaDenunciaForm()
        }

        <NovaVitimaForm alterarVitimaForm={this.adicionarVitimaEmForm} />

        <Button name="salvarDenuncia" type="submit" id="btn-salvar-denuncia">
          Salvar
        </Button>
      </form>);
  }
}

NovaDenunciaForm.propTypes = {
  salvarDenuncia: PropTypes.func.isRequired,
  alterarDenunciaForm: PropTypes.func
};
