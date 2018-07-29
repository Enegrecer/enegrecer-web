import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Data from '../data';

describe('Data', () => {
  it('deve possuir estrutura definida ', () => {
    const onChange = jest.fn();
    const data = mount(<Data id="13" onChange={onChange} label="Data" divClasses="estado" />);
    const dataTextoJson = toJson(data);
    expect(dataTextoJson).toMatchSnapshot();
  });
});

