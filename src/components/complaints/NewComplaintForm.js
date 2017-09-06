import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class NewComplaintForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: '',
      ocurrenceDate: '',
      categoryId: '',
      address: '',
      latitude: '',
      longitude: '',
    };
  }

  onPressSaveButton() {
    this.props.salvarDenuncia(this.state);
  }

  setProperty(event, property) {
    const currentState = this.state;
    this.setState({
      ...currentState,
      [property]: event.target.value,
    });
  }

  render() {
    return (
      <div id="form-nova-denuncia">
        <h1>Nova Denúncia</h1>
        <label htmlFor="report">Detalhamento:</label>

        <TextField
          id="report"
          value={this.state.report}
          onChange={e => this.setProperty(e, 'report')}
        />

        <label htmlFor="ocurrenceDate">Data e Hora do ocorrido:</label>
        <TextField
          id="ocurrenceDate"
          value={this.state.ocurrenceDate}
          onChange={e => this.setProperty(e, 'ocurrenceDate')}
        />

        <label htmlFor="categoryId">Categoria (injury ou racism)</label>
        <TextField
          id="categoryId"
          value={this.state.categoryId}
          onChange={e => this.setProperty(e, 'categoryId')}
        />

        <h3>Local do crime</h3>
        <br />

        <label htmlFor="address">Endereço:</label>
        <TextField
          id="address"
          value={this.state.address}
          onChange={e => this.setProperty(e, 'address')}
        />

        <br />

        <label htmlFor="latitude">Latitude:</label>
        <TextField
          id="latitude"
          value={this.state.latitude}
          onChange={e => this.setProperty(e, 'latitude')}
        />
        <br />


        <label htmlFor="longitude">Longitude:</label>
        <TextField
          id="longitude"
          value={this.state.longitude}
          onChange={e => this.setProperty(e, 'longitude')}
        />
        <br />

        <button id="btn-salvar-denuncia" onClick={() => this.onPressSaveButton()}>
              Salvar
        </button>
      </div>);
  }
}

NewComplaintForm.propTypes = {
  salvarDenuncia: PropTypes.func.isRequired,
};
