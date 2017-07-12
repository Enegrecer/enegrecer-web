import React from 'react';
import { shallow } from 'enzyme';
import CategoriesCard from './CategoriesCard';

describe('<CategoriesCard />', () => {
	let category = {
			name: 'name',
			description: 'description'
	};

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<CategoriesCard category={category} />);
	});

	it('has a card component', () => {
		expect(wrapper.find('Card').exists()).toBe(true);
	});

	it('has a props category', () => {
		const wrapperWithoutProps = shallow(<CategoriesCard />);
		expect(wrapperWithoutProps.find('Card').exists()).toBe(false);
	});

	it('fill Card with category info', () => {
		let cardHeader = wrapper.find('CardHeader').props();
		expect(cardHeader.title).toBe(category.name);
	});

	it('fill CardText with category description', () => {
		let cardText = wrapper.find('CardText').props();
		expect(cardText.children).toBe(category.description);
	});

});
