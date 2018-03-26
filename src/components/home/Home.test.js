import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from './Home';
import Logo from './Logo';
import Nav from './Nav';

describe('Home', () => {
  const historyMock = { push: jest.fn() };
  const wrapper = shallow(<Home history={historyMock} />);

  it('possui a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

});
