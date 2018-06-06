import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listaDenuncias } from '../../actions/listarDenunciasActions';
import DenunciaRow from './DenunciaRow';

class PainelModerador extends Component {
  componentDidMount() {
    this.props.listaDenuncias();
  }

  render() {
    const { denuncias } = this.props;

    return (
      <div style={{ background: 'white' }}>
        <table>
          <thead>
            <tr>
              <th>Classificação</th>
              <th>Data</th>
              <th>Gênero</th>
              <th>Estado</th>
              <th>Cidade</th>
              <th>Bairro</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {denuncias.map(denuncia => (
              <DenunciaRow denuncia={denuncia} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

PainelModerador.propTypes = {
  listaDenuncias: PropTypes.func.isRequired,
  denuncias: PropTypes.arrayOf.isRequired

};

const mapDispatchToProps = dispatch => bindActionCreators({
  listaDenuncias,
}, dispatch);

function mapStateToProps(state) {
  return {
    denuncias: Object.keys(state.listaDenunciaReducer.denuncias)
      .map(key => state.listaDenunciaReducer.denuncias[key])
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PainelModerador);
