#!/bin/sh

echo Instalando o Protractor globalmente...
yarn global add protractor

export StatusResult1=$?;
if [ $StatusResult1 -eq "0" ]; then
    echo Atualizando o servidor do Selenium...
    webdriver-manager update
    export StatusResult2=$?;
    if [ $StatusResult2 -eq "0" ]; then
        echo Iniciando o servidor...
        webdriver-manager start --detach
        export StatusResult3=$?;
        if [ $StatusResult3 -eq "0" ]; then
            echo Executando os testes...
            protractor functional-tests.conf.js
            export StatusResult4=$?;
            if [ $StatusResult4 -eq "0" ]; then
                echo Parando o servidor...
                webdriver-manager shutdown
                export StatusResult5=$?;
                if [ $StatusResult5 -eq "0" ]; then
                    echo O servidor foi parado com sucesso!
                    else
                    echo O encerramento do servidor falhou e retornou o código $StatusResult5!
                    exit $StatusResult5
                fi
                else
                echo A execução dos testes falhou e retornou o código $StatusResult4!
                exit $StatusResult4
            fi
            else
            echo A iniciação do servidor falhou e retornou o código $StatusResult3!
            exit $StatusResult3
        fi
        else
        echo A atualização do servidor falhou e retornou o código $StatusResult2!
        exit $StatusResult2
    fi
    else
    echo A instalação do Protractor falhou e retornou o código $StatusResult1!
    exit $StatusResult1
fi