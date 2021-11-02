const el = require('./elements').ELEMENTS
class Subscription {
  fillForm () {
    cy.get(el.inputUsername).type('testando')
    cy.get(el.inputEmail).type('teste@testando.com')
    cy.get(el.inputPassword).type('password')
  }

  submitForm () {
    cy.get(el.buttonSubmit).click()
  }
}

export default new Subscription()
