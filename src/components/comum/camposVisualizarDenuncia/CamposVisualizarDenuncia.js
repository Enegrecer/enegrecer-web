import React from 'react';
import PropTypes from 'prop-types';

export const CamposVisualizarDenuncia = ({ titulo, descricao }) => (
  <div className="campos">
    <div className="camposTitulo">
      {titulo}
    </div>
    <div className="camposDescricao">
      {descricao}
    </div>
  </div>
);

CamposVisualizarDenuncia.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired
};

export default CamposVisualizarDenuncia;
