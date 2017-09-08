import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow, mount } from 'enzyme';
import { NewComplaintContainer } from './NewComplaintContainer';


describe('NewComplaintContainer', () => {
  it('renderiza o container sem erros', () => {
    const wrapper = shallow(
      <NewComplaintContainer informer="" requestCreateComplaint={() => { }} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renderiza sem erros o formulário de denúncias dentro do container', () => {
    const wrapper = mount(<MuiThemeProvider>
      <NewComplaintContainer informer="" requestCreateComplaint={() => { }} />
    </MuiThemeProvider>);
    expect(wrapper.find('#form-nova-denuncia').length).toBe(1);
  });

  describe('método onPressSaveButton', () => {
    it('chama o método requestCreateComplaint recebido via prop', () => {
      const requestCreateComplaintMock = jest.fn();
      const wrapper = shallow(
        <NewComplaintContainer informer="" requestCreateComplaint={requestCreateComplaintMock} />);
      wrapper.instance().onPressSaveButton();
      expect(requestCreateComplaintMock).toHaveBeenCalled();
    });
  });
});
