# Projeto Automção 
Automatização dos testes do site Automation Pratice através do Cypress.

Automation Pratice: http://automationpractice.com/

# Instalação:

Nodejs: npm init -y

Cypress: npm i -D cypress

Cucumber: npm i -D cypress-cucumber-preprocessor

Faker: npm install faker

Faker BR: npm install faker-br

JSBrasil: npm install js-brasil

Mochawesome: npm i --save-dev mochawesome mochawesome-merge mochawesome-report-generator

CypressMochawesomeReporter: npm i --save-dev cypress-mochawesome-reporter

# Execução:

Testes com a interação da interface gráfica do Cypress: npm run cy:open

Testes apresentados dentro do terminal: npm run cy:run

Testes sem fechar o navegador rodando todas as features: npm run teste:e2e

Gerar um .json do report: npm run report:merge

Muda o arquivo gerado do merge .json para .html: npm run report:generate