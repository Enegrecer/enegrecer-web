import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { requestCreateComplaint } from '../../actions';
import NewComplaintForm from '../../components/complaints/NewComplaintForm';

export class NewComplaintContainer extends Component {
  constructor(props) {
    super(props);
    this.onPressSaveButton = this.onPressSaveButton.bind(this);
  }

  onPressSaveButton(state) {
    this.props.requestCreateComplaint({
      ...state,
      informer: this.props.informer,
      onSuccess: push('/painel'),
    });
  }

  render() {
    return <NewComplaintForm salvarDenuncia={this.onPressSaveButton} />;
  }
}

NewComplaintContainer.propTypes = {
  informer: PropTypes.string.isRequired,
  requestCreateComplaint: PropTypes.func.isRequired,
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
