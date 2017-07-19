import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';

describe('<Home />', () => {
    it('has a H1', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('h1').exists()).toBe(true);
    });


    it('has a link to categories page;', () => {
        const wrapper = shallow(<Home />)
        const link = wrapper.find('Link').props()
        expect(link).toHaveProperty('to', '/categorias')       
    });
});