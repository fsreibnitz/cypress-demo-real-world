import { ELEMENTS } from "./elements"
const  title =  'Testing ' + Date.now()

class Articles {

	verifyUserLogedin(){
		cy.contains('Your Feed').should('be.visible')

	}

	fillNewArticleForm(){
		cy.get(ELEMENTS.linkNewArticle).click()
		cy.get(ELEMENTS.inputTilte).type(title)
		cy.get(ELEMENTS.inputDescription).type("Testing new posting")
		cy.get(ELEMENTS.textArticle).type("Testing Testing Testing")
		cy.get(ELEMENTS.inputTag).type("Testing new cypress")
	}

	submitNewArticle(){
		cy.contains('button', 'Publish Article').click()

	}
// Assertion
	verifyArticleWasCreated(){
	cy.contains(title).should('be.visible')
	}
}

export default new Articles()