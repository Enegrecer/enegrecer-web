import React from 'react'
import { shallow } from 'enzyme'
import NovaTestemunhaForm from './NovaTestemunhaForm';


describe('validacoesCamposTestemunha', () => {
  describe('validaTestemunhaForm chamadas', () => {
    it('deve iniciar o state corretamente', () => {
      const wrapper = shallow(<NovaTestemunhaForm />)
      const expectedState = {
        nome: '',
        genero: '',
        raca: '',
        dataNascimento: '',
        telefone: '',
        caracteristicas: '',
      };
      expect(wrapper.instance().state).toEqual(expectedState)
    });
  });

  describe('quando o valor do campo for alterado', () => {
    const wrapper = shallow(<NovaTestemunhaForm />);

    it('deve cortar o nome se tiver mais de 40 caracteres', () => {
      const eventMock = {
        target: {
          value: 'Coletivo nacional de Juventude Enegrecer é uma expressão do movimento social',
        },
      };

      wrapper.find('#nome-testemunha').simulate('change', eventMock);
      expect(wrapper.state().nome).toEqual('Coletivo nacional de Juventude Enegrecer');
    });
  });
});
