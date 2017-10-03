import reducer from './reducer';
import { REQUEST_SIGN_IN, SUCCESS_SIGN_IN, FAILURE_SIGN_IN } from '../../actions';

describe('Auth Reducer', () => {
  it('returns the state unchanged when the action passed is empty', () => {
    const mockState = { items: [] };

    expect(reducer(mockState, {})).toEqual(mockState);
  });

  it('set logged to false inside the state when a sigin request is made', () => {
    const expectedState = {
      logged: false,
    };
    const mockAction = { type: REQUEST_SIGN_IN };

    expect(reducer(undefined, mockAction)).toEqual(expectedState);
  });

  it('set logged to false inside the state when a sigin request fails', () => {
    const expectedState = {
      logged: false,
      loginError: true,
      loginErrorMessage: 'E-mail ou senha inválidos',
    };
    const mockAction = { type: FAILURE_SIGN_IN };

    expect(reducer(undefined, mockAction)).toEqual(expectedState);
  });

  it('set logged to true inside the state when a sigin request succeds', () => {
    const mockAction = {
      type: SUCCESS_SIGN_IN,
      payload: {
        user: {
          email: '',
          displayName: '',
          emailVerified: '',
          uid: '',
        },
      },
    };

    const newState = reducer(undefined, mockAction);
    expect(newState.logged).toBe(true);
  });

  it('set user info inside the state when a sigin request succeds', () => {
    const expectedValue = {
      email: 'a@a.com',
      displayName: 'Teste',
      emailVerified: true,
      uid: '123456',
    };

    const mockAction = {
      type: SUCCESS_SIGN_IN,
      payload: {
        user: expectedValue,
      },
    };

    const newState = reducer(undefined, mockAction);
    expect(newState.user).toEqual(expectedValue);
  });
});
