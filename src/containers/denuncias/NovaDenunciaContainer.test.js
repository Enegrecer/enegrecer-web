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
    it('não deve chamar o método criarDenunciaRequisicao quando renderizar pela primeira vez', () => {
      const criarDenunciaRequisicaoMock = jest.fn();
      const wrapper = shallow(
        <NovaDenunciaContainer
          currentUserUID=""
          criarDenunciaRequisicao={criarDenunciaRequisicaoMock}
        />);

      wrapper.instance().onPressSaveButton();
      expect(criarDenunciaRequisicaoMock).not.toHaveBeenCalled();
    });
  });

});
