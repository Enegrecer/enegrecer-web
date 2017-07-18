import React from 'react';
import App from './App';
import CategoriesList from './categories/list/CategoriesList';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<CategoriesList />)).toBe(true);
});
