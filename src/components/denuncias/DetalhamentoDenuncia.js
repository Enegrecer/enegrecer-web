import PropTypes from 'prop-types'
import React, { Component } from 'react';
import $ from 'jquery';
import { cortarPalavra } from '../../helpers';
import { EstadoFormGroup, CampoTexto, RadioGrupoBotoes, Combobox } from '../FormGroups';
import * as ConstantesCSS from '../layouts/ConstantesCss'


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
    $(document).ready(function() {
      $('select').material_select();
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
        <br />
        <h1>Nova Denúncia</h1>
        <br />
       

      <div className="row">
        <CampoTexto
          id={'detalhamento'}
          label={'* Detalhamento'}
          maxLen={255}
          type={'text'}
          inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
          divClasse={ConstantesCSS.CLASSES_DIV_INPUT + ' col s6'}
          onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 255), 'detalhamento') }}
        />
      </div>  
      
      <div className="row">

        <RadioGrupoBotoes
        id={'idCategoria'}
        onChange={e => this.handleChange(e.target.checked, 'idCategoria')}
        botoes={[{ id: 'radioInjuria', valor: 'injuria', label: 'Injúria' },
          { id: 'radioRacismo', valor: 'racismo', label: 'Racismo' }]}
        />
         
        <CampoTexto
          id={'dataOcorrencia'}
          label={'Data do ocorrido'}
          inputClasse={ConstantesCSS.CLASSES_INPUT}
          divClasse={ConstantesCSS.CLASSES_DIV_INPUT + ' col s6' }
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
          divClasse={ConstantesCSS.CLASSES_DIV_INPUT + ' col s10' }
          onChange={(e) => { this.handleChange(e.target.value, 'horaOcorrencia') }}
        />
      </div>  

     <h4>Local do crime</h4>
      <br />

      <div className="row">
        <CampoTexto
          id={'endereco'}
          label={'Endereço'}
          maxLen={255}
          type={'text'}
          inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
          divClasse={ConstantesCSS.CLASSES_DIV_INPUT + ' col s12'}
          onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 255), 'endereco') }}
        />
      </div>   
       <Combobox />
      <div className="row">
        <EstadoFormGroup
          id="estado"
          value={this.state.estado}
          divClasse={ConstantesCSS.CLASSES_DIV_INPUT + ' col s12'}
          handleChange={this.handleChange}
        />
      </div>  
      </div>
    )
  }
}

DetalhamentoDenuncia.defaultProps = { handleChange: () => { } };

DetalhamentoDenuncia.propTypes = {
  handleChange: PropTypes.func
};

