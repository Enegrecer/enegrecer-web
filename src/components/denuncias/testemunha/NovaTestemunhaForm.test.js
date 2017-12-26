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
        caracteristicasTestemunha: '',
      }
      expect(wrapper.instance().state).toEqual(expectedState)
    });
  });
});
