import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CheckBox from './../checkbox';

describe('Checkbox', () => {
  it('deve possuir estrutura definida ', () => {
    const checkBox = shallow(<CheckBox
      id="souAVitima"
      state="souAVitima"
      label="Sou a Vítima"
    />);
    const checkBoxTextoJson = toJson(checkBox);
    expect(checkBoxTextoJson).toMatchSnapshot();
  });
});

