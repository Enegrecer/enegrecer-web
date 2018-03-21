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

  it('deve renderizar o componente NovaTestemunhaForm.js', () => {
    expect(subject.find('NovaTestemunhaForm')).toHaveLength(1)
  });
  it('deve renderizar o componente DetalhamentoDenuncia', () => {
    expect(subject.find('DetalhamentoDenuncia')).toHaveLength(1)
  });

  /* describe('quando o form for submetido', () => {
    const salvarDenunciaSpy = jest.fn();
    const alterarDenunciaFormSpy = jest.fn();
    const wrapper = shallow(
      <NovaDenunciaForm
        alterarDenunciaForm={alterarDenunciaFormSpy}
        salvarDenuncia={salvarDenunciaSpy}
      />);
    const stateMock = {
      detalhamento: 'valor detalhamento',
      idCategoria: 'valor categoria',
    };


    it('deve ter o state atualizado com os dados corretos', () => {
      wrapper.instance().handleChange(stateMock);

      const expectedState = {
        detalhamento: 'valor detalhamento',
        dataOcorrencia: '',
        horaOcorrencia: '',
        idCategoria: 'valor categoria',
        endereco: '',
        estado: '',
        vitima: {},
        testemunha: {}
      };

      expect(wrapper.state()).toEqual(expectedState);
    });

    it('deve chamar alterarDenunciaForm prop func com os dados corretos', () => {
      const expectedParams = {
        detalhamento: 'valor detalhamento',
        dataOcorrencia: '',
        horaOcorrencia: '',
        idCategoria: 'valor categoria',
        endereco: '',
        estado: '',
        vitima: {},
        testemunha: {}
      };
      expect(alterarDenunciaFormSpy).toBeCalledWith(expectedParams);
    });

    it('deve chamar salvar denúncia com os dados corretos', () => {
      wrapper.find('form').simulate('submit');
      expect(salvarDenunciaSpy).toBeCalled();
    });
  }); */
});
