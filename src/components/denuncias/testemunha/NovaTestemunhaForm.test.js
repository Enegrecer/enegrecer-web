import React from 'react'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import NovaTestemunhaForm from './NovaTestemunhaForm';


describe('validacoesCamposTestemunha', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(<NovaTestemunhaForm />);
    expect(wrapper.exists()).toBe(true);
  });

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

  describe('quando o valor do campo for alterado', () => {
    const handleChangeSpy = spy();
    const wrapper = shallow(<NovaTestemunhaForm handleChange={handleChangeSpy} />);

    it('deve cortar o nome se tiver mais de 40 caracteres', async () => {
      const eventMock = {
        target: {
          value: 'Coletivo nacional de Juventude Enegrecer é uma expressão do movimento social',
        },
      };


      wrapper.find('#nome-testemunha').simulate('change', eventMock);
      expect(wrapper.state().nome).toEqual('Coletivo nacional de Juventude Enegrecer');
    });

    it('deve chamar o handleChange prop quando o component montar', () => {
      wrapper.instance().componentDidMount()
      expect(handleChangeSpy.called).toBeTruthy();
    })
  });
});
