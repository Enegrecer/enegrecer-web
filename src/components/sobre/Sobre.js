import React from 'react';
import Colaborador from './componentes/Colaborador';
import { colaboradores } from './colaboradores';
import imagem from '../../imagens/sobre.jpg';
import './css/sobre.css';

const Sobre = () => (
  <div id="about">
    <div className="row about_section">
      <div className="col s6 colspan_ignore_padding">
        <img alt="Foto ilustrativa do Verdade Seja Dita" src={imagem} />
      </div>

      <div className="col s6 content">
        <h1 id="sobre">Sobre</h1>
        <h1>Verdade Seja</h1>
        <h1>Dita</h1>

        <p>
          Somos mulheres e homens e definimos a nossa atuação na defesa e promoção
          dos direitos da população negra e na construção de uma sociedade onde os
          valores de justiça, equidade e solidariedade são fundamentais.
          Consideramos o racismo e a discriminação racial como mecanismos
          combinados que estruturam as relações sociais, cujos resultados diretos
          se expressam em prejuízos para as negras e negros. O racista brasileiro
          não tem nada de cordial e amistoso como muitos imaginam e sustentam. Pelo
          contrário. Nosso objetivo é criar e aplicar novas tecnologias para a
          luta política dos negros e negras contra o racismo; produzindo sobre o
          contexto atual das questões envolvendo os nossos direitos.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col s12 volunteer_section">
        <div className="description">
          <div className="col s4">
            <div className="title_detail">
              <h1 id="quem-passou-por-aqui">Quem</h1>
              <div className="retangular-bloco" />
            </div>
            <h1 >passou por aqui</h1>
          </div>

          <p className="col s8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <div>
          {
            colaboradores().map(colaborador => (
              <Colaborador
                key={colaborador.nome}
                nome={colaborador.nome}
                papel={colaborador.papel}
                foto={colaborador.foto}
              />
            ))
          }
        </div>
      </div>
    </div>
  </div>
);

export default Sobre;
