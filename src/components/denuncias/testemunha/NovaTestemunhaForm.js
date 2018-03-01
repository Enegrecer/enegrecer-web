import PropTypes from 'prop-types';
import React from 'react';
import { cortarPalavra } from '../../../helpers';
import { TelefoneFormGroup, CampoTexto, Combobox } from '../../FormGroups'
import * as ConstantesCSS from '../../../components/layouts/ConstantesCss';
import { racasVitima } from '../../../dados';
import * as Tela from '../../../Tela';

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
          <CampoTexto
            id={'nome-testemunha'}
            label={'Nome (máximo de 40 caracteres)'}
            maxLen={40}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
            onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 40), 'nome') }}
            type={'text'}
          />
        </div>

        <div className="row">
          <CampoTexto
            id={'genero-testemunha'}
            label={'Gênero (máximo de 15 caracteres)'}
            maxLen={15}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            inputClasse={ConstantesCSS.CLASSES_INPUT}
            onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 15), 'genero') }}
            placeholder={'Ex.: Feminino, Masculino, Não Binário...'}
            type={'text'}
          />

          <Combobox
            id={'raca-testemenunha'}
            value={this.state.raca}
            handleChange={this.handleChange}
            itens={racasVitima}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            label={'Selecione a Raça:'}
            valorPadrao={'Selecione a Raça:'}
          />
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

          <TelefoneFormGroup
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
