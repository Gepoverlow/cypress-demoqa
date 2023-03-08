import Form from '../pom/demoQAFormPage'

describe('fill and test form submission styles', () => {

    const ids = Form.ids

    beforeEach('visit the website before every test', () => {
        cy.visit('/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it('empty form should have invalid form input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.lastName, ids.phoneNumber]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address]
        const redColorElements: string[] = [ids.maleGender, ids.femaleGender, ids.otherGender]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby]

        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

    it('only valid first name input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.lastName, ids.phoneNumber]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address, ids.firstName]
        const redColorElements: string[] = [ids.maleGender, ids.femaleGender, ids.otherGender]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby]

        Form.typeFirstName('John')
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

    it('only valid last name input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.phoneNumber]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address, ids.lastName]
        const redColorElements: string[] = [ids.maleGender, ids.femaleGender, ids.otherGender]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby]

        Form.typeLastName('Doe')
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

    it('only valid user email input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.lastName, ids.phoneNumber]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address]
        const redColorElements: string[] = [ids.maleGender, ids.femaleGender, ids.otherGender]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby]

        Form.typeEmail('johndoe@gmail.com')
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

    it('only invalid user email input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.lastName, ids.phoneNumber, ids.email]
        const greenBorderElements: string[] = [ids.dob, ids.address]
        const redColorElements: string[] = [ids.maleGender, ids.femaleGender, ids.otherGender]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby]

        Form.typeEmail('notavalidmail@co')
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

    it('only valid male gender input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.lastName, ids.phoneNumber]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby, ids.maleGender, ids.femaleGender, ids.otherGender]

        Form.selectGender(1)
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

    it('only valid female gender input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.lastName, ids.phoneNumber]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby, ids.maleGender, ids.femaleGender, ids.otherGender]

        Form.selectGender(2)
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

    it('only valid other gender input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.lastName, ids.phoneNumber]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby, ids.maleGender, ids.femaleGender, ids.otherGender]

        Form.selectGender(3)
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

    it('only valid mobile number input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.lastName]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address, ids.phoneNumber]
        const redColorElements: string[] = [ids.maleGender, ids.femaleGender, ids.otherGender]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby]

        Form.typePhoneNr('1231231231')
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

    it('only invalid mobile number input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.lastName, ids.phoneNumber]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address]
        const redColorElements: string[] = [ids.maleGender, ids.femaleGender, ids.otherGender]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby]

        Form.typePhoneNr('not a valid nr')
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

    it('only valid date of birth input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.lastName, ids.phoneNumber]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address]
        const redColorElements: string[] = [ids.maleGender, ids.femaleGender, ids.otherGender]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby]

        Form.typeDob('{selectall}12 12 2012{enter}')
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })


    it('only valid sport hobby input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.lastName, ids.phoneNumber]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address]
        const redColorElements: string[] = [ids.maleGender, ids.femaleGender, ids.otherGender]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby]

        Form.selectHobbie(1)
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

    it('only valid reading hobby input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.lastName, ids.phoneNumber]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address]
        const redColorElements: string[] = [ids.maleGender, ids.femaleGender, ids.otherGender]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby]

        Form.selectHobbie(2)
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

    it('only valid music hobby input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.lastName, ids.phoneNumber]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address]
        const redColorElements: string[] = [ids.maleGender, ids.femaleGender, ids.otherGender]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby]

        Form.selectHobbie(3)
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

    it('only valid music hobby input should have other invalid input styles', () => {
        const redBorderElements: string[] = [ids.firstName, ids.lastName, ids.phoneNumber]
        const greenBorderElements: string[] = [ids.email, ids.dob, ids.address]
        const redColorElements: string[] = [ids.maleGender, ids.femaleGender, ids.otherGender]
        const greenColorElements: string[] = [ids.sportsHobby, ids.readingHobby, ids.musicHobby]

        Form.typeCurrentAddress('John Does real address 12 89th floor')
        Form.submitForm()

        cy.assertShouldHaveRedBorderColor(redBorderElements)
        cy.assertShouldHaveGreenBorderColor(greenBorderElements)

        cy.assertShouldHaveRedColor(redColorElements)
        cy.assertShouldHaveGreenColor(greenColorElements)

        cy.assertModalDoesNotExist()
    })

})