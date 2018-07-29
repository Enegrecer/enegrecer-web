import React from 'react';
import { mount } from 'enzyme';
import { reducer as formReducer, Field } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import NovaDenunciaForm from './NovaDenunciaForm';
import checkBox from '../comum/checkbox';
import NovaVitimaContainer from '../../containers/denuncias/vitima/NovaVitimaContainer';

describe('NovaDenunciaForm Component', () => {
  let store;
  let subject;

  beforeEach(() => {
    store = createStore(combineReducers({ form: formReducer }));
    const props = {
      submeteFormulario: () => { }
    };
    subject = mount(<Provider store={store}><NovaDenunciaForm {...props} /></Provider>);
  });

  it('deve renderizar o componente sem erros', () => {
    expect(subject.exists()).toBe(true);
  });

  describe('quando o campo sou a vitima for marcado', () => {
    it('deve espelhar os dados do denunciante para os dados da vítima', () => {
      store.getState().form.formDenuncia.values = {
        nomeDenunciante: 'Erika',
        telefoneDenunciante: '92996124552',
        estadoDenunciante: 'AM',
        cidadeDenunciante: 'Manaus',
        generoDenunciante: 'Feminino',
        racaDenunciante: 'Parda'
      };
      const {
        nomeDenunciante,
        telefoneDenunciante,
        estadoDenunciante,
        cidadeDenunciante,
        generoDenunciante,
        racaDenunciante
        // colocar a data de nascimento (precisa saber o formato)
      } = store.getState().form.formDenuncia.values;

      const souAVitimaCheckbox = subject.find(NovaVitimaContainer).find(checkBox).find(Field);
      souAVitimaCheckbox.simulate('change', { target: { value: true } });

      const {
        nomeVitima, telefoneVitima, estadoVitima, cidadeVitima, generoVitima, racaVitima
      } =
        store.getState().form.formDenuncia.values;

      expect(nomeVitima).toBe(nomeDenunciante);
      expect(telefoneVitima).toBe(telefoneDenunciante);
      expect(estadoVitima).toBe(estadoDenunciante);
      expect(cidadeVitima).toBe(cidadeDenunciante);
      expect(generoVitima).toBe(generoDenunciante);
      expect(racaVitima).toBe(racaDenunciante);
    });
  });

  describe('quando o campo sou a vitima for desmarcado', () => {
    it('deve limpar os dados do formulário de vítima', () => {
      const souAVitimaCheckbox = subject.find(NovaVitimaContainer).find(checkBox).find(Field);
      souAVitimaCheckbox.simulate('change', { target: { value: false } });

      const {
        nomeVitima, telefoneVitima, cidadeVitima, generoVitima, racaVitima
      } =
        store.getState().form.formDenuncia.values;

      expect(nomeVitima).toBe(undefined);
      expect(telefoneVitima).toBe(undefined);
      expect(cidadeVitima).toBe(undefined);
      expect(generoVitima).toBe(undefined);
      expect(racaVitima).toBe(undefined);
    });
  });
});
