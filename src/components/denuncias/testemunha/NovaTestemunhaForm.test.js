import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NovaTestemunhaForm from './NovaTestemunhaForm';

describe('validacoesCamposTestemunha', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(<NovaTestemunhaForm />);
    const wrapperJson = toJson(wrapper);
    expect(wrapperJson).toMatchSnapshot();
  });
});
