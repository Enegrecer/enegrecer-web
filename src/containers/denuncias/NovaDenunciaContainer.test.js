import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow, mount } from 'enzyme';
import { NovaDenunciaContainer } from './NovaDenunciaContainer';


describe('NovaDenunciaContainer', () => {
  it('renderiza o container sem erros', () => {
    const wrapper = shallow(
      <NovaDenunciaContainer denunciante="" criarDenunciaRequisicao={() => { }} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renderiza sem erros o formulário de denúncias dentro do container', () => {
    const wrapper = mount(<MuiThemeProvider>
      <NovaDenunciaContainer denunciante="" criarDenunciaRequisicao={() => { }} />
    </MuiThemeProvider>);
    expect(wrapper.find('#form-nova-denuncia').length).toBe(1);
  });

  describe('método onPressSaveButton', () => {
    it('chama o método criarDenunciaRequisicao recebido via prop', () => {
      const criarDenunciaRequisicaoMock = jest.fn();
      const wrapper = shallow(
        <NovaDenunciaContainer denunciante="" criarDenunciaRequisicao={criarDenunciaRequisicaoMock} />);
      wrapper.instance().onPressSaveButton();
      expect(criarDenunciaRequisicaoMock).toHaveBeenCalled();
    });
  });
});
