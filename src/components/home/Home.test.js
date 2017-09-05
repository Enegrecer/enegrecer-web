import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('<Home />', () => {
  it('has a H1', () => {
    const wrapper = shallow(<Home auth={{}} />);
    wrapper.setProps({
      auth: {
        logged: true,
        user: {
          email: 'teste',
        },
      },
    });
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it('has a link to categories page;', () => {
    const wrapper = shallow(<Home auth={{}} />);
    wrapper.setProps({
      auth: {
        logged: true,
        user: {
          email: 'teste',
        },
      },
    });
    const link = wrapper.find('#categorias').props();
    expect(link).toHaveProperty('to', '/categorias');
  });

  it('has a link to createNewComplaint page;', () => {
    const wrapper = shallow(<Home auth={{}} />);
    wrapper.setProps({
      auth: {
        logged: true,
        user: {
          email: 'teste',
        },
      },
    });
    const link = wrapper.find('#criar-denuncia').props();
    expect(link).toHaveProperty('to', '/newComplaint');
  });
});
