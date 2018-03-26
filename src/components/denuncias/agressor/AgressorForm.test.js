import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import AgressorForm from './AgressorForm';

describe('AgressorForm', () => {
  it('deve seguir a estrutura definida ', () => {
    const agressorForm = shallow(<AgressorForm />);
    const agressorFormJson = toJson(agressorForm);
    expect(agressorFormJson).toMatchSnapshot();
  });
});

