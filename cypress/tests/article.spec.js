/// <reference types="cypress" />

describe('Success new post article', () => {
	beforeEach(()=> {
	  cy.login()
		cy.visit('/')
	})
	it('Post Article', () => {

		cy.contains('Your Feed').should('be.visible')
	
		const title =  'Testing ' + Date.now()
		cy.get('a.nav-link[href="#/editor/"]').click()
		cy.get('[ng-model*="title"]').type(title)
		cy.get('[ng-model*="description"]').type("Testing new posting")
		cy.get('[ng-model*="article.body"]').type("Testing Testing Testing")
		cy.get('[ng-model*="tagField"]').type("Testing new cypress")
		cy.contains('button', 'Publish Article').click()
		cy.contains(title).should('be.visible')
	});


});