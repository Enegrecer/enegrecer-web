import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('deve ter a mesma estrutura de UI', () => {
    const navbar = shallow(<Navbar />);
    const navbarJson = toJson(navbar);

    expect(navbarJson).toMatchSnapshot();
  });
});
