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

  loginError(email, password){
    if(email == ''){
      cy.get(loginElem.login.password).type(password)
      cy.get(loginElem.signInButton).click()
    }else if(password == ''){
      cy.get(loginElem.login.email).type(email)
      cy.get(loginElem.signInButton).click()
    }else{
      cy.get(loginElem.login.email).type(email)
      cy.get(loginElem.login.password).type(password)
      cy.get(loginElem.signInButton).click()
    }
  }

  validatePage(){
    cy.url().should('contain', 'authentication')
  }

  validateErrorMessage(message){
    cy.get(loginElem.errorMessage).should('contain', message)
  }
}

export default new loginPage();