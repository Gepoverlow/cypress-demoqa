describe('fill and test form submition', () => {

    beforeEach('visit the website before every test', () => {
        cy.visit('/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

    })

    it('empty form should have invalid form input styles', () => {
        cy.get('#submit').click({ force: true })

        const redBorderElements: Array<string> = ['#firstName', '#lastName', '#userNumber']
        const greenBorderElements: Array<string> = ['#userEmail', '#dateOfBirthInput', '#currentAddress']
        const redColorElements: Array<string> = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

    })

})