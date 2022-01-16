/// <reference types="Cypress"/>

const loginElem = require("./elements").loginElements;
class loginPage{

  accessAndValidateLoginPage(){
    cy.visit(loginElem.pageUrl)
    cy.get(loginElem.breadcrumbLogin).should('contain', 'Authentication')
  }

  loginIntoSystem(){
    cy.fixture('validUser').then((user)=>{
      cy.get(loginElem.login.email).type(user.validEmail)
      cy.get(loginElem.login.password).type(user.validPassword)
      cy.get(loginElem.signInButton).click()
    })
  }

  setValidEmail(){
    cy.setFixtures()
    cy.fixture('randomUser').then((user)=>{
      cy.get(loginElem.createEmailInput).type(user.email)
      cy.get(loginElem.submitCreateButton).click()
    })
  }
}

export default new loginPage();