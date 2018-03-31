import React from 'react';
import imagemMaos from '../../imagens/depois-denuncia-1.jpg';
import imagemHomemNegro from '../../imagens/depois-denuncia-2.jpg';
import imagemMulherNegra from '../../imagens/depois-denuncia-3.jpg';
import SecaoDaPagina from './componentes/SecaoDaPagina';

const DepoisDaDenuncia = () => (
  <div>
    <SecaoDaPagina
      tituloDaSecao1="E depois"
      tracoVermelho="bloco_retangular"
      tituloDaSecao2="da denúncia?"
      textoDoBloco="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque eget lectus eget ex viverra laoreet. Sed vitae massa
            vitae tortor pretium rutrum. Fusce in mattis urna, a lobortis
            elit. Suspendisse id maximus neque, non tincidunt ex. Mauris
            justo neque, finibus eget posuere at, pharetra a lectus. Etiam
            at risus sit amet nunc commodo ullamcorper vel non enim. Ut
            placerat scelerisque fermentum. Etiam fermentum convallis ipsum
            eget dapibus. Cras ut libero et dolor eleifend bibendum. Phasellus
            maximus nibh in sem congue cursus. Fusce vitae mi quis magna
            rutrum ultricies. Aenean ullamcorper dapibus lacinia. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Quisque eget lectus
            eget ex viverra laoreet. Sed vitae massa vitae tortor pretium
            rutrum. Fusce in mattis urna, a lobortis elit."
      ladoTexto="esquerdo"
      imagemSecao={imagemMaos}
      nomeFoto="maos de pessoas negras"
    />

    <SecaoDaPagina
      nomeDaClasse="segundo__bloco-proximos-passos"
      textoDoBloco="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque eget lectus eget ex viverra laoreet. Sed vitae massa
            vitae tortor pretium rutrum. Fusce in mattis urna, a lobortis
            elit. Suspendisse id maximus neque, non tincidunt ex. Mauris
            justo neque, finibus eget posuere at, pharetra a lectus. Etiam
            at risus sit amet nunc commodo ullamcorper vel non enim. Ut
            placerat scelerisque fermentum. Etiam fermentum convallis ipsum
            eget dapibus. Cras ut libero et dolor eleifend bibendum. Phasellus
            maximus nibh in sem congue cursus. Fusce vitae mi quis magna
            rutrum ultricies. Aenean ullamcorper dapibus lacinia. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Quisque eget lectus
            eget ex viverra laoreet. Sed vitae massa vitae tortor pretium
            rutrum. Fusce in mattis urna, a lobortis elit."
      ladoTexto="direito"
      imagemSecao={imagemHomemNegro}
      nomeFoto="homem negro"
    />

    <SecaoDaPagina
      nomeDaClasse="terceiro__bloco-proximos-passos"
      tituloDaSecao1="E depois"
      tracoVermelho="bloco_retangular"
      tituloDaSecao2="da denúncia?"
      textoDoBloco="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque eget lectus eget ex viverra laoreet. Sed vitae massa
            vitae tortor pretium rutrum. Fusce in mattis urna, a lobortis
            elit. Suspendisse id maximus neque, non tincidunt ex. Mauris
            justo neque, finibus eget posuere at, pharetra a lectus. Etiam
            at risus sit amet nunc commodo ullamcorper vel non enim. Ut
            placerat scelerisque fermentum. Etiam fermentum convallis ipsum
            eget dapibus. Cras ut libero et dolor eleifend bibendum. Phasellus
            maximus nibh in sem congue cursus. Fusce vitae mi quis magna
            rutrum ultricies. Aenean ullamcorper dapibus lacinia. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Quisque eget lectus
            eget ex viverra laoreet. Sed vitae massa vitae tortor pretium
            rutrum. Fusce in mattis urna, a lobortis elit."
      ladoTexto="esquerdo"
      imagemSecao={imagemMulherNegra}
      nomeFoto="mulher negra"
    />
  </div>
);

export default DepoisDaDenuncia;
