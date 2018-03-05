import React from 'react';
import {  mount } from 'enzyme';
import CampoTexto  from './CampoTexto'
import toJson from 'enzyme-to-json';

describe('CampoTexto', () => {
    
    it('não deve possuir estrutura definida ', () => {
      const onChange = jest.fn();
      <CampoTexto
        id={'id'}
        label={'nome'}
        inputClasse="input"
        divClasse="material"
        maxLen={40}
        type={'text'}
        onChange={onChange}
      />
      let campoTexto = mount(<CampoTexto maxLen={3} />);
      const campoTextoJson = toJson(campoTexto);
      expect(campoTextoJson).toMatchSnapshot();
    }); 

});