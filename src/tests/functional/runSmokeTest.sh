#!/bin/sh

GREEN='\033[0;32m'
PURPLE='\033[0;35m'
RED='\033[0;31m'
NC='\033[0m'

echo -e ${PURPLE}"\n\nInstalando o Protractor globalmente..."${NC}
yarn global add protractor

export StatusResult1=$?;
if [ $StatusResult1 -eq "0" ]; then
    echo -e ${PURPLE}"\n\nAtualizando o servidor do Selenium..."${NC}
    webdriver-manager update
    export StatusResult2=$?;
    if [ $StatusResult2 -eq "0" ]; then
        echo -e ${PURPLE}"\n\nIniciando o servidor..."${NC}
        webdriver-manager start --detach
        export StatusResult3=$?;
        if [ $StatusResult3 -eq "0" ]; then
            echo -e ${PURPLE}"\n\nExecutando os testes..."${NC}
            protractor functional-tests.conf.js
            export StatusResult4=$?;
            if [ $StatusResult4 -eq "0" ]; then
                echo -e ${PURPLE}"\n\nParando o servidor..."${NC}
                webdriver-manager shutdown
                export StatusResult5=$?;
                if [ $StatusResult5 -eq "0" ]; then
                    echo -e ${GREEN}"\n\nO servidor foi parado com sucesso!"${NC}
                    else
                    echo -e ${RED}"\n\nO encerramento do servidor falhou e retornou o código $StatusResult5!"${NC}
                    exit $StatusResult5
                fi
                else
                echo -e ${RED}"\n\nA execução dos testes falhou e retornou o código $StatusResult4!"${NC}
                exit $StatusResult4
            fi
            else
            echo -e ${RED}"\n\nA iniciação do servidor falhou e retornou o código $StatusResult3!"${NC}
            exit $StatusResult3
        fi
        else
        echo -e ${RED}"\n\nA atualização do servidor falhou e retornou o código $StatusResult2!"${NC}
        exit $StatusResult2
    fi
    else
    echo -e ${RED}"\n\nA instalação do Protractor falhou e retornou o código $StatusResult1!"${NC}
    exit $StatusResult1
fi