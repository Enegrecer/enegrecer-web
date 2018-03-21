import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProximosPassos from './ProximosPassos';

describe('ProximosPassos', () => {
  const wrapper = shallow(<ProximosPassos />);

  it('deve possuir a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});

