/// <reference types="cypress" />

import subscription from '../support/pages/subscription'
describe('Subscription', () => {
  it('Subscription success', () => {
    cy.intercept(
      {
        method: 'POST',
        url: 'https://api.realworld.io/api/users'
      },
      {
        statusCode: 200,
        fixture: 'success-subscription'
      }
    ).as('postUsers')

    cy.visit('register')
    subscription.submitForm()

    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Existing username', () => {
    cy.intercept(
      {
        method: 'POST',
        url: 'https://api.realworld.io/api/users'
      },
      {
        statusCode: 422,
        fixture: 'existing-user'
      }
    ).as('postUsers')

    cy.visit('register')
    subscription.fillForm()
    subscription.submitForm()

    cy.contains('username has already been taken').should('be.visible')
  })

  it('Existing email user', () => {
    cy.intercept(
      {
        method: 'POST',
        url: 'https://api.realworld.io/api/users'
      },
      {
        statusCode: 422,
        fixture: 'existing-email-user'
      }
    ).as('postUsers')

    cy.visit('register')
    subscription.fillForm()
    subscription.submitForm()
    cy.contains('email has already been taken').should('be.visible')
  })
})
