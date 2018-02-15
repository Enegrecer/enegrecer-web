import React from 'react';
import { shallow } from 'enzyme';

import Painel from './Painel';

describe('Painel', () => {
  const wrapper = shallow(
    <Painel>
      <span />
    </Painel>,
  );

  it('renderiza os filhos', () => {
    expect(wrapper.find('span')).toHaveLength(1);
  });
});
