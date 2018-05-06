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
  const localStorageMock = (function callbackMock() {
    let store = {};
    return {
      getItem(key) {
        return store[key];
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      clear() {
        store = {};
      },
      removeItem(key) {
        delete store[key];
      }
    };
  }());
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });

  it('deve construir a pagina com menu para moderador', () => {
    const routes = shallow(<Routes />);
    const routesJson = toJson(routes);
    expect(routesJson).toMatchSnapshot();
  });
});
