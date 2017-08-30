import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('<Home />', () => {
  it('has a H1', () => {
    const wrapper = shallow(<Home auth={{}} />);
    expect(wrapper.find('h1').exists()).toBe(true);
  });


  it('has a link to categories page;', () => {
    const wrapper = shallow(<Home auth={{}} />);
    const link = wrapper.find('Link').props();
    expect(link).toHaveProperty('to', '/categorias');
  });
});
