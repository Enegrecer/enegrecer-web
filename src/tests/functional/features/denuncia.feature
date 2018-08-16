Feature: Denúncia
    Scenario: Realizar o cadastro de uma denúncia
        Given O usuário acessa a página de cadastrar denúncia
        When O usuário preenche os campos para o cadastro da denúncia
        And O usuário confirma o cadastro da denúncia
        Then A denúncia é salva com sucesso e o usuário é redirecionado para página "depois-denuncia"
        