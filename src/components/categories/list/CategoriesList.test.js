import React from 'react';
import { shallow } from 'enzyme';
import CategoriesList from './CategoriesList';

jest.mock('../../../utils/firebaseUtils');



describe('<CategoriesList />', () => {
	let categories;

	beforeEach(() => {
		categories = [
			{ description: "description 1", key: 1, name: "category 1", image: "image1", slug: "category-1" }, 
			{ description: "description 2", key: 2, name: "category 2", image: "image2", slug: "category-2" }, 
		];		
	});

	it('has at least one CategoriesCard', () => {
		const wrapper = shallow(<CategoriesList />);
		expect(wrapper.find('CategoriesCard').exists()).toBe(true);
	});

	it('set state with categories before render', () => {
		const wrapper = shallow(<CategoriesList />);
		expect(wrapper.state().categories).toEqual(categories);
	});

});
