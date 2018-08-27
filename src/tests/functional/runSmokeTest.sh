#!/bin/bash

echo Instalando o Protractor globalmente...

    yarn global add protractor

echo Atualizando o servidor do Selenium...

    webdriver-manager update

echo Iniciando o servidor...

    webdriver-manager start --detach

echo Executando os testes...

    protractor functional-tests.conf.js

echo Parando o servidor...

    webdriver-manager shutdown

exit
