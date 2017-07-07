import React from 'react';
import { shallow } from 'enzyme';
import CategoriesList from './CategoriesList';

it('renders without crashing', () => {
	const wrapper = shallow(<CategoriesList />);
	expect(wrapper.find(<div />).exists()).toBe(false);
});
