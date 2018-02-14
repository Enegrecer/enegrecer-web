import PropTypes from 'prop-types'
import React, { Component } from 'react';
import * as helpers from '../../helpers';
import { EstadoFormGroup, CampoTexto, RadioGrupoBotoes } from '../FormGroups';

export default class DetalhamentoDenuncia extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onChangeCampoTexto = this.onChangeCampoTexto.bind(this);

    this.state = {
      detalhamento: '',
      dataOcorrencia: '',
      horaOcorrencia: '',
      idCategoria: '',
      endereco: '',
      estado: ''
    };
  }


  onChangeCampoTexto(id, e, maxLen) {
    const value = helpers.cortarPalavra(e.target.value, maxLen);
    this.handleChange(value, id)
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
          onChange={e => this.onChangeCampoTexto('detalhamento', e, 255)}
        />
        <CampoTexto id={'dataOcorrencia'} label={'Data do ocorrido'} maxLen={255} placeholder={''} type={'date'} />
        <CampoTexto id={'horaOcorrencia'} label={'Hora do ocorrido'} maxLen={255} placeholder={''} type={'time'} />
        <br />

        <RadioGrupoBotoes
          id={'idCategoria'}
          onChange={e => this.handleChange(e.target.checked, 'idCategoria')}
          botoes={[{ valor: 'injuria', label: 'Injúria' },
            { valor: 'racismo', label: 'Racismo' }]}
        />
        <h4>Local do crime</h4>

        <CampoTexto
          id={'endereco'}
          label={'Endereço'}
          maxLen={255}
          type={'textarea'}
          onChange={e => this.onChangeCampoTexto('endereco', e, 255)}
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

