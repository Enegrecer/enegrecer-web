import React from 'react';
import { mount } from 'enzyme';
import { mock } from 'sinon'
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import NovaDenunciaForm from './NovaDenunciaForm';

describe('NovaDenunciaForm Component', () => {
  let store
  let subject

  beforeEach(() => {
    store = createStore(combineReducers({ form: formReducer }))
    const props = {
      handleSubmit: () => {}
    }
    subject = mount(
      <Provider store={store}>
        <NovaDenunciaForm {...props} />
      </Provider>
    )
  })

  it('deve renderizar o componente sem erros', () => {
    expect(subject.exists()).toBe(true);
  });

  it('deve renderizar o componente NovaVitimaForm', () => {
    expect(subject.find('NovaVitimaForm')).toHaveLength(1)
  });
});
