import React from 'react';
import { mount } from 'enzyme';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import NovaDenunciaForm from './NovaDenunciaForm';

describe('NovaDenunciaForm Component', () => {
  let store;
  let subject;

  beforeEach(() => {
    store = createStore(combineReducers({ form: formReducer }));
    const props = {
      submeteFormulario: () => {}
    };
    subject = mount(
      <Provider store={store}>
        <NovaDenunciaForm {...props} />
      </Provider>
    );
  });

  it('deve renderizar o componente sem erros', () => {
    expect(subject.exists()).toBe(true);
  });
});
