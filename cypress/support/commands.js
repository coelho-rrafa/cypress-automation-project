import faker from 'faker'
import fakerBr from 'faker-br'

const zipCode = fakerBr.address.zipCodeByState()

Cypress.Commands.add('setFixtures', () => {
  cy.writeFile('cypress/fixtures/randomUser.json', {
    "firstName": `${fakerBr.name.firstName()}`,
    "lastName": `${fakerBr.name.lastName()}`,
    "password": `${faker.internet.password()}`,
    "email": `${faker.internet.email()}`,
    'birthdate': {
      'day': 10,
      'month': faker.date.month(),
      'year': "1991"
    },
    'gender': 'Female',
    'city': fakerBr.address.city(),
    'zipCode': zipCode.split('-')[0],
    'address': fakerBr.address.streetAddress(),
    'companyName': faker.company.companyName(),
    'state': 'Arizona',
    'homePhone': faker.phone.phoneNumberFormat(),
    'mobilePhone': faker.phone.phoneNumberFormat(),
    'complement': faker.address.secondaryAddress(),
    'additionalInfo': faker.random.words(10),
    'alias': faker.internet.userName()
  })
})