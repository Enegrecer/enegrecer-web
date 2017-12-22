import React from 'react';
import { shallow } from 'enzyme';
import { mock } from 'sinon';
import { EstadoFormGroup } from './FormGroups';


describe('EstadoFormGroup', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(
      <EstadoFormGroup
        id={'estado'}
        value={''}
        handleChange={mock()}
      />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('#estado')).toHaveLength(1)
  });
});

describe('RacaFormGroup', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(
      <EstadoFormGroup
        id={'raca'}
        value={''}
        handleChange={mock()}
      />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('#raca')).toHaveLength(1)
  });
});

