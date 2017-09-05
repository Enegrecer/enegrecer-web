import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestCreateComplaint } from '../../actions';
import TextField from 'material-ui/TextField';
import { push } from 'react-router-redux';

export class NewComplaintContainer extends Component {
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
    this.props.requestCreateComplaint({
      ...this.state,
      informer: this.props.informer,
      onSuccess: push('/painel'),
    });
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
      <div>
        <h1>Nova Denúncia</h1>
        <label>Detalhamento:</label>

        <TextField
          id="report"
          value={this.state.report}
          onChange={e => this.setProperty(e, 'report')}
        />

        <label>Data e Hora do ocorrido:</label>
        <TextField
          id="occuranceDate"
          value={this.state.ocurrenceDate}
          onChange={e => this.setProperty(e, 'ocurrenceDate')}
        />

        <label>Categoria (injury ou racism)</label>
        <TextField
          id="categoryId"
          value={this.state.categoryId}
          onChange={e => this.setProperty(e, 'categoryId')}
        />

        <h3>Local do crime</h3>
        <br />

        <label>Endereço:</label>
        <TextField
          id="address"
          value={this.state.address}
          onChange={e => this.setProperty(e, 'address')}
        />

        <br />

        <label>Latitude:</label>
        <TextField
          id="latitude"
          value={this.state.latitude}
          onChange={e => this.setProperty(e, 'latitude')}
        />
        <br />


        <label>Longitude:</label>
        <TextField
          id="longitude"
          value={this.state.longitude}
          onChange={e => this.setProperty(e, 'longitude')}
        />
        <br />

        <button onClick={() => this.onPressSaveButton()}>
              Salvar
        </button>
      </div>);
  }
}

NewComplaintContainer.propTypes = {
  requestCreateComplaint: PropTypes.func.isRequired,
  informer: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  informer: state.auth.user.uid,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  requestCreateComplaint,
}, dispatch);

const reduxNewComplaint = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewComplaintContainer);

export default reduxNewComplaint;
