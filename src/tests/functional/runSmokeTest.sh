#!/bin/bash

echo Instalando o Protractor globalmente...

    yarn global add protractor

    echo "$?"

echo Atualizando o servidor do Selenium...

echo "$?"

    if ["$?" -eq "0"]; then
        echo Atualizando o servidor do Selenium...
        webdriver-manager update
    else
        echo A atualização do servidor falhou e retornou o código "$?"!
        exit $?
    fi

echo Iniciando o servidor...

    if [$? = 0];
        then webdriver-manager start --detach
        else exit $?
    fi

echo Executando os testes...

    if [$? = 0];
        then protractor functional-tests.conf.js
        else exit $?
    fi

echo Parando o servidor...

    if [$? = 0];
        then webdriver-manager shutdown
        else exit $?
    fi

exit
