import Chance from 'chance'
const title = 'Testing ' + Date.now()
const chance = new Chance()

const el = require('./elements').ELEMENTS
class Articles {
  verifyUserLogedin () {
    cy.contains('Your Feed').should('be.visible')
  }

  fillNewArticleForm () {
    cy.get(el.linkNewArticle).click()
    cy.get(el.inputTilte).type(title)
    cy.get(el.inputDescription).type(chance.word())
    cy.get(el.textArticle).type(chance.word())
    cy.get(el.inputTag).type(chance.word())
  }

  submitNewArticle () {
    cy.contains('button', 'Publish Article').click()
  }

  // Assertion
  verifyArticleWasCreated () {
    cy.contains(title).should('be.visible')
  }
}

export default new Articles()
