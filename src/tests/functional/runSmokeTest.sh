#!/bin/sh

echo Instalando o Protractor globalmente...
yarn global add protractor

if [ "$?" -eq "0" ]; then
    echo Atualizando o servidor do Selenium...
    webdriver-manager update
    if [ "$?" -eq "0" ]; then
        echo Iniciando o servidor...
        webdriver-manager start --detach
        if [ "$?" -eq "0" ]; then
            echo Executando os testes...
            protractor functional-tests.conf.js
            if [ "$?" -eq "0" ]; then
                echo Parando o servidor...
                webdriver-manager shutdown
                if [ "$?" -eq "0" ]; then
                    echo O servidor foi parado com sucesso!
                    else
                    echo O encerramento do servidor falhou e retornou o código "$?"!
                fi
                else
                echo A execução dos testes falhou e retornou o código "$?"!
            fi
            else
            echo A iniciação do servidor falhou e retornou o código "$?"!
        fi
        else
        echo A atualização do servidor falhou e retornou o código "$?"!
    fi
    else
    echo A instalação do Protractor falhou e retornou o código "$?"!
fi