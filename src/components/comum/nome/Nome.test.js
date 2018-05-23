import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import Nome from './index';

describe('Nome', () => {
  it('deve seguir a estrutura definida ', () => {
    const nome = mount(<Nome id="3" />);
    const nomeJson = toJson(nome);
    expect(nomeJson).toMatchSnapshot();
  });
});

