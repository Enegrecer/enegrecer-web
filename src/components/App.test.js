import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
    it('has a BrowserRouter', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('BrowserRouter').exists()).toBe(true);
    });
});