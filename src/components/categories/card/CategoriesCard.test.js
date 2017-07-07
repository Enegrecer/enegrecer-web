import React from 'react';
import { shallow } from 'enzyme';
import CategoriesCard from './CategoriesCard';

it('renders without crashing', () => {
	const wrapper = shallow(<CategoriesCard />);
	expect(wrapper.find('div').exists()).toBe(true);
});
