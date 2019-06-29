import React from 'react';
import SecaoDaPagina from './componentes/SecaoDaPagina';

const DepoisDaDenuncia = () => (
  <div>
    <SecaoDaPagina
      tituloDaSecao1="E depois"
      tracoVermelho="bloco_retangular"
      tituloDaSecao2="da denúncia?"
      textoDoBloco="Posteriormente a denúncia, o caso poderá ser encaminhado à justiça. No caso de injúria racial, existe a necessidade de a proposição da ação penal acontecer no prazo de seis meses. Além disso, faz-se necessária a presença de advogado ou defensor público, caso a pessoa não tenha condições de arcar com os honorários de um advogado. Como já mencionado, também é possível a reparação civil pelos danos sofridos. No caso de crimes raciais previstos pela Lei Caó, vale lembrar que a competência para o ingresso da ação penal é do Ministério Público, nos estados."
      ladoTexto="esquerdo"
      imagemSecao="https://firebasestorage.googleapis.com/v0/b/enegrecer-e37b3.appspot.com/o/fotos%2Fdepois-denuncia-3.jpg?alt=media&token=e5d639c9-6dd9-45f6-94b0-847edd65e432"
      nomeFoto="mulher negra"
    />

    <SecaoDaPagina
      nomeDaClasse="segundo__bloco-proximos-passos"
      textoDoBloco="Nos casos de violações de direitos difusos e coletivos, é importante que se procure as Procuradorias Regionais dos Direitos do Cidadão nos estados, além da Defensoria Pública da União e da própria Procuradoria Federal dos Direitos do Cidadão. Pois assim, as mesmas darão proteção às vítimas e apoio necessário."
      ladoTexto="direito"
      imagemSecao="https://firebasestorage.googleapis.com/v0/b/enegrecer-e37b3.appspot.com/o/fotos%2Fdepois-denuncia-2.jpg?alt=media&token=7b53de21-63a8-440a-a1a2-ae57121c8034"
      nomeFoto="homem negro"
    />


  </div>
);

export default DepoisDaDenuncia;
