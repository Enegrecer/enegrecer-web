import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import InformacoesLegais from './FormInformacoesLegais';

describe('DenuncianteForm', () => {
  it('deve seguir a estrutura definida ', () => {
    const informacoesLegais = shallow(<InformacoesLegais />);
    const informacoesLegaisJson = toJson(informacoesLegais);
    expect(informacoesLegaisJson).toMatchSnapshot();
  });
});
