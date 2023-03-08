import Form from '../pom/demoQAFormPage'

/// <reference types="cypress" />

Cypress.Commands.add('assertShouldHaveRedBorderColor', (arrayOfSelectors: string[]) => {
    for (let id of arrayOfSelectors) {
        cy.get(id).should('have.css', 'border-color', 'rgb(220, 53, 69)')
    }
})

Cypress.Commands.add('assertShouldHaveGreenBorderColor', (arrayOfSelectors: string[]) => {
    for (let id of arrayOfSelectors) {
        cy.get(id).should('have.css', 'border-color', 'rgb(40, 167, 69)')
    }
})

Cypress.Commands.add('assertShouldHaveRedColor', (arrayOfSelectors: string[]) => {
    for (let id of arrayOfSelectors) {
        cy.get(id).siblings('label').should('have.css', 'color', 'rgb(220, 53, 69)')
    }
})

Cypress.Commands.add('assertShouldHaveGreenColor', (arrayOfSelectors: string[]) => {
    for (let id of arrayOfSelectors) {
        cy.get(id).siblings('label').should('have.css', 'color', 'rgb(40, 167, 69)')
    }
})

Cypress.Commands.add('assertElementsAreVisibleAndContentMatches', (arrayOfElementsToAssert: { selector: Cypress.Chainable<JQuery<HTMLElement>>; expected: string; }[]) => {
    for (let item of arrayOfElementsToAssert) {
        item.selector.should('be.visible').should('have.text', item.expected)
    }
})

Cypress.Commands.add('assertModalDoesNotExist', () => {
    Form.selectors.modal().should('not.exist')
})

