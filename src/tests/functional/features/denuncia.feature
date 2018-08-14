Feature: Denúncia
    Scenario: Realizar o cadastro de uma denúncia
        Given O usuário acessa a página de cadastrar denúncia
        When O usuário preenche o campo Nome com valor "Nome do Denunciante"
        And O usuário preenche o campo Email com valor "email@denunciante.com"
        And O usuário preenche o campo Descrição do Agressor com valor "Descrição do Agressor..."
        And O usuário confirma o cadastro da denúncia
        Then A denúncia é salva com sucesso e o usuário é redirecionado para página "depois-denuncia"