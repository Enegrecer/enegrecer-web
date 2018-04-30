import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Modal from './modal';

describe('Modal', () => {
  it('deve construir o componente corretamente ', () => {
    const modal = shallow(<Modal />);
    const modalJson = toJson(modal);
    expect(modalJson).toMatchSnapshot();
  });
});
