import Form from '../pom/demoQAFormPage'

describe('fill and test form submission functionality', () => {

    beforeEach('visit the website before every test', () => {

        cy.visit('/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

    })

    it('partly filled in valid form displays success modal and data is correct', () => {

        Form.typeFirstName('John')
        Form.typeLastName('Doe')
        Form.selectGender(1)
        Form.typePhoneNr('123456789')

        Form.submitForm()

        const elementsToAssertCorrect = [
            { selector: Form.selectors.titleModal(), expected: 'Thanks for submitting the form' },
            { selector: Form.selectors.fullNameModal(), expected: 'John Doe' },
            { selector: Form.selectors.genderModal(), expected: 'Male' },
            { selector: Form.selectors.phoneNrModal(), expected: '123456789' },

        ]

        cy.assertElementsAreVisibleAndContentMatches(elementsToAssertCorrect)

    })

    it('fully filled in valid form displays success modal and data is correct', () => {

        Form.typeFirstName('John')
        Form.typeLastName('Doe')
        Form.typeEmail('johndoe@gmail.com')
        Form.selectGender(2)
        Form.typePhoneNr('123456789')
        Form.typeDob('{selectall}12 12 2012{enter}')
        Form.typeSubject('a{enter}')
        Form.selectHobbie(3)
        Form.uploadPicture('cypress/fixtures/example.json')
        Form.typeCurrentAddress('My address 123')
        Form.typeCityAndState('n{enter}', 'd{enter}')

        Form.submitForm()

        const elementsToAssertCorrect = [
            { selector: Form.selectors.titleModal(), expected: 'Thanks for submitting the form' },
            { selector: Form.selectors.fullNameModal(), expected: 'John Doe' },
            { selector: Form.selectors.emailModal(), expected: 'johndoe@gmail.com' },
            { selector: Form.selectors.genderModal(), expected: 'Female' },
            { selector: Form.selectors.phoneNrModal(), expected: '123456789' },
            { selector: Form.selectors.dobModal(), expected: '12 December,2012' },
            { selector: Form.selectors.subjectsModal(), expected: 'Maths' },
            { selector: Form.selectors.hobbiesModal(), expected: 'Music' },
            { selector: Form.selectors.pictureModal(), expected: 'example.json' },
            { selector: Form.selectors.addressModal(), expected: 'My address 123' },
            { selector: Form.selectors.stateAndCityModal(), expected: 'NCR Delhi' }
        ]

        cy.assertElementsAreVisibleAndContentMatches(elementsToAssertCorrect)

    })

})