import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import NovaVitimaForm from './NovaVitimaForm';

describe('NovaVitimaForm Component', () => {
  it('deve possuir estrutura definida ', () => {
    const novaVitimaFormWrapper = shallow(<NovaVitimaForm />);
    const novaVitimaFormJSON = toJson(novaVitimaFormWrapper);
    expect(novaVitimaFormJSON).toMatchSnapshot();
  });
});
