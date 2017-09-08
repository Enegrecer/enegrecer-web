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

  describe('quando o valor do input for alterado', () => {
    const wrapper = shallow(<NewComplaintForm salvarDenuncia={() => { }} />);

    beforeEach(() => {
      const eventMock = {
        target: {
          value: 'valor report',
        },
      };

      wrapper.find('#report').simulate('change', eventMock);
    });

    it('altera o valor correspondente no estado', () => {
      expect(wrapper.state().report).toEqual('valor report');
    });
  });

  describe('quando o form for submetido', () => {
    const salvarDenunciaSpy = jest.fn();
    const wrapper = shallow(<NewComplaintForm salvarDenuncia={salvarDenunciaSpy} />);
    const stateMock = {
      report: 'valor report',
      categoryId: 'valor categoria',
    };

    beforeEach(() => {
      wrapper.setState(stateMock);

      wrapper.find('form').simulate('submit');
    });

    it('deve chamar salvar denúncia com os dados corretos', () => {
      const expectedParams = {
        report: 'valor report',
        ocurrenceDate: '',
        categoryId: 'valor categoria',
        address: '',
        latitude: '',
        longitude: '',
      };

      expect(salvarDenunciaSpy).toBeCalledWith(expectedParams);
    });
  });
});
