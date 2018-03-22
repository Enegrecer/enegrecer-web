import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProximosPassos from './index';

describe('ProximosPassos', () => {
  const wrapper = shallow(<ProximosPassos />);

  it('deve possuir a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});

