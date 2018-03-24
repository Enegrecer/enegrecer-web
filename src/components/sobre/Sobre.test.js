import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Sobre from './sobre';

describe('Sobre', () => {
  const wrapper = shallow(<Sobre />);

  it('possui a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
