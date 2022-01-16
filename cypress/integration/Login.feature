@login
Feature: Login

  Scenario: RealizarLogin
    Given que esteja na página de Login 
    When efetuar login com dados válidos
    Then deverá ser redirecionado para página 'My account'
    And deverá exibir o nome do usuário no header