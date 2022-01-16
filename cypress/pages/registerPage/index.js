/// <reference types="Cypress"/>

const registerElem = require('./elements').registerElements;
let gender

class registerPage {
  fillOutForm() {
    cy.fixture('randomUser').then((user)=>{
      gender = user.gender

      if(gender == 'Male'){
        cy.get(registerElem.radioGenderMale).check()
      }else if(gender == 'Female'){
        cy.get(registerElem.radioGenderFemale).check()
      }
      cy.get(registerElem.inputFirstName).type(user.firstName)
      cy.get(registerElem.inputLastName).type(user.lastName)

      cy.get(registerElem.inputEmail).should('value', user.email)
      
      cy.get(registerElem.inputPassword).type(user.password)
      cy.get(registerElem.selectDayOfBirth).select(user.birthdate.day)
      cy.get(registerElem.selectMonthOfBirth).select(user.birthdate.month)
      cy.get(registerElem.selectYearOfBirth).select(user.birthdate.year)
      cy.get(registerElem.checkboxNewsletter).check()
      cy.get(registerElem.checkboxOffers).check()

      cy.get(registerElem.inputAddressFirstName).should('value', user.firstName)
      cy.get(registerElem.inputAddressLastName).should('value', user.lastName)

      cy.get(registerElem.inputCompanyName).type(user.companyName)
      cy.get(registerElem.inputAddress).type(user.address)
      cy.get(registerElem.inputComplement).type(user.complement)
      cy.get(registerElem.inputCity).type(user.city)
      cy.get(registerElem.selectState).select(user.state)
      cy.get(registerElem.inputPostCode).type(user.zipCode)
      cy.get(registerElem.inputAdditionalInfos).type(user.additionalInfo)
      cy.get(registerElem.inputHomePhone).type(user.homePhone)
      cy.get(registerElem.inputMobilePhone).type(user.mobilePhone)
      cy.get(registerElem.inputAddressAlias).clear()
        .type(user.alias)
      cy.contains(registerElem.buttonRegister).click()
    })
  }
}

export default new registerPage