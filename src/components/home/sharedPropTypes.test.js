import PropTypes from 'prop-types';

import { withHistoryPropTypes } from './sharedPropTypes';

describe('withHistoryPropTypes', () => {
  it('retorna propTypes com o history', () => {
    const resultado = withHistoryPropTypes({ outroValor: PropTypes.string });

    expect(resultado.history).not.toBeUndefined();
    expect(resultado.outroValor).not.toBeUndefined();
  });
});
