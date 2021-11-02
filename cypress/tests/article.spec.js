/// <reference types="cypress" />

import articles from '../support/pages/articles';

describe('Success new post article', () => {
	beforeEach(()=> {
		//Arange
	  cy.login()
		cy.visit('/')
	})
	it('Post Article', () => {
			articles.verifyUserLogedin()
			articles.fillNewArticleForm()
			articles.submitNewArticle()
			articles.verifyArticleWasCreated()
	});
});