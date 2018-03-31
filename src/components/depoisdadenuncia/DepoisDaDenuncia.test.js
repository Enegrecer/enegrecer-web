import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DepoisDaDenuncia from './DepoisDaDenuncia';

describe('Depois da denuncia', () => {
  const wrapper = shallow(<DepoisDaDenuncia />);

  it('possui a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
