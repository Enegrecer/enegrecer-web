import React from 'react';
import { shallow } from 'enzyme';
import { mock } from 'sinon';
import { CampoTexto, Combobox } from './FormGroups';


describe('Combobox', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(
      <Combobox
        id={'estado'}
        value={''}
        handleChange={mock()}
      />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('#estado')).toHaveLength(1)
  });
});


describe('CampoTexto', () => {
  it('renderiza o componente sem erros', () => {
    shallow(<CampoTexto maxLen={35} />);
  });
});

