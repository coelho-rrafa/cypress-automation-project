// Import das Pages utilizadas
import loginPage from '../../pages/loginPage';
import myAccountPage from '../../pages/myAccountPage'

Given('que esteja na página de Login', () => {
  loginPage.accessAndValidateLoginPage()
});

When('efetuar login com dados válidos', () => {
  loginPage.loginIntoSystem()
});

When('efetuar login com dados inválidos', (datatable) => {
  datatable.hashes().forEach(element => {
    loginPage.loginError(element.email, element.password)
  })
});

Then('deverá ser redirecionado para página {string}', (expectedPage) => {
  myAccountPage.validateAccountPage(expectedPage)
});

Then('não deverá ser redirecionado para a área do usuário', () => {
  loginPage.validatePage()
});

Then('deverá exibir o nome do usuário no header', () => {
  myAccountPage.validateLogin()
});

Then('deverá exibir a mensagem {string}', (errorMessage) => {
  loginPage.validateErrorMessage(errorMessage)
})