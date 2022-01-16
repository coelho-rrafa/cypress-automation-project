/// <reference types="Cypress"/>

import loginPage from "../../pages/loginPage"
import registerPage from "../../pages/registerPage";
import accountPage from "../../pages/myAccountPage"

Given('que esteja na página de Login', () => {
  loginPage.accessAndValidateLoginPage()
});

Given('possua um email válido', () => {
  loginPage.setValidEmail()
})

When('preencher o cadastro com dados válidos', () => {
  registerPage.fillOutForm()
})

Then('deverá ser direcionado para a página {string}', (myPage) => {
  accountPage.validateRedirect(myPage)
})

Then('deverá ser exibido o nome do usuário no header', () => {
  accountPage.validateUser()
})