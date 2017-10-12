[![Build Status](https://travis-ci.org/Enegrecer/enegrecer-web.svg?branch=master)](https://travis-ci.org/Enegrecer/enegrecer-web)
[![Test Coverage](https://codeclimate.com/github/Enegrecer/enegrecer-web/badges/coverage.svg)](https://codeclimate.com/github/Enegrecer/enegrecer-web/coverage)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/Enegrecer/enegrecer-web)

# Contribuindo

## Informações

[Para mais informações, acesse a nossa wiki :)](https://github.com/Enegrecer/enegrecer-web/wiki).

Ou junte-se ao nosso espaço no [Gitter](https://gitter.im/Coletivo-Enegrecer/Enegrecer).

Nós usamos o [waffle](https://waffle.io/Enegrecer/enegrecer-web) para visualizar e organizar nossas issues.

## Tech stack

Na nossa stack temos:
* [Docker](docker.com) para conteinerização da aplicação localmente
* [React](https://facebook.github.io/react/) para criação do UI em componentes
* [Redux](http://redux.js.org/) para controle do estado da aplicação
* [Redux-Saga](https://redux-saga.js.org/) para gerenciamento de chamadas assíncronas dentro do redux
* [Babel](https://babeljs.io/) como transpilador que permite que tais componentes sejam escritos utilizando [ES8](http://www.ecma-international.org/ecma-262/8.0/index.html).
* [Webpack](https://webpack.github.io/) para servidor local de desenvolvimento, compilação, e bundling do código
* [Jest](https://facebook.github.io/jest/) como framework de testes
* [Enzyme](http://airbnb.io/enzyme/) para auxiliar nos testes
* [Eslint](http://eslint.org/) como ferramenta de linter
* [Firebase](https://firebase.google.com/) Como hosting e back-end mantendo controle de dados, usuários, etc
* [Travis-CI](https://travis-ci.org/) para criar nosso CI, executar testes e build automaticamente
* [Code Climate](https://codeclimate.com/github/Enegrecer/enegrecer-web) para cobertura de código e análise estática

**Antes de começar tenha na máquina**

- [Docker](docker.com)

A imagem do Docker é construída com a imagem [`kkarczmarczyk/node-yarn`](https://hub.docker.com/r/kkarczmarczyk/node-yarn/).
O projeto utiliza gerenciador de pacote [`yarn`](https://yarnpkg.com).

# Rodando o projeto localmente

Construa a imagem
`docker build -t enegrecer-web .`

Rode o comando `docker run --rm --name enegrecer-web -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -t enegrecer-web yarn start`

# Rodar testes

`docker run --rm --name enegrecer-web -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -it enegrecer-web yarn test`

Aparecerá uma tela para escolher o modo de teste.

# Lint

`docker run --rm --name enegrecer-web -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -t enegrecer-web yarn lint`
