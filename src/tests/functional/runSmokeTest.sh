#!/bin/bash

echo Instalando o Protractor globalmente...

    yarn global add protractor

echo Atualizando o servidor do Selenium...

    if [$ == true]
    then webdriver-manager update
    else exit

echo Iniciando o servidor...

    if [$1 == true]
    then webdriver-manager start --detach
    else exit

echo Executando os testes...

    if [$2 == true]
    then protractor functional-tests.conf.js
    else exit

echo Parando o servidor...

    if [$3 == true]
    then webdriver-manager shutdown
    else exit
