import React from 'react';
import { shallow } from 'enzyme';
import NovaVitimaForm from './NovaVitimaForm';

describe('NovaDenunciaForm Component', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(<NovaVitimaForm alterarVitimaForm={() => { }} />);
    expect(wrapper.exists()).toBe(true);
  });
})
