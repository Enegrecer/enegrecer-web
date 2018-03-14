import PropTypes from 'prop-types';

export function withHistoryPropTypes(propTypes) {
  return {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    ...propTypes,
  };
}

// Remover quando houver mais de uma função no arquivo
export default withHistoryPropTypes;
