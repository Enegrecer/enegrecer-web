import React from 'react';
import Signin from './Signin';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const wrapper = shallow(<Signin />);
    expect(wrapper.exists()).toBe(true);
});
