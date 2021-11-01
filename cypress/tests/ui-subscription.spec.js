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
			body:{
				"user": {
					 "email":"teste@testando.com",
					 "username":"testando",
					 "bio":null,
					 "image":"https://realworld-temp-api.herokuapp.com/images/smiley-cyrus.jpeg",
					 "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNqcWlzcWhAaXNhaXNpanMuY29tIiwidXNlcm5hbWUiOiJoc2F1aHNhdWh1aCIsImJpbyI6bnVsbCwiaW1hZ2UiOiJodHRwczovL3JlYWx3b3JsZC10ZW1wLWFwaS5oZXJva3VhcHAuY29tL2ltYWdlcy9zbWlsZXktY3lydXMuanBlZyIsImlhdCI6MTYzNTczNDg2MCwiZXhwIjoxNjQwOTE4ODYwfQ.iwA_E1-jk6kgpyE-o7dc-pAXSww5hgnE3Cf_jPWziOk"
				}
		 }
		}).as('postUsers')

		 cy.visit('register')
		cy.get('input[placeholder=Username]').type('testando')
		cy.get('input[type=email]').type('teste@testando.com')
		cy.get('input[placeholder=Password]').type('password')
		cy.get('button[type=submit]').click()

		cy.contains('No articles are here... yet.').should('be.visible')
	});
});