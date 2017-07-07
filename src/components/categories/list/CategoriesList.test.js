import React from 'react';
import { shallow } from 'enzyme';
import CategoriesList from './CategoriesList';

describe('<CategoriesList />', () => {

	it('has CategoriesCard', () => {
		const wrapper = shallow(<CategoriesList />);
		expect(wrapper.find('CategoriesCard').exists()).toBe(true);
	});

});
