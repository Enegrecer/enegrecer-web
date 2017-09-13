import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('<Home />', () => {
  it('tem um H1', () => {
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

  it('possui um link para a página de nova denúncia;', () => {
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
    expect(link).toHaveProperty('to', '/novaDenuncia');
  });
});
