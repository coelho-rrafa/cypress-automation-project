const accountElem = require('./elements').myAccountElements;

class accountPage{
  validateLogin(){
    cy.fixture('validUser').then((user)=>{
      cy.get(accountElem.userLoggedName).should('contain', user.userName)
    })
  }

  validateAccountPage(pageName){
    cy.get(accountElem.accountBreadcrumb).should('contain', pageName)
  }

  validateRedirect(pageName) {
    cy.url()
      .should('contain', pageName)
  }

  validateUser(){
    cy.fixture('randomUser').then((user)=>{
      cy.get(accountElem.userLoggedName).should('contain', `${user.firstName} ${user.lastName}`)
    })
  }
}

export default new accountPage