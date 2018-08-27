#!/bin/bash

echo Instalando o Protractor globalmente...

    yarn global add protractor

echo Atualizando o servidor do Selenium...

    if [$ == true]
    then webdriver-manager update
    else exit $
    fi

echo Iniciando o servidor...

    if [$1 == true]
    then webdriver-manager start --detach
    else exit $1
    fi

echo Executando os testes...

    if [$2 == true]
    then protractor functional-tests.conf.js
    else exit $2
    fi

echo Parando o servidor...

    if [$3 == true]
    then webdriver-manager shutdown
    else exit $3
    fi

exit
