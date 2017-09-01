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
                    id="detalhamento"
                    value={this.state.report}
                    onChange={(e) => this.setProperty(e, 'report')}
                />
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
      this.props.onSavePress(this.state.report);
    }
  }

   NewComplaintContainer.propTypes = {
    onSavePress: PropTypes.func.isRequired
    }


  const mapStateToProps = state => {
    return {
        report: state.report
    }
};

  const mapDispatchToProps = dispatch => {
      return {
          onSavePress: (report) => {
              dispatch(requestCreateComplaint({
                  report : report
              }));
          }
      };
  };

  const reduxNewComplaint = connect(
      mapStateToProps,
      mapDispatchToProps
  )(NewComplaintContainer);


  export default reduxNewComplaint;