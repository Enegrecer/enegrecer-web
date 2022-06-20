import React from 'react';
import { shallow } from 'enzyme';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import NovaDenunciaContainer from './NovaDenunciaContainer';

describe('NovaDenunciaContainer', () => {
  let store;
  let subject;

  beforeEach(() => {
    store = createStore(combineReducers({ form: formReducer }));
    const props = {
      denunciaCadastradaComSucesso: false
    };
    subject = shallow(<Provider store={store}><NovaDenunciaContainer {...props} /></Provider>);
  });

  it('renderiza sem erros o formulário de denúncias dentro do container', () => {
    const denunciaContainer = toJson(subject);
    expect(denunciaContainer).toMatchSnapshot();
  });
});
