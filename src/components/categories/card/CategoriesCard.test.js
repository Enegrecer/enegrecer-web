import React from 'react';
import { shallow } from 'enzyme';
import CategoriesCard from './CategoriesCard';

describe('<CategoriesCard />', () => {
  const category = {
    name: 'name',
    description: 'description',
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CategoriesCard category={category} />);
  });

  it('has a card component', () => {
    expect(wrapper.find('Card').exists()).toBe(true);
  });

  it('fill Card with category info', () => {
    const cardHeader = wrapper.find('CardHeader').props();
    expect(cardHeader.title).toBe(category.name);
  });

  it('fill CardText with category description', () => {
    const cardText = wrapper.find('CardText').props();
    expect(cardText.children).toBe(category.description);
  });
});
