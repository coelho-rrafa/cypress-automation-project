@login
Feature: Login

@successfully
Scenario: Realizar Login
  Given que esteja na página de Login 
  When efetuar login com dados válidos
  Then deverá ser redirecionado para página 'My account'
  And deverá exibir o nome do usuário no header

@unsuccessfully
Scenario Outline: Erro ao Realizar Login
  Given que esteja na página de Login
  When efetuar login com dados inválidos
    | email   | password   |
    | <email> | <password> |
  Then não deverá ser redirecionado para a área do usuário
  And deverá exibir a mensagem '<mensagem>'
Examples:
    | email                   | password    | mensagem                   |
    |                         | abc123      | An email address required. |
    | no_password@teste.com   |             | Password is required.      |
    | invalid_email@teste.com | abc123      | Authentication failed.     |
    | rafael@coelho.com       | teste       | Authentication failed.     |