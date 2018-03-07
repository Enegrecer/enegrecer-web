import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import CheckBox from './../checkbox'


describe('Checkbox', () => {
    it('deve possuir estrutura definida ', () => {
      const onClick = jest.fn();
      const checkBox = mount(<CheckBox id={'souAVitima'}
        label={'Sou a Vítima'} 
        onClick={onClick} />);
      const checkBoxTextoJson = toJson(checkBox);
      expect(checkBoxTextoJson).toMatchSnapshot();
    });
  });
  