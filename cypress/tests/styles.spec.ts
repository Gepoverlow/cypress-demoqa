describe('fill and test form submission styles', () => {

    beforeEach('visit the website before every test', () => {
        cy.visit('/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

    })

    it('empty form should have invalid form input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#lastName', '#userNumber']
        const greenBorderElements: Array<string> = ['#userEmail', '#dateOfBirthInput', '#currentAddress']
        const redColorElements: Array<string> = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

    it('only valid first name input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#lastName', '#userNumber']
        const greenBorderElements: Array<string> = ['#firstName', '#userEmail', '#dateOfBirthInput', '#currentAddress']
        const redColorElements: Array<string> = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']

        cy.get('#firstName').type('John')

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

    it('only valid last name input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#userNumber']
        const greenBorderElements: Array<string> = ['#lastName', '#userEmail', '#dateOfBirthInput', '#currentAddress']
        const redColorElements: Array<string> = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']

        cy.get('#lastName').type('Doe')

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

    it('only valid user email input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#lastName', '#userNumber']
        const greenBorderElements: Array<string> = ['#userEmail', '#dateOfBirthInput', '#currentAddress']
        const redColorElements: Array<string> = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']

        cy.get('#userEmail').type('johndoe@gmail.com')

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

    it('only invalid user email input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#lastName', '#userNumber', '#userEmail']
        const greenBorderElements: Array<string> = ['#dateOfBirthInput', '#currentAddress']
        const redColorElements: Array<string> = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']

        cy.get('#userEmail').type('notavalidemail')

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

    it('only valid male gender input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#lastName', '#userNumber']
        const greenBorderElements: Array<string> = ['#userEmail', '#dateOfBirthInput', '#currentAddress']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3', '#gender-radio-1', '#gender-radio-2', '#gender-radio-3']

        cy.get('#gender-radio-1').click({ force: true })

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

    it('only valid female gender input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#lastName', '#userNumber']
        const greenBorderElements: Array<string> = ['#userEmail', '#dateOfBirthInput', '#currentAddress']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3', '#gender-radio-1', '#gender-radio-2', '#gender-radio-3']

        cy.get('#gender-radio-2').click({ force: true })

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

    it('only valid other gender input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#lastName', '#userNumber']
        const greenBorderElements: Array<string> = ['#userEmail', '#dateOfBirthInput', '#currentAddress']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3', '#gender-radio-1', '#gender-radio-2', '#gender-radio-3']

        cy.get('#gender-radio-3').click({ force: true })

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

    it('only valid mobile number input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#lastName']
        const greenBorderElements: Array<string> = ['#userEmail', '#dateOfBirthInput', '#currentAddress', '#userNumber']
        const redColorElements: Array<string> = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']

        cy.get('#userNumber').type('1212121212')

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

    it('only invalid mobile number input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#lastName', '#userNumber']
        const greenBorderElements: Array<string> = ['#userEmail', '#dateOfBirthInput', '#currentAddress']
        const redColorElements: Array<string> = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']

        cy.get('#userNumber').type('notavalidnumber')

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

    it('only valid date of birth input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#lastName', '#userNumber']
        const greenBorderElements: Array<string> = ['#userEmail', '#dateOfBirthInput', '#currentAddress']
        const redColorElements: Array<string> = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']

        cy.get('#dateOfBirthInput').type('{selectall}12 12 2012{enter}')

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })


    it('only valid sport hobby input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#lastName', '#userNumber']
        const greenBorderElements: Array<string> = ['#userEmail', '#dateOfBirthInput', '#currentAddress']
        const redColorElements: Array<string> = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']

        cy.get('#hobbies-checkbox-1').click({ force: true })

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

    it('only valid reading hobby input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#lastName', '#userNumber']
        const greenBorderElements: Array<string> = ['#userEmail', '#dateOfBirthInput', '#currentAddress']
        const redColorElements: Array<string> = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']

        cy.get('#hobbies-checkbox-2').click({ force: true })

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

    it('only valid music hobby input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#lastName', '#userNumber']
        const greenBorderElements: Array<string> = ['#userEmail', '#dateOfBirthInput', '#currentAddress']
        const redColorElements: Array<string> = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']

        cy.get('#hobbies-checkbox-3').click({ force: true })

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

    it('only valid music hobby input should have other invalid input styles', () => {

        const redBorderElements: Array<string> = ['#firstName', '#lastName', '#userNumber']
        const greenBorderElements: Array<string> = ['#userEmail', '#dateOfBirthInput', '#currentAddress']
        const redColorElements: Array<string> = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3']
        const greenColorElements: Array<string> = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']

        cy.get('#currentAddress').type('John Does real address 12 89th floor')

        cy.get('#submit').click({ force: true })

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

    })

})