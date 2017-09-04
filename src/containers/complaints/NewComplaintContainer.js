import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCreateComplaint } from '../../actions';
import TextField from 'material-ui/TextField';

export class NewComplaintContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
          report: ''
      };
  }

    render() {
      return  (
          <div> 
          <h1>Nova Denúncia</h1>
             <label>Detalhamento:</label>

             <TextField
                    id="report"
                    value={this.state.report}
                    onChange={(e) => this.setProperty(e, 'report')}
                />

            <label>Data e Hora do ocorrido:</label>
            <TextField
                    id="occuranceDate"
                    value={this.state.ocurranceDate}
                    onChange={(e) => this.setProperty(e, 'ocurranceDate')}
                />

            <label>Categoria (injury ou racism)</label>
            <TextField
                    id="categoryId"
                    value={this.state.categoryId}
                    onChange={(e) => this.setProperty(e, 'categoryId')}
                />

             <h3>Local do crime</h3>
            <br />

            <label>Endereço:</label>
            <TextField
                    id="address"
                    value={this.state.address}
                    onChange={(e) => this.setProperty(e, 'address')}
                />
            
            <br />

            <label>Latitude:</label>
            <TextField
                    id="latitude"
                    value={this.state.latitude}
                    onChange={(e) => this.setProperty(e, 'latitude')}
                />
            <br />


            <label>Longitude:</label>
            <TextField
                    id="longitude"
                    value={this.state.longitude}
                    onChange={(e) => this.setProperty(e, 'longitude')}
                />
            <br />

             <button onClick={() => this.onPressSaveButton()}>
              Salvar
            </button>
          </div>)
          
    }


    setProperty(event, property) {
        const currentState = this.state;
        this.setState({
            ...currentState,
            [property]: event.target.value
        })
    }

    onPressSaveButton() {
      console.log(this.props.onSavePress(this.state));
    }
  }

   NewComplaintContainer.propTypes = {
    onSavePress: PropTypes.func.isRequired
    }


  const mapStateToProps = state => {
    return {
        report: state.report,
        latitude: state.latitude,
        longitude: state.longitude,
        address: state.address,
        ocurranceDate: state.ocurranceDate,
        categoryId: state.categoryId
    }
};

  const mapDispatchToProps = dispatch => {
      return {
          onSavePress: (complaint) => {
              return dispatch(requestCreateComplaint({
                report: complaint.report,
                latitude: complaint.latitude,
                longitude: complaint.longitude,
                address: complaint.address,
                ocurranceDate: complaint.ocurranceDate,
                categoryId: complaint.categoryId
              }));
          }
      };
  };

  const reduxNewComplaint = connect(
      mapStateToProps,
      mapDispatchToProps
  )(NewComplaintContainer);


  export default reduxNewComplaint;