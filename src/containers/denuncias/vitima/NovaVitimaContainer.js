import { connect } from 'react-redux';
import { change } from 'redux-form';
import NovaVitimaForm from '../../../components/denuncias/vitima/NovaVitimaForm';

const mapDispatchToProps = dispatch => ({
  changeFieldValue: (field, value) => {
    dispatch(change('formDenuncia', field, value));
  }
});

const mapStateToProps = state => ({
  formDenuncia: state.form.formDenuncia,
});

export default connect(mapStateToProps, mapDispatchToProps)(NovaVitimaForm);
