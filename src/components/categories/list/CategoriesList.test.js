import React from 'react';
import { shallow } from 'enzyme';
import CategoriesList from './CategoriesList';
import CategoriesCard from '../card/CategoriesCard';

describe('<CategoriesList />', () => {

	it('has CategoriesCard', () => {
		const wrapper = shallow(<CategoriesList />);
		expect(wrapper.containsMatchingElement(<CategoriesCard />)).toBe(true);
	});

});
