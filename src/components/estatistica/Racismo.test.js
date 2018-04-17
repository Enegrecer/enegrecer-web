import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Racismo from './Racismo';

describe('Racismo', () => {
  it('deve construir a pagina corretamente ', () => {
    const racismo = shallow(<Racismo id="vermelho" />);
    const racismoJson = toJson(racismo);
    expect(racismoJson).toMatchSnapshot();
  });
});
