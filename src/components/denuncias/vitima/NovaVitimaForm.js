import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TelefoneFormGroup, CampoTexto, CheckBox, Combobox } from '../../FormGroups'
import { cortarPalavra } from '../../../helpers';
import * as ConstantesCSS from '../../../components/layouts/ConstantesCss'
import { estados, racasVitima } from '../../../dados';
import * as Tela from '../../../Tela';


export default class NovaVitimaForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      pessoaIdentificada: false,
      souAVitima: false,
      conhecoAVitima: false,
      nome: '',
      genero: '',
      raca: '',
      dataNascimento: '',
      endereco: '',
      estado: '',
      telefone: '',
      email: '',
      naturalidade: '',
      caracteristicasDaVitima: '',
    };
  }


  componentDidMount() {
    this.props.handleChange({ vitima: this.state });

    const raca = Tela.getElementoPorId('raca');
    raca.on('change', (e) => {
      this.handleChange(e.target.value, 'raca');
    });

    const comboEstado = Tela.getElementoPorId('estadoVitima');
    comboEstado.on('change', (e) => {
      this.handleChange(e.target.value, 'estado');
    });
  }


  handleChange(value, property) {
    this.setState({ [property]: value },
      () => this.props.handleChange({ vitima: this.state })
    );
  }

  render() {
    return (
      <div>
        <h3>Informacões da Vítima</h3>
        <br />

        <CheckBox id={'conhecoAVitima'} label={'Conheço a Vítima'} onClick={e => this.handleChange(e.target.checked, 'conhecoAVitima')} />
        <CheckBox id={'souAVitima'} label={'Sou a Vítima'} onClick={e => this.handleChange(e.target.checked, 'souAVitima')} />

        <div className="row">
          <CampoTexto
            id={'nome-vitima'}
            label={'Nome (máximo de 40 caracteres)'}
            maxLen={40}
            placeholder={''}
            type={'text'}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 40), 'nome')}
          />
        </div>

        <div className="row">
          <CampoTexto
            id={'vitima-genero'}
            label={'Gênero (máximo de 15 caracteres)'}
            maxLen={15}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s4`}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 15), 'genero')}
            type={'text'}
          />

          <Combobox
            id={'raca'}
            value={this.state.raca}
            handleChange={this.handleChange}
            itens={racasVitima}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s4`}
            label={'Selecione a Raça:'}
            valorPadrao={'Selecione a Raça:'}
          />

          <CampoTexto
            id={'dataNascimento-vitima'}
            label={'Data de Nascimento'}
            inputClasse={ConstantesCSS.CLASSES_INPUT}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s4`}
            onChange={e => this.handleChange(e.target.value, 'dataNascimento')}
            maxLen={8}
            type={'date'}
          />

        </div>

        <div className="row">
          <CampoTexto
            id={'endereco-vitima'}
            label={'Endereço (máximo de 255 caracteres)'}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 255), 'endereco')}
            maxLen={255}
            inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
            type={'text'}
          />
        </div>

        <div className="row">
          <CampoTexto
            id={'naturalidade-vitima'}
            label={'Naturalidade (máximo de 40 caracteres)'}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 40), 'naturalidade')}
            maxLen={40}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            type={'text'}
          />

          <Combobox
            id={'estadoVitima'}
            value={this.state.estado}
            handleChange={this.handleChange}
            itens={estados}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            label={'Selecione o Estado:'}
            valorPadrao={'Selecione'}
          />
        </div>

        <div className="row">
          <CampoTexto
            id={'email-vitima'}
            label={'Email'}
            maxLen={40}
            type={'text'}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 40), 'email')}
          />

          <TelefoneFormGroup
            id="telefone"
            value={this.state.telefone}
            handleChange={this.handleChange}
            label={'Telefone'}
          />

        </div>

        <div className="row">
          <CampoTexto
            id={'caracteristicasDaVitima'}
            label={'* Por favor, descreva aqui as características da vítima (máximo de 255 caracteres)'}
            maxLen={255}
            type={'text'}
            inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
            placeholder={'Ex.: Era uma mulher negra, com aproximadamente 40 anos, magra, alta com cabelo curto...'}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 255), 'caracteristicasDaVitima')}
          />
        </div>
      </div>);
  }
}

NovaVitimaForm.defaultProps = { handleChange: () => {} };

NovaVitimaForm.propTypes = {
  handleChange: PropTypes.func,
};
