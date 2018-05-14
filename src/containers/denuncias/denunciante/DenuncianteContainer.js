import { connect } from 'react-redux';
import { change } from 'redux-form';
import DenuncianteForm from '../../../components/denuncias/denunciante/DenuncianteForm';

const mapDispatchToProps = dispatch => ({
  changeFieldValue: (field, value) => {
    dispatch(change('formDenuncia', field, value));
  }
});

const mapStateToProps = state => ({
  formDenuncia: state.form.formDenuncia,
});

export default connect(mapStateToProps, mapDispatchToProps)(DenuncianteForm);
