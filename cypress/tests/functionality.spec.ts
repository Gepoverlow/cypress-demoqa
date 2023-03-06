describe('fill and test form submission functionality', () => {

    beforeEach('visit the website before every test', () => {
        cy.visit('/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it('partly filled in valid form displays success modal and data is correct', () => {
        cy.get('#firstName').type('John')
        cy.get('#lastName').type('Doe')
        cy.get('#gender-radio-1').click({ force: true })
        cy.get('#userNumber').type('123456789')

        cy.get('#submit').click({ force: true })

        cy.get('#example-modal-sizes-title-lg').should('exist').contains('Thanks for submitting the form')

        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('exist').contains('John Doe')
        cy.get('tbody > :nth-child(3) > :nth-child(2)').should('exist').contains('Male')
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should('exist').contains('123456789')

    })

    it('fully filled in valid form displays success modal and data is correct', () => {
        cy.get('#firstName').type('John')
        cy.get('#lastName').type('Doe')
        cy.get('#userEmail').type('johndoe@gmail.com')
        cy.get('#gender-radio-2').click({ force: true })
        cy.get('#userNumber').type('123456789')
        cy.get('#dateOfBirthInput').type('{selectall}12 12 2012{enter}')
        cy.get('#subjectsInput').type('a{enter}')
        cy.get('#hobbies-checkbox-3').click({ force: true })
        cy.get('#uploadPicture').selectFile('cypress/fixtures/example.json')
        cy.get('#currentAddress').type('My address 123')
        cy.get('#react-select-3-input').click({ force: true }).type('n{enter}')
        cy.get('#react-select-4-input').click({ force: true }).type('d{enter}')

        cy.get('#submit').click({ force: true })

        cy.get('#example-modal-sizes-title-lg').should('exist').contains('Thanks for submitting the form')

        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('exist').contains('John Doe')
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('exist').contains('johndoe@gmail.com')
        cy.get('tbody > :nth-child(3) > :nth-child(2)').should('exist').contains('Female')
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should('exist').contains('123456789')
        cy.get('tbody > :nth-child(5) > :nth-child(2)').should('exist').contains('12 December,2012')
        cy.get('tbody > :nth-child(6) > :nth-child(2)').should('exist').contains('Maths')
        cy.get('tbody > :nth-child(7) > :nth-child(2)').should('exist').contains('Music')
        cy.get('tbody > :nth-child(8) > :nth-child(2)').should('exist').contains('example.json')
        cy.get('tbody > :nth-child(9) > :nth-child(2)').should('exist').contains('My address 123')
        cy.get('tbody > :nth-child(10) > :nth-child(2)').should('exist').contains('NCR Delhi')

    })

})