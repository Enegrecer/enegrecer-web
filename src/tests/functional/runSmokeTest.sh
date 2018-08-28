#!/bin/bash

echo Instalando o Protractor globalmente...

    yarn global add protractor

echo Atualizando o servidor do Selenium...

    ra1 = $?;
    if [ra1 = 0]
    then webdriver-manager update
    else exit $0
    fi

echo Iniciando o servidor...

    if [$? = 0]
    then webdriver-manager start --detach
    else exit $1
    fi

echo Executando os testes...

    if [$? = 0]
    then protractor functional-tests.conf.js
    else exit $2
    fi

echo Parando o servidor...

    if [$? = 0]
    then webdriver-manager shutdown
    else exit $3
    fi

exit
