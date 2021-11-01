/// <reference types="cypress" />

const { Chance } = require('chance');
var chance = require('chance')


describe('Subscription', () => {
	
	it('Subscription success', () => {
		cy.intercept({
			method: 'POST',
			url: 'https://api.realworld.io/api/users',
		}, {

			statusCode: 200,
			fixture: 'success-subscription'
		}).as('postUsers')

		cy.visit('register')
		cy.get('input[placeholder=Username]').type('testando')
		cy.get('input[type=email]').type('teste@testando.com')
		cy.get('input[placeholder=Password]').type('password')
		cy.get('button[type=submit]').click()

		cy.contains('No articles are here... yet.').should('be.visible')
	});

	it('Existing username', () => {
		cy.intercept({
			method: 'POST',
			url: 'https://api.realworld.io/api/users',
		}, {

			statusCode: 422,
			fixture: 'existing-user'
		}).as('postUsers')
	
		cy.visit('register')
		cy.get('input[placeholder=Username]').type('testando')
		cy.get('input[type=email]').type('teste@testando.com')
		cy.get('input[placeholder=Password]').type('password')
		cy.get('button[type=submit]').click()

		cy.contains('username has already been taken').should('be.visible')
	});
	
	it('Existing email user', () => {
		cy.intercept({
			method: 'POST',
			url: 'https://api.realworld.io/api/users',
		}, {

			statusCode: 422,
			fixture: 'existing-email-user'
		}).as('postUsers')
	
		cy.visit('register')
		cy.get('input[placeholder=Username]').type('testando')
		cy.get('input[type=email]').type('teste@testando.com')
		cy.get('input[placeholder=Password]').type('password')
		cy.get('button[type=submit]').click()

		cy.contains('email has already been taken').should('be.visible')
	});
});