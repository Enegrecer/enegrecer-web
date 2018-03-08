import PropTypes from 'prop-types';
import React from 'react';
import { cortarPalavra } from '../../../utils/helpers';
import CampoTexto from '../../comum/campoTexto';
import Telefone from '../../comum/telefone';
import Combobox from '../../comum/combobox';
import * as ConstantesCSS from '../ConstantesCss';
import { racasVitima } from '../racas';
import * as Tela from '../../../utils/materializeCSS';
import Genero from '../../comum/genero';
import Nome  from  '../../comum/nome';
import Tipo from '../../comum/comboboxRaca/tipos';
import ComboboxRaca from '../../comum/comboboxRaca';

export default class NovaTestemunhaForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      nome: '',
      genero: '',
      raca: '',
      dataNascimento: '',
      telefone: '',
      caracteristicas: '',
    }
  }

  componentDidMount() {
    this.props.handleChange({ testemunha: this.state });
    const racaTestemunha = Tela.getElementoPorId('raca-testemenunha');
    racaTestemunha.on('change', (e) => {
      this.handleChange(e.target.value, 'raca');
    });
  }

  handleChange(value, property) {
    this.setState({ [property]: value },
      () => this.props.handleChange({ testemunha: this.state }));
  }

  render() {
    return (
      <div>
        <h3>Informacões da Testemunha</h3>
        <br />

        <div className="row">
          <Nome id={'nome-testemunha'} onChange={e => this.handleChange(cortarPalavra(e.target.value, 40), 'nome')} />
        </div>

        <div className="row">
          <Genero
            id={'genero-testemunha'}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 15), 'genero') }}
          />
          <ComboboxRaca id={'raca-testemenunha'} classes={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`} 
           tipo={Tipo.TESTEMUNHA} onChange={this.handleChange} /> 

        </div>

        <div className="row">
          <CampoTexto
            id={'dataNascimento-testemunha'}
            label={'Data de Nascimento'}
            maxLen={0}
            onChange={(e) => { this.handleChange(e.target.value, 'dataNascimento') }}
            inputClasse={ConstantesCSS.CLASSES_INPUT}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            type={'date'}
          />

          <Telefone
            id={'telefone'}
            value={this.state.telefone}
            handleChange={this.handleChange}
            label={'Telefone'}
          />
        </div>

        <div className="row">
          <CampoTexto
            id={'caracteristicas-testemunha'}
            label={'* Por favor, descreva aqui as características da testemunha (máximo de 255 caracteres)'}
            maxLen={255}
            onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 255), 'caracteristicas') }}
            type={'text'}
            inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
          />
        </div>
      </div>
    );
  }
}

NovaTestemunhaForm.defaultProps = { handleChange: () => {} }
NovaTestemunhaForm.propTypes = {
  handleChange: PropTypes.func,
};
