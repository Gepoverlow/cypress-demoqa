/// <reference types="cypress" />

Cypress.Commands.add('assertShouldHaveRedBorderColor', (arrayOfSelectors: Array<string>) => {
    for (let selectorId of arrayOfSelectors) {
        cy.get(selectorId).should('have.css', 'border-color', 'rgb(220, 53, 69)')
    }
})

Cypress.Commands.add('assertShouldHaveGreenBorderColor', (arrayOfSelectors: Array<string>) => {
    for (let selectorId of arrayOfSelectors) {
        cy.get(selectorId).should('have.css', 'border-color', 'rgb(40, 167, 69)')
    }
})

Cypress.Commands.add('assertShouldHaveRedColor', (arrayOfSelectors: Array<string>) => {
    for (let selectorId of arrayOfSelectors) {
        cy.get(selectorId).siblings('label').should('have.css', 'color', 'rgb(220, 53, 69)')
    }
})

Cypress.Commands.add('assertShouldHaveGreenColor', (arrayOfSelectors: Array<string>) => {
    for (let selectorId of arrayOfSelectors) {
        cy.get(selectorId).siblings('label').should('have.css', 'color', 'rgb(40, 167, 69)')
    }
})