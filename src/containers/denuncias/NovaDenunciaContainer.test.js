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

  /* describe('método onPressSaveButton', () => {
    const criarDenunciaRequisicaoMock = jest.fn();
    const wrapper = shallow(
      <NovaDenunciaContainer
        currentUserUID=""
        criarDenunciaRequisicao={criarDenunciaRequisicaoMock}
      />);

    xit('não deve chamar o método criarDenunciaRequisicao quando o form estiver inválido', () => {
      wrapper.setState({
        vitima: {
          pessoaIdentificada: false,
          nome: 'dsaklkadlaksdlkasldkalskdlaskdasldkalskdalskdlaskdlaskdlksdasdlsak',
          genero: 'feminino',
          raca: 'parda',
          dataNascimento: '1900-01-02',
          endereco: 'Av. teste',
          estado: 'AM',
          telefone: '99999999999',
          email: 'tt.com',
          naturalidade: 'naturalidade',
          caracteristicasDaVitima: 'caracteristicasVitima',
        }
      },
      () => {
        wrapper.instance().onPressSaveButton();
        expect(criarDenunciaRequisicaoMock).not.toHaveBeenCalled();
      });
    });

    xit('deve chamar o método criarDenunciaRequisicao quando o form estiver válido', () => {
      wrapper.setState({
        vitima: {
          pessoaIdentificada: false,
          nome: 'Teste',
          genero: 'feminino',
          raca: 'parda',
          dataNascimento: '1900-01-02',
          endereco: 'Av. teste',
          estado: 'AM',
          telefone: '(81) 99722-7867',
          email: 't@t.com',
          naturalidade: 'naturalidade',
          caracteristicasDaVitima: 'caracteristicasDaVitima',
        }
      },
      () => {
        wrapper.instance().onPressSaveButton();
        expect(criarDenunciaRequisicaoMock).toHaveBeenCalled();
      })
    })
  }); */
});
