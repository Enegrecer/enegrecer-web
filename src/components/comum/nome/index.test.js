import React from 'react';
import { mount } from 'enzyme';
import Nome  from './index'
import toJson from 'enzyme-to-json';

describe('Nome', () => {

    it('deve seguir a estrutura definida ', () => {
      let nome = mount(<Nome id={'3'} />);
      const nomeJson = toJson(nome);
      expect(nomeJson).toMatchSnapshot();
    }); 
    
});