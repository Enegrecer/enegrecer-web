import React from 'react';
import { shallow } from 'enzyme';
import TestemunhaBox from './TestemunhaBox';

describe('TestemunhaBox Component', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(<TestemunhaBox />);
    expect(wrapper.exists()).toBe(true);
  });
});
