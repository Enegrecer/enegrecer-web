import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GradeCampos from '../comum/gradeCampos/GradeCampos';
import Carregamento from '../comum/carregamento/Carregamento';
import Combobox from '../comum/combobox';
import './visualizarDenuncia.css';
import { buscaDenunciaPorId } from '../../actions/visualizarDenunciaActions';

function detalhesOuCarregamento(denuncia) {
  const { denunciante, agressor, vitima } = denuncia.pessoasEnvolvidas;
  let componente;

  if (denuncia) {
    const dadosDenunciante =
    {
      titulo: 'Dados do denunciante',
      camposEsquerda: [
        {
          id: 1,
          titulo: 'Nome denunciante',
          descricao: denuncia ? `${denunciante.nome}` : ''
        },
        {
          id: 2,
          titulo: 'Telefone',
          descricao: denuncia ? `${denunciante.telefone}` : ''
        },
        {
          id: 3,
          titulo: 'Gênero',
          descricao: denuncia ? `${denunciante.genero}` : ''
        },
        {
          id: 4,
          titulo: 'Raça / Cor',
          descricao: denuncia ? `${denunciante.raca}` : ''
        }
      ],
      camposDireita: [
        {
          id: 1,
          titulo: 'Email',
          descricao: denuncia ? `${denunciante.email}` : ''
        },
        {
          id: 2,
          titulo: 'Cidade',
          descricao: denuncia ? `${denunciante.cidade}` : ''
        },
        {
          id: 3,
          titulo: 'Data de nascimento',
          descricao: denuncia ? `${denunciante.dataNascimento}` : ''
        }
      ]
    };

    const dadosVitima =
    {
      titulo: 'Dados da vítima',
      camposEsquerda: [
        {
          id: 1,
          titulo: 'Nome',
          descricao: denuncia ? `${vitima.nome}` : ''
        },
        {
          id: 2,
          titulo: 'Telefone',
          descricao: denuncia ? `${vitima.telefone}` : ''
        },
        {
          id: 3,
          titulo: 'Gênero',
          descricao: denuncia ? `${vitima.genero}` : ''
        }
      ],
      camposDireita: [
        {
          id: 1,
          titulo: 'Data de nascimento',
          descricao: denuncia ? `${vitima.dataNascimento}` : ''
        },
        {
          id: 2,
          titulo: 'Cidade',
          descricao: denuncia ? `${vitima.cidade}` : ''
        },
        {
          id: 3,
          titulo: 'Raça / Cor',
          descricao: denuncia ? `${vitima.raca}` : ''
        }
      ]
    };

    const dadosInformacoesLegais =
    {
      titulo: 'Informações legais',
      camposEsquerda: [
        {
          id: 1,
          titulo: 'Número do BO',
          descricao: denuncia ? `${denuncia.informacoesLegais.numeroBoletim}` : ''
        },
        {
          id: 2,
          titulo: 'Número do processo',
          descricao: denuncia ? `${denuncia.informacoesLegais.numeroProcesso}` : ''
        }
      ],
      camposDireita: [
        {
          id: 1,
          titulo: 'Categoria do crime no BO',
          descricao: denuncia ? `${denuncia.informacoesLegais.categoria}` : ''
        },
        {
          id: 2,
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
          id: 1,
          titulo: 'Nome',
          descricao: denuncia ? `${agressor.nome}` : ''
        },
        {
          id: 2,
          titulo: 'Cidade',
          descricao: denuncia ? `${agressor.cidade}` : ''
        },
        {
          id: 3,
          titulo: 'Raça / Cor',
          descricao: denuncia ? `${agressor.raca}` : ''
        }
      ],
      camposDireita: [
        {
          id: 1,
          titulo: 'Data de nascimento',
          descricao: denuncia ? `${agressor.dataNascimento}` : ''
        },
        {
          id: 2,
          titulo: 'Gênero',
          descricao: denuncia ? `${agressor.genero}` : ''
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
        <div className="classificar-denuncia">
          <div className="titulo-classificar-denuncia">
            Classifique a denúncia
          </div>
          <div className="separador" />
          <div className="detalhes-classificar-denuncia">
            <Combobox itens={['Injúria Racial', 'Racismo']} className="detalhes-combo-classificar-denuncia" />
            <div className="detalhes-botoes-classificar-denuncia">
              <input className="remover-denuncia" type="button" value="Deletar" />
              <input type="button" className="aceitar-denuncia" value="aceitar denúncia" />
            </div>
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
        {denuncia && detalhesOuCarregamento(denuncia)}
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
