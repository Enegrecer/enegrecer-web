import React from 'react';
import Signup from './Signup';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.exists()).toBe(true);
});
