import React from 'react';
import { shallow } from 'enzyme';
import CategoriesCard from './CategoriesCard';

describe('<CategoriesCard />', () => {
	it('have a card component', () => {
		const wrapper = shallow(<CategoriesCard />);
		expect(wrapper.find('Card').exists()).toBe(true);
	});

});
