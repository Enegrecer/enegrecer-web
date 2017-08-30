import reducer from './reducer';

describe('reducer', () => {
  it('returns state unchanged', () => {
    const mockState = { items: [] };

    expect(reducer(mockState, {})).toEqual(mockState);
  });
});
