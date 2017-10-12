# Coletivo Enegrecer
[![Build Status](https://travis-ci.org/Enegrecer/enegrecer-web.svg?branch=master)](https://travis-ci.org/Enegrecer/enegrecer-web)
[![Test Coverage](https://codeclimate.com/github/Enegrecer/enegrecer-web/badges/coverage.svg)](https://codeclimate.com/github/Enegrecer/enegrecer-web/coverage)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/Enegrecer/enegrecer-web)

Informações para contribuir no projeto você pode encontrar no contributing.md.

### Neste Wiki
* [O Projeto](#o-projeto)
* [Configurações](#configurações)
  * [Rodando o projeto](#rodando-o-projeto)
  * [Testes](#testes)
  * [Lint](#lint)
  * [Build](#build)
* [Deploy](#deploy)
* [Tech Stack](#tech-stack)
* [Mais Informações](#mais-informações)

## O Projeto

O coletivo nacional de Juventude Enegrecer é uma expressão do movimento social negro que luta contra as opressões da sociedade em favor da juventude negra. O projeto se propõe como uma plataforma para registrar denúncias de crimes raciais, a fim de se coletar dados para embasar e guiar ações e políticas antirracismo.

O Web App implementado neste respositório é uma das interfaces para essa plataforma, onde o usuário pode se informar mais a respeito e relatar um crime.


## Deploy

Atualmente o projeto está rodando em [https://enegrecer-e37b3.firebaseapp.com/](https://enegrecer-e37b3.firebaseapp.com/), sendo o Firebase o host e também responsável pelo controle de usuários e banco de dados da aplicação. A atualização ocorre automaticamente através do [Travis-CI](https://travis-ci.org/Enegrecer/enegrecer-web), que monitora por modificações na branch master deste repositório, e executa passos de lint, testes e deploy para o Firebase.

## Tech stack

Na nossa stack temos:
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

## Mais Informações

[Para mais informações, acesse a nossa wiki :)](https://github.com/Enegrecer/enegrecer-web/wiki).

Ou junte-se ao nosso espaço no [Gitter](https://gitter.im/Coletivo-Enegrecer/Enegrecer).

Nós usamos o [waffle](https://waffle.io/Enegrecer/enegrecer-web) para visualizar e organizar nossas issues.
