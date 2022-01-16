@register
Feature: Cadastro de novo Usuário

Scenario: Cadastro de novo usuários
  Given que esteja na página de Login
  And possua um email válido
  When preencher o cadastro com dados válidos
  Then deverá ser direcionado para a página 'my-account'
  And deverá ser exibido o nome do usuário no header