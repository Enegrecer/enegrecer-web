function carregarFoto(nomeArquivo) {
  return require(`../../imagens/pessoas/${nomeArquivo}`);
}

export function colaboradores() {
  return [
    {
      nome: 'Alisson Pereira',
      papel: 'QA',
      foto: carregarFoto('alisson-pereira.jpg'),
    },
    {
      nome: 'Ayrton Araújo',
      papel: 'DEV',
      foto: carregarFoto('ayrton-araujo.jpg'),
    },
    {
      nome: 'Bárbara Sanches',
      papel: 'BA',
      foto: carregarFoto('barbara-sanches.jpg'),
    },
    {
      nome: 'Bárbara Tomaz',
      papel: 'XD',
      foto: carregarFoto('barbara-tomaz.jpg'),
    },
    {
      nome: 'Caique Peixoto',
      papel: 'DEV',
      foto: carregarFoto('caique-peixoto.jpeg'),
    },
    {
      nome: 'Daniel Faria',
      papel: 'DEV',
      foto: carregarFoto('daniel-faria.png'),
    },
    {
      nome: 'Débora Beda',
      papel: 'DEVa',
      foto: carregarFoto('debora-beda.jpg'),
    },
    {
      nome: 'Edlaine Zamora',
      papel: 'DEVa',
      foto: carregarFoto('edlaine-zamora.jpeg'),
    },
    {
      nome: 'Egileu Trajano',
      papel: 'QA',
      foto: carregarFoto('egileu-trajano.jpg'),
    },
    {
      nome: 'Erika Silva',
      papel: 'DEVa',
      foto: carregarFoto('erika-silva.jpg'),
    },
    {
      nome: 'Gabriel Pereira',
      papel: 'DEV',
      foto: carregarFoto('gabriel-pereira.jpg'),
    },
    {
      nome: 'Gabriela Matos',
      papel: 'DEVa',
      foto: carregarFoto('gabriela-matos.png'),
    },
    {
      nome: 'Izael Effemberg',
      papel: 'DEV',
      foto: carregarFoto('izael-effemberg.jpg'),
    },
    {
      nome: 'João Moreira',
      papel: 'DEV',
      foto: carregarFoto('joao-moreira.jpeg'),
    },
    {
      nome: 'Kamila Serafim',
      papel: 'QA',
      foto: carregarFoto('kamila-serafim.jpg'),
    },
    {
      nome: 'Karla Falcão',
      papel: 'DEVa',
      foto: carregarFoto('default.jpg'),
    },
    {
      nome: 'Laura de Bella',
      papel: 'DEVa',
      foto: carregarFoto('laura-bella.jpg'),
    },
    {
      nome: 'Leandro Vicente',
      papel: 'DEV',
      foto: carregarFoto('leandro-vicente.jpeg'),
    },
    {
      nome: 'Lorena Souza',
      papel: 'DEVa',
      foto: carregarFoto('lorena-souza.png'),
    },
    {
      nome: 'Luciana Montenegro',
      papel: 'DEVa',
      foto: carregarFoto('luciana-montenegro.jpg'),
    },
    {
      nome: 'Marcella Souza',
      papel: 'DEVa',
      foto: carregarFoto('marcella-souza.jpg'),
    },
    {
      nome: 'Mariane Ferroni',
      papel: 'BA',
      foto: carregarFoto('mariane-ferroni.jpg'),
    },
    {
      nome: 'Mila Orrico',
      papel: 'BA',
      foto: carregarFoto('mila-orrico.jpg'),
    },
    {
      nome: 'Nayara Souza',
      papel: 'DEVa',
      foto: carregarFoto('nayara-souza.png'),
    },
    {
      nome: 'Paulo Gama',
      papel: 'DEV',
      foto: carregarFoto('paulo-gama.jpg'),
    },
    {
      nome: 'Priscila Rocha',
      papel: 'PM',
      foto: carregarFoto('priscila-rocha.jpg'),
    },
    {
      nome: 'Rosangela Mendes',
      papel: 'DEVa',
      foto: carregarFoto('rosangela-mendes.jpg'),
    },
    {
      nome: 'Roselma Mendes',
      papel: 'DEVa',
      foto: carregarFoto('roselma-mendes.png'),
    },
    {
      nome: 'Sérgio Luis',
      papel: 'BA',
      foto: carregarFoto('sergio-luis.jpg'),
    },
    {
      nome: 'Thais Lopes',
      papel: 'DEVa',
      foto: carregarFoto('thais-lopes.jpg'),
    },
    {
      nome: 'Tiago Megale',
      papel: 'BA',
      foto: carregarFoto('tiago-megale.jpg'),
    }
  ];
}
