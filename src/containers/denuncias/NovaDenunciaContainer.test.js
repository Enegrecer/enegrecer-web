import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow, mount } from 'enzyme';
import { NovaDenunciaContainer } from './NovaDenunciaContainer';


describe('NovaDenunciaContainer', () => {
  it('renderiza o container sem erros', () => {
    const wrapper = shallow(
      <NovaDenunciaContainer currentUserUID="" criarDenunciaRequisicao={() => { }} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renderiza sem erros o formulário de denúncias dentro do container', () => {
    const wrapper = mount(<MuiThemeProvider>
      <NovaDenunciaContainer currentUserUID="" criarDenunciaRequisicao={() => { }} />
    </MuiThemeProvider>);
    expect(wrapper.find('#form-nova-denuncia').length).toBe(1);
  });

  describe('método onPressSaveButton', () => {
    const criarDenunciaRequisicaoMock = jest.fn();
    const wrapper = shallow(
      <NovaDenunciaContainer
        currentUserUID=""
        criarDenunciaRequisicao={criarDenunciaRequisicaoMock}
      />);


    it('não deve chamar o método criarDenunciaRequisicao quando o form estiver inválido', () => {
      
      wrapper.instance().onPressSaveButton();
      expect(criarDenunciaRequisicaoMock).not.toHaveBeenCalled();
    });

    it('deve chamar o método criarDenunciaRequisicao quando o form estiver válido', () => { 
      wrapper.setState({
          vitima: {
            pessoaIdentificada: false,
            nome: 'Teste',
            genero: 'feminino',
            raca: 'parda',
            dataNascimento: '1900-01-02',
            endereco: 'Av. teste',
            estado: 'AM',
            telefone: '99999999999',
            email: 't@t.com',
            naturalidade: 'naturalidade',
            informacoesComplementares: 'INFORMACOES COMPLEMENTARES',
          }
        },
        () => {
          wrapper.instance().onPressSaveButton();
          expect(criarDenunciaRequisicaoMock).toHaveBeenCalled();
        })

    })
  });

});
