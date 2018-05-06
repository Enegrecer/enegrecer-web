import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Routes from './Routes';

describe('Routes sem moderador logado', () => {
  it('deve construir a pagina com menu da página', () => {
    const routes = shallow(<Routes />);
    const routesJson = toJson(routes);
    expect(routesJson).toMatchSnapshot();
  });
});

describe('Routes com moderador logado', () => {
  var localStorageMock = (function() {
    var store = {};
    return {
      getItem: function(key) {
        return store[key];
      },
      setItem: function(key, value) {
        store[key] = value.toString();
      },
      clear: function() {
        store = {};
      },
      removeItem: function(key) {
        delete store[key];
      }
    };
  })();
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });

  it('deve construir a pagina com menu para moderador', () => {
    const routes = shallow(<Routes />);
    const routesJson = toJson(routes);
    expect(routesJson).toMatchSnapshot();
  });
});
