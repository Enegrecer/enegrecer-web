import reducer from './reducer';
import { REQUEST_SIGN_IN, SUCCESS_SIGN_IN, FAILURE_SIGN_IN } from '../../actions';

describe('Auth Reducer', () => {
  it('returns the state unchanged when the action passed is empty', () => {
    const mockState = { items: [] };

    expect(reducer(mockState, {})).toEqual(mockState);
  });

  it('set logged to false inside the state when a sigin request is made', () => {
    const expectedState = { logged: false };
    const mockAction = { type: REQUEST_SIGN_IN };

    expect(reducer(undefined, mockAction)).toEqual(expectedState);
  });

  it('set logged to false inside the state when a sigin request fails', () => {
    const expectedState = { logged: false };
    const mockAction = { type: FAILURE_SIGN_IN };

    expect(reducer(undefined, mockAction)).toEqual(expectedState);
  });

  it('set logged to true inside the state when a sigin request succeds', () => {
    const expectedState = { logged: true };
    const mockAction = { type: SUCCESS_SIGN_IN };

    expect(reducer(undefined, mockAction)).toEqual(expectedState);
  });
});
