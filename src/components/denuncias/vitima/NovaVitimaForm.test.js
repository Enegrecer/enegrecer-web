import React from 'react';
import { shallow } from 'enzyme';
import { mock } from 'sinon';
import NovaVitimaForm from './NovaVitimaForm';


describe('NovaVitimaForm Component', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(<NovaVitimaForm alterarVitimaForm={() => { }} />);
    expect(wrapper.exists()).toBe(true);
  });

  describe('quando o valor do campo for alterado', () => {
    const wrapper = shallow(<NovaVitimaForm alterarVitimaForm={mock()} />);

    it('altera o valor correspondente no estado', () => {
      const eventMock = {
        target: {
          value: 'Coletivo nacional de Juventude Enegrecer é uma expressão do movimento social',
        },
      };

      wrapper.find('#nome').simulate('change', eventMock);
      expect(wrapper.state().nome).toEqual('Coletivo nacional de Juventude Enegrecer');
    });
  });
})
