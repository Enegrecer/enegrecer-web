import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GradeCampos from '../comum/gradeCampos/GradeCampos';
import Carregamento from '../comum/carregamento/Carregamento';
import './visualizarDenuncia.css';
import { buscaDenunciaPorId } from '../../actions/visualizarDenunciaActions';

function detalhesOuCarregamento(denuncia) {
  let componente;

  if (denuncia) {
    const dadosDenunciante =
    {
      titulo: 'Dados do denunciante',
      camposEsquerda: [
        {
          titulo: 'Nome denunciante',
          descricao: denuncia ? `${denuncia.denunciante.nome}` : ''
        },
        {
          titulo: 'Telefone',
          descricao: denuncia ? `${denuncia.denunciante.telefone}` : ''
        },
        {
          titulo: 'Gênero',
          descricao: denuncia ? `${denuncia.denunciante.genero}` : ''
        },
        {
          titulo: 'Raça / Cor',
          descricao: denuncia ? `${denuncia.denunciante.raca}` : ''
        }
      ],
      camposDireita: [
        {
          titulo: 'Email',
          descricao: denuncia ? `${denuncia.denunciante.email}` : ''
        },
        {
          titulo: 'Cidade',
          descricao: denuncia ? `${denuncia.denunciante.cidade}` : ''
        },
        {
          titulo: 'Data de nascimento',
          descricao: denuncia ? `${denuncia.denunciante.dataNascimento}` : ''
        }
      ]
    };

    const dadosVitima =
    {
      titulo: 'Dados da vítima',
      camposEsquerda: [
        {
          titulo: 'Nome',
          descricao: denuncia ? `${denuncia.vitima.nome}` : ''
        },
        {
          titulo: 'Telefone',
          descricao: denuncia ? `${denuncia.vitima.telefone}` : ''
        },
        {
          titulo: 'Gênero',
          descricao: denuncia ? `${denuncia.vitima.genero}` : ''
        }
      ],
      camposDireita: [
        {
          titulo: 'Data de nascimento',
          descricao: denuncia ? `${denuncia.vitima.dataNascimento}` : ''
        },
        {
          titulo: 'Cidade',
          descricao: denuncia ? `${denuncia.vitima.cidade}` : ''
        },
        {
          titulo: 'Raça / Cor',
          descricao: denuncia ? `${denuncia.vitima.raca}` : ''
        }
      ]
    };

    const dadosInformacoesLegais =
    {
      titulo: 'Informações legais',
      camposEsquerda: [
        {
          titulo: 'Número do BO',
          descricao: denuncia ? `${denuncia.informacoesLegais.numeroBoletim}` : ''
        },
        {
          titulo: 'Número do processo',
          descricao: denuncia ? `${denuncia.informacoesLegais.numeroProcesso}` : ''
        }
      ],
      camposDireita: [
        {
          titulo: 'Categoria do crime no BO',
          descricao: denuncia ? `${denuncia.informacoesLegais.categoria}` : ''
        },
        {
          titulo: 'Orgão',
          descricao: denuncia ? `${denuncia.informacoesLegais.orgao}` : ''
        }
      ]
    };

    const dadosAgressor =
    {
      titulo: 'Dados do agressor',
      camposEsquerda: [
        {
          titulo: 'Nome',
          descricao: denuncia ? `${denuncia.agressor.nome}` : ''
        },
        {
          titulo: 'Cidade',
          descricao: denuncia ? `${denuncia.agressor.cidade}` : ''
        },
        {
          titulo: 'Raça / Cor',
          descricao: denuncia ? `${denuncia.agressor.raca}` : ''
        }
      ],
      camposDireita: [
        {
          titulo: 'Data de nascimento',
          descricao: denuncia ? `${denuncia.agressor.dataNascimento}` : ''
        },
        {
          titulo: 'Gênero',
          descricao: denuncia ? `${denuncia.agressor.genero}` : ''
        }
      ]
    };

    componente = (
      <div>
        <div className="titulo">
        Detahes da denúncia
        </div>
        <div className="detalhes">
          <div className="grade-superior">
            <GradeCampos dados={dadosDenunciante} />
            <GradeCampos dados={dadosVitima} />
          </div>
          <div className="grade-inferior">
            <GradeCampos dados={dadosInformacoesLegais} />
            <GradeCampos dados={dadosAgressor} />
          </div>
        </div>
      </div>
    );
  } else {
    componente = (<Carregamento />);
  }

  return componente;
}

class VisualizarDenuncia extends Component {
  componentDidMount() {
    const { denunciaId } = this.props.match.params;
    this.props.buscaDenunciaPorId(denunciaId);
  }

  render() {
    const { denuncia } = this.props;

    return (
      <div className="receptaculo">
        {detalhesOuCarregamento(denuncia)}
      </div>
    );
  }
}

VisualizarDenuncia.propTypes = {
  buscaDenunciaPorId: PropTypes.func.isRequired,
  match: {
    params: {
      denunciaId: PropTypes.string
    }
  }.isRequired,
  denuncia: PropTypes.shape({
    agressao: PropTypes.shape,
    agressor: PropTypes.shape,
    denunciante: PropTypes.shape,
    informacoesLegais: PropTypes.shape,
    vitima: PropTypes.shape
  })
};

VisualizarDenuncia.defaultProps = {
  denuncia: undefined,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  buscaDenunciaPorId,
}, dispatch);

function mapStateToProps(state) {
  return {
    denuncia: state.visualizarDenunciaReducer.denuncia
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VisualizarDenuncia));
