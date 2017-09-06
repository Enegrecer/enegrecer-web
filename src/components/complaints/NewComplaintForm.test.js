import React from 'react';
import { shallow } from 'enzyme';
import NewComplaintForm from './NewComplaintForm';

describe('NewComplaintForm Component', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(<NewComplaintForm salvarDenuncia={() => { }} />);
    expect(wrapper.exists()).toBe(true);
  });
  describe('testa as renderizações dos inputs do componente', () => {
    it('renderiza sem erro o input de report do componente', () => {
      const wrapper = shallow(<NewComplaintForm salvarDenuncia={() => { }} />);

      expect(wrapper.children('#report').length).toBe(1);
    });

    it('renderiza sem erro o input de ocurrenceDate do componente', () => {
      const wrapper = shallow(<NewComplaintForm salvarDenuncia={() => { }} />);
      expect(wrapper.children('#ocurrenceDate').length).toBe(1);
    });

    it('renderiza sem erro o input de categoryId do componente', () => {
      const wrapper = shallow(<NewComplaintForm salvarDenuncia={() => { }} />);
      expect(wrapper.children('#categoryId').length).toBe(1);
    });

    it('renderiza sem erro o input de address do componente', () => {
      const wrapper = shallow(<NewComplaintForm salvarDenuncia={() => { }} />);
      expect(wrapper.children('#address').length).toBe(1);
    });

    it('renderiza sem erro o input de latitude do componente', () => {
      const wrapper = shallow(<NewComplaintForm salvarDenuncia={() => { }} />);
      expect(wrapper.children('#latitude').length).toBe(1);
    });

    it('renderiza sem erro o input de longitude do componente', () => {
      const wrapper = shallow(<NewComplaintForm salvarDenuncia={() => { }} />);
      expect(wrapper.children('#longitude').length).toBe(1);
    });
  });

  it('inicializa o componente com o estado esperado', () => {
    const wrapper = shallow(<NewComplaintForm salvarDenuncia={() => { }} />);

    const expectedState = {
      report: '',
      ocurrenceDate: '',
      categoryId: '',
      address: '',
      latitude: '',
      longitude: '',
    };
    expect(wrapper.state()).toEqual(expectedState);
  });

  describe('método onPressSaveButton', () => {
    it('chama o método de criar denúncia recebido via prop', () => {
      const salvarDenunciaMock = jest.fn();
      const wrapper = shallow(<NewComplaintForm salvarDenuncia={salvarDenunciaMock} />);
      wrapper.instance().onPressSaveButton();
      expect(salvarDenunciaMock).toHaveBeenCalled();
    });

    it('chama o método de criar denúncia passando o seu estado interno', () => {
      const salvarDenunciaMock = jest.fn();
      const wrapper = shallow(<NewComplaintForm salvarDenuncia={salvarDenunciaMock} />);

      const estadoNoMomentoDaChamada = wrapper.state();
      wrapper.instance().onPressSaveButton();

      const primeiraChamadaAoMock = salvarDenunciaMock.mock.calls[0];
      const objetoPassadoAoMock = primeiraChamadaAoMock[0];
      expect(objetoPassadoAoMock).toEqual(estadoNoMomentoDaChamada);
    });
  });

  describe('método setProperty', () => {
    let wrapper;
    const eventoSimulado = {
      target: {
        value: 'texto de teste',
      },
    };
    const propriedade = 'report';

    beforeEach(() => {
      wrapper = shallow(<NewComplaintForm salvarDenuncia={() => { }} />);
    });

    it('configura valor de uma propriedade no estado', () => {
      wrapper.instance().setProperty(eventoSimulado, propriedade);

      const propriedadeAlterada = wrapper.state(propriedade);
      expect(propriedadeAlterada).toBe(eventoSimulado.target.value);
    });

    it('não muda o valor de outras propriedades do estado', () => {
      const estadoEsperado = { ...wrapper.state() };
      estadoEsperado[propriedade] = eventoSimulado.target.value;

      wrapper.instance().setProperty(eventoSimulado, propriedade);
      expect(wrapper.state()).toEqual(estadoEsperado);
    });
  });
});
