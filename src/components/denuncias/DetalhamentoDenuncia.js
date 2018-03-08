import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { cortarPalavra } from '../../utils/helpers';
import ComboEstado from './../comum/comboEstado';
import CampoTexto from './../comum/campoTexto';
import BotoesRadio from './../comum/botoesRadio';
import * as ConstantesCSS from './ConstantesCss';
import * as Tela from '../../utils/materializeCSS';


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
  componentDidMount() {
    const comboEstado = Tela.getElementoPorId('estado');
    comboEstado.on('change', (e) => {
      this.handleChange(e.target.value, 'estado');
    });
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
        <h1>Nova Denúncia</h1>

        <div className="row">
          <CampoTexto
            id={'detalhamento'}
            label={'* Detalhamento'}
            maxLen={255}
            type={'text'}
            inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
            onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 255), 'detalhamento') }}
          />
        </div>


        <div className="row">

          <BotoesRadio
            classes={'col s3'}
            id={'idCategoria'}
            onChange={e => this.handleChange(e.target.checked, 'idCategoria')}
            botoes={[{ id: 'radioInjuria', valor: 'injuria', label: 'Injúria' },
              { id: 'radioRacismo', valor: 'racismo', label: 'Racismo' }]}
          />

          <CampoTexto
            id={'dataOcorrencia'}
            label={'Data do ocorrido'}
            inputClasse={ConstantesCSS.CLASSES_INPUT}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s4`}
            maxLen={0}
            type={'date'}
            onChange={(e) => { this.handleChange(e.target.value, 'dataOcorrencia') }}
          />

          <CampoTexto
            id={'horaOcorrencia'}
            label={'Hora do ocorrido'}
            maxLen={0}
            type={'time'}
            inputClasse={ConstantesCSS.CLASSES_INPUT}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s5`}
            onChange={(e) => { this.handleChange(e.target.value, 'horaOcorrencia') }}
          />
        </div>

        <h4>Local do crime</h4>
        <div className="row">
          <CampoTexto
            id={'endereco'}
            label={'Endereço'}
            maxLen={255}
            type={'text'}
            inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
            onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 255), 'endereco') }}
          />
        </div>
        <div className="row">
          <ComboEstado id={'estado'} onChange={this.handleChange} classes="col s12" />
        </div>
      </div>
    )
  }
}

DetalhamentoDenuncia.defaultProps = { handleChange: () => { } };

DetalhamentoDenuncia.propTypes = {
  handleChange: PropTypes.func
};
