import React from 'react';
import Colaborador from './componentes/Colaborador';
import { colaboradores } from './colaboradores';
import './css/sobre.css';

const Sobre = () => (
  <div className="row sobre">
    <div className="secao_sobre">
      <div className="col s12 m6 foto_sobre">
        <img alt="Foto ilustrativa do Verdade Seja Dita" src="https://firebasestorage.googleapis.com/v0/b/enegrecer-e37b3.appspot.com/o/fotos%2Fsobre.jpg?alt=media&token=3646a7f1-71af-4443-b1fb-36ec5dfa3b89" />
      </div>
      <div className="col s12 m6 conteudo">
        <div className="detalhe_titulo">
          <h1 id="sobre">Sobre</h1>
          <div className="traco-vermelho" />
        </div>
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

    <div className="descricao_voluntario">
      <div className="col s12 secao_voluntarios">
        <div className="conteudo">
          <div className="col s12 m4 titulo_voluntarios">
            <div className="detalhe_titulo">
              <h1 id="quem-passou-por-aqui">Quem</h1>
              <div className="traco-vermelho" />
            </div>
            <h1>passou por</h1>
            <h1>aqui</h1>
          </div>

          <p className="col s12 m8 texto_voluntarios">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="col s12 colaboradores">
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
);

export default Sobre;
