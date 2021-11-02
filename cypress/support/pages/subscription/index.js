import { ELEMENTS } from "./elements"

class  Subscription{

	fillForm(){
		cy.get(ELEMENTS.inputUsername).type('testando')
		cy.get(ELEMENTS.inputEmail).type('teste@testando.com')
		cy.get(ELEMENTS.inputPassword).type('password')
	}

	submitForm(){
		cy.get().click()

	}
}

export default new Subscription