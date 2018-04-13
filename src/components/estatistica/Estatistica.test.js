import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Estatistica from './Estatistica';

describe('Estatistica', () => {
  const wrapper = shallow(<Estatistica />);

  it('possui a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
