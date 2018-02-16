import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { cortarPalavra } from '../../helpers';
import { EstadoFormGroup, CampoTexto, RadioGrupoBotoes } from '../FormGroups';

export default class DetalhamentoDenuncia extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      detalhamento: '',
      dataOcorrencia: '',
      horaOcorrencia: '',
      idCategoria: '',
      endereco: '',
      estado: ''
    };
  }

  handleChange(value, property) {
    this.setState(
      { [property]: value },
      () => this.props.handleChange(this.state)
    );
  }

  render() {
    return (
      <div>
        <br />
        <h1>Nova Denúncia</h1>
        <br />
        <CampoTexto
          id={'detalhamento'}
          label={'* Detalhamento'}
          maxLen={255}
          type={'textarea'}
          onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 255), 'detalhamento') }}
        />
        <CampoTexto
          id={'dataOcorrencia'}
          label={'Data do ocorrido'}
          maxLen={0}
          type={'date'}
          onChange={(e) => { this.handleChange(e.target.value, 'dataOcorrencia') }}
        />
        <CampoTexto
          id={'horaOcorrencia'}
          label={'Hora do ocorrido'}
          maxLen={0}
          type={'time'}
          onChange={(e) => { this.handleChange(e.target.value, 'horaOcorrencia') }}
        />
        <br />

        <RadioGrupoBotoes
          id={'idCategoria'}
          onChange={e => this.handleChange(e.target.checked, 'idCategoria')}
          botoes={[{ id:'radioInjuria', valor: 'injuria', label: 'Injúria' },
                   { id:'radioRacismo', valor: 'racismo', label: 'Racismo' }]}
        />
        <h4>Local do crime</h4>

        <CampoTexto
          id={'endereco'}
          label={'Endereço'}
          maxLen={255}
          type={'textarea'}
          onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 255), 'endereco') }}
        />

        <EstadoFormGroup
          id="estado"
          value={this.state.estado}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

DetalhamentoDenuncia.defaultProps = { handleChange: () => { } };

DetalhamentoDenuncia.propTypes = {
  handleChange: PropTypes.func
};

