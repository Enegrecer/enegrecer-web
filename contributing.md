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

## Configurações

Primeiro clone o repositório
```shell
git clone https://github.com/Enegrecer/enegrecer-web.git
```

em seguida entre na pasta do projeto clonado e rode `yarn install` para baixar todas as dependencias
```shell
cd enegrecer-web
docker build -t enegrecer-web .
```

### Rodando o projeto

Para subir um servidor local para desenvolvimento rode

```shell
sh cli/start.sh
```

Isso irá subir um servidor com o aplicativo rodando em `http://localhost:3000`. Quando os arquivos dentro de `src` são alterados, automaticamente o código é recompilado e o aplicativo recarregado com as alterações.

Ao abrir o caminho `http://localhost:3000`, é normal a página aparecer em branco. Para acessar as opções, vá para `http://localhost:3000/painel`

Após efetuar login, a pessoa usuária ainda não está sendo redirecionada, então aguarde alguns segundos e acesse o menu novamente e escolha a opção desejada por favor.

### Testes

O projeto está configurado para que o desenvolvimento seja feito em TDD, e assim o script:

```shell
sh cli/enegrecer.sh t
```

irá rodar todos os arquivos de teste (arquivos __.test.js__) e entrar em modo de _watch_. De forma que toda vez que arquivos são alterados, sejam eles testes ou não, os testes que possuem qualquer relação com tal arquivo são executados novamente.

Por exemplo, se o componente __Signin__ for alterado, todos os testes de _Signin.test.js_ serão executados, mas também os testes de _Login.test.js_, pois o componente de __Login__ utiliza, ou depende, do componete de __Signin__, e assim por diante. O mesmo é válido para alterações em arquivos de teste.

O projeto está utilizando o [Jest](https://facebook.github.io/jest/) como framework de testes. O jest oferece praticamente tudo que é necessário para testes no projeto, definindo a sintaxe de escrita dos mesmos, provendo mocks, e atuando como test runner. Adicionalmente, o [enzyme](http://airbnb.io/enzyme/) é utilizado como facilitador dos testes de componentes do React.

### Lint

O [eslint](http://eslint.org/) é utilizado como linter do projeto. É recomendado que um plugin do mesmo seja utilizado em seu editor de preferência durante o desenvolvimento. Além disso é possível executar o lint de todo o projeto rodando o comando:

```shell
sh cli/enegrecer.sh l
```

E existe também o modo de watch que pode ser rodado com:

```shell
sh cli/enegrecer.sh ws
```

### Build

O comando

```shell
sh cli/enegrecer.sh b
```

roda o script de build, responsável por preparar o projeto para um deploy em produção. Os arquivos passam por um processo de minificação e bundling. Gerando arquivos mais concisos, e mais leves. Todo o resultado do script aparece na pasta build que será gerada dentro do projeto.
