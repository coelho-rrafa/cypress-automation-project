// Import das Pages utilizadas
import loginPage from '../../pages/loginPage';
import myAccountPage from '../../pages/myAccountPage'

Given('que esteja na página de Login', () => {
  loginPage.accessAndValidateLoginPage()
});

When('efetuar login com dados válidos', () => {
  loginPage.loginIntoSystem()
});

Then('deverá ser redirecionado para página {string}', (expectedPage) => {
  myAccountPage.validateAccountPage(expectedPage)
});

Then('deverá exibir o nome do usuário no header', () => {
  myAccountPage.validateLogin()
})